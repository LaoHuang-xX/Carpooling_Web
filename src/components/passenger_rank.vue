<template>
  <!-- UI Design -->
  <div id="passenger_rank">
    <h2>Passengers Ranking</h2>
    <router-link to="/OverviewRank">Back</router-link>
    <!-- Date input -->
    <tr>
      <td>
        <input type="date" v-model="dateStart" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <input type="date" v-model="dateEnd" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <button @click="getRankPassenger(dateStart,dateEnd)">Search</button>
      </td>
    </tr>
    <table>
      <!-- Realize the function of filter search -->
      <!-- Information list -->
      <td>Name</td><td>ID</td><td>Phone</td><td>At Trip</td><td>Loyal Value</td>
      <tr v-for="passenger in passengers">
          <td>{{ passenger.name }}</td>
          <td>{{ passenger.id }}</td>
          <td>{{ passenger.phone }}</td>
          <td>{{ passenger.currentAtTrip}}</td>
          <td>{{ passenger.totalNo}}</td>
      </tr>
    </table>
    <!-- Error detection -->
    <p>
      <span v-if="errorParticipantRank" style="color:red">Error: {{errorParticipantRank}} </span>
    </p>
  </div>
</template>

<!-- Insert external js file -->
<script src="./rank_passenger.js">
</script>

<!-- CSS Setting -->
<style>
  table {
    position: relative;
    left: 15%;
    top: 50%;
    width: 70%;
    background: #f2ece8;
    margin: 5px;
  }

  #passenger_rank {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
    position: absolute;
    left: 15%;
    top: 50%;
    width: 70%;
  }
</style>
