<template>
    <div class="dashboard-wrapper">
    <div v-if = "this.business_user" class = "dropdown">
        <div class="form-group-dropdown">
            <select class="form-control" v-model="selectedcollection">
              <option value="">Select a collection</option>
              <option v-bind:key="collection.id" v-for="collection in getOnlyGenerated(this.collections)" :value="collection">{{collection.name}}</option>
            </select>
          </div>
    </div>
        <div class = "insights">
            <div class = "anag thirty-percent">
                <div class = "middle">
                    <div class="left">
                        <h4>Anagraphics</h4>
                        <div class="dashtext-container">
                            <div class="dashtext-title">ID</div> 
                            <div>{{this.id}}</div>
                        </div>
                        <div class="dashtext-container">
                            <div class="dashtext-title">Name</div> 
                            <div>{{this.name}}</div>
                        </div>
                        <div class="dashtext-container">
                            <div class="dashtext-title">Surname</div> 
                            <div>{{this.surname}}</div>
                        </div>
                        <div class="dashtext-container">
                            <div class="dashtext-title">Date of Birth</div> 
                            <div>{{this.dateofbirth}}</div>
                        </div>
                    </div>
                    <i class="material-icons" style="font-size: 60px;">
                    assignment_ind
                    </i>
                </div>
            </div>
            <!-----------End of anag ----------->
            <div class = "car">
                <div class = "middle">
                    <div class="left">
                        <h4>My Car</h4>
                        <div class="car-container">
                            <div class="car-title">Manufacturer:</div> 
                            <div>{{this.manufacturer}}</div>
                        </div>
                        <div class="car-container">
                            <div class="car-model">Model: </div> 
                            <div>{{this.model}}</div>
                        </div>
                    </div>
                        <img class="car-logo" alt="car-logo" :src="require(`/logos/${this.manufacturer.toLowerCase()}.png`)" width="120" height="80">
                </div>
                <small class = "text-muted">Insurance issued on: 06-11-2021 </small>
            </div>
            <!-----------End of car ----------->
            <div class = "driverscore">
                <div class = "middle">
                    <div class="left">
                        <h4>DriveScore</h4>
                        <h3>Powered by Sensify©</h3>
                    </div>
                        <div class="gauge">
                        <div class="gauge__body">
                            <div :style="{'transform': 'rotate('+this.score/20+'turn)'}" class="gauge__fill"></div>
                            <div class="gauge__cover"> {{this.score}} </div>
                        </div>
                        </div>
                </div>
                <small class = "text-muted">Updated weekly</small>
            </div>
            <!-----------End of driverscore ----------->
        </div>
        <!----End of insights---->
    <div class = "row">   
        <div class = "map">
            <GMapMap
            :center="center"
            :zoom="12"
            map-type-id="hybrid"
            style="width: 500px; height: 300px"
            >
            <GMapCluster>
            <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                :language="en-EN"
                @click="center=m.position"
            />
            </GMapCluster>
            </GMapMap>
        </div>
        <div class = "history">
            <h3>Collisions history</h3>
            <table v-if = "this.accident > 0">
                <thead>
                    <tr>
                        <th v-for = "item in items" :key = "item.it"> {{item.it}} </th>     
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "i in accident" :key = "i">
                    <td v-for = "j in accident" :key = "j"> {{history[i - 1]["t"][j-1]}} </td>
                    <td class = "text-muted"> Details </td> 
                    </tr>
                </tbody>
            </table>
            <div v-else class = "noAcc"> No accidents to be shown </div>
        </div>
    </div>
</div>
</template>

<script>
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import { mapGetters } from 'vuex';



export default {

  name: 'App',
  async mounted() {
    /* TO-DO: Currently we'll go with json dumps in the assets folder.
    this.SensifyPredictionData = await API.graphql(graphqlOperation(queries.listSensifyPredictionData));
    console.log(this.SensifyPredictionData);
    */ 
    this.SensifyPredictionData = require('../assets/json_datasets/SensifyPredictionData.json');
    console.log(this.SensifyPredictionData);
    this.CustomerData = require('../assets/json_datasets/CustomerData.json');
    console.log(this.user)
    if(this.user.username==="29a5a8d7-b0c8-46b1-a4b7-017450156893"){
        this.business_user === true;
    }
  },
  data() {
    return {
      SensifyPredictionData: {},
      CustomerData: {},
      center: {lat: 41.902782, lng: 12.496366},
      id: 10101,
      name: "Paolo",
      surname: "Venti",
      dateofbirth: "19/09/1993",
      manufacturer: "Mercedes-Benz",
      model: "Class A",
      score : "5.0",
      business_user : false,
      accident : 3,
      items : [{it : "Location"},
                {it : "Time"},
                {it : "Speed"},
                ],
      history : [{t : ["Rome", "11-11-2012", "73kmh"]},
                {t : ["Rome", "22-02-2004", "34kmh"]},
                {t : ["Rome", "31-07-2022", "95kmh"]}],
      markers: [
        {
          position: {
            lat: 41.902782, lng: 12.496366
          },
        }, // Along list of clusters
      ]
    }
  },
  computed: {
    ...mapGetters({
        user: "auth/user",
        }),
    },
}
</script>
<style>

/* ------------------ root --------------*/

:root{
    --color-primary: #7380ec;
    --color-danger: #ff7782;
    --color-success: #41f1b6;
    --color-warning: #ffbb55;
    --color-white: #fff;
    --color-info-dark: #7d8da1;
    --color-info-light: #dce1eb;
    --color-dark: #363949;
    --color-light: rgba(132, 139, 200, 0.18);
    --color-primary-variant: #111e88;
    --color-dark-variant: #677483;
    --color-background: #f6f6f9;

    --card-border-radius: 2rem;
    --border-radius-1: 0.4rem;
    --border-radius-1: 0.8rem;
    --border-radius-1: 1.2rem;

    --card-padding: 2rem;
    --padding-1: 1.2rem;

    --box-shadow: 0 2rem 3rem var(--color-light);
}

/* ------------------ main --------------*/

main{
    margin-top: 1.4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
}

.anag{
    height: 200px;
}

.noAcc{
    margin-top: 2rem;
    font-style: italic;
    align-content: center;
}

.history{
    margin-top: 2rem;
}

.history table {
    width: 100%;
    text-align: center;
}

.history table tbody td{
    height: 2.5rem;
    border-bottom: 1px solid var(--color-light);
}

.history table tbody tr:last-child{
    border-bottom: none;
}

.dashtext-title {
    font-size: 1rem; 
    font-weight: bold; 
    margin-right: 10px;
}

.dashtext-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}

.car-title {
    font-size: 1rem; 
    font-weight: bold; 
    margin-right: 10px;
}

.car-model{
    font-size: 1rem; 
    font-weight: bold; 
    margin-right: 10px;
}

.car-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
}

.text-muted{
    color: var(--color-info-dark)
}

p{
    color: var(--color-dark-variant)
}

b{
    color:var(--color-dark)
}

.primary{
    color: var(--color-primary)
}

.danger{
    color: var(--color-danger)
}

.success{
    color: var(--color-success)
}

.warning{
    color: var(--color-warning)
}

/* ------------------ main --------------*/

main{
    margin-top: 1.4rem;
    margin-left: 1rem;
    margin-right: 1rem;
}

.insights{
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    gap: 1.6rem;
}

@media screen and (max-width: 850px) {
    .insights {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.6rem;
    }
}

.row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
}

.row > div{
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.row .map {
    width: 550px;
    align-items: center;
}

.row .history {
    width: 800px;
    align-items: center;
}

.row > div:hover{
    box-shadow: none;
}

.insights > div{
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    margin-bottom: 3rem;
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.insights > div:hover{
    box-shadow: none;
}

.insights > div .middle{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.insights h3{
    margin: 1rem 0 0.6rem;
    font-size: 1rem;
}

.insights .progress{
    position: relative;
    width: 92px;
    height: 92px;
    border-radius: 50%;
}

.insights svg{
    width: 7rem;
    height: 7rem;
}

.insights svg circle{
    fill: none;
    stroke: var(--color-primary);
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 110;
    stroke-dashoffset: 92;
}

.gauge {
    width: 100%;
    max-width: 200px;
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    color: #004033;
  }
  
  .gauge__body {
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: #b4c0be;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
  }
  
  .gauge__fill {
    position: absolute;
    top: 100%;
    left: 0;
    width: inherit;
    height: 100%;
    background: #009578;
    transform-origin: center top;
    transition: transform 0.2s ease-out;
  }
  .gauge__cover {
    width: 75%;
    height: 150%;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
  
    /* Text */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 25%;
    box-sizing: border-box;
  }
  .map_container > div{
    width: 550px;
    background: var(--color-white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
    display: inline-flex;
    flex-wrap: wrap;
  }
  .map_container:hover{
    box-shadow: none;
}
</style>
