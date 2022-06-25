import csv
import boto3

tableName = 'CustomerData-fm6py7thqrfubd3rk64cwtymzq-dev'
filename = './CustomerData.csv'

''' SCHEMA
  id: Int
  driver_id: Int
  firstname: String
  lastname: String
  birthday: String
  oem: String
  car_model: String
  plate_number: String
  n_accidents: Int
'''

def convert_csv_to_json_list(file):
    items = []
    with open(file) as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data = {}
            data['id'] = row['id']
            data['driver_id'] = row['driver_id']
            data['firstname'] = row['firstname']
            data['lastname'] = row['lastname']
            data['birthday'] = row['birthday']
            data['oem'] = row['oem']
            data['car_model'] = row['car_model']
            data['plate_number'] = row['plate_number']
            data['n_accidents'] = row['n_accidents']
            items.append(data)
    return items

def batch_write(items):
   dynamodb = boto3.resource('dynamodb')
   db = dynamodb.Table(tableName)

   attrs = db.attribute_definitions
   print(attrs)

   with db.batch_writer() as batch:
      for item in items:
        print(item)
        batch.put_item(Item=item)

if __name__ == '__main__':
   json_data = convert_csv_to_json_list(filename)
   batch_write(json_data)
