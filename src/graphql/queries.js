/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSensifyInputData = /* GraphQL */ `
  query GetSensifyInputData($id: ID!) {
    getSensifyInputData(id: $id) {
      id
      AccX
      AccY
      AccZ
      GyroX
      GyroY
      GyroZ
      pedal_pos
      wheel_speed_fr
      wheel_speed_fl
      wheel_speed_rr
      wheel_speed_rl
      gps_lat
      gps_lon
      sprint
      delta_wheel_speed
      createdAt
      updatedAt
    }
  }
`;
export const listSensifyInputData = /* GraphQL */ `
  query ListSensifyInputData(
    $filter: ModelSensifyInputDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensifyInputData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        AccX
        AccY
        AccZ
        GyroX
        GyroY
        GyroZ
        pedal_pos
        wheel_speed_fr
        wheel_speed_fl
        wheel_speed_rr
        wheel_speed_rl
        gps_lat
        gps_lon
        sprint
        delta_wheel_speed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSensifyPredictionData = /* GraphQL */ `
  query GetSensifyPredictionData($id: ID!) {
    getSensifyPredictionData(id: $id) {
      id
      AccX
      AccY
      AccZ
      GyroX
      GyroY
      GyroZ
      pedal_pos
      wheel_speed_fr
      wheel_speed_fl
      wheel_speed_rr
      wheel_speed_rl
      gps_lat
      gps_lon
      sprint
      delta_wheel_speed
      safety_score
      createdAt
      updatedAt
    }
  }
`;
export const listSensifyPredictionData = /* GraphQL */ `
  query ListSensifyPredictionData(
    $filter: ModelSensifyPredictionDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensifyPredictionData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        AccX
        AccY
        AccZ
        GyroX
        GyroY
        GyroZ
        pedal_pos
        wheel_speed_fr
        wheel_speed_fl
        wheel_speed_rr
        wheel_speed_rl
        gps_lat
        gps_lon
        sprint
        delta_wheel_speed
        safety_score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
