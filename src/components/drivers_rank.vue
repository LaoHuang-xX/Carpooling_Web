<template>
  <!-- UI Design -->
  <div id="driver_rank">
    <h2>Drivers Ranking</h2>
    <router-link to="/OverviewRank">Back</router-link>
    <!-- Date input -->
    <tr>
      <td>
        <input type="date" v-model="startDate" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <input type="date" v-model="endDate" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <button @click="getRankDrivers(startDate,endDate)">Search</button>
      </td>
    </tr>
    <table>
      <!-- Realize the function of filter search -->
      <!-- Information list -->
      <td>Name</td><td>ID</td><td>Phone</td><td>At Trip</td><td>Performing value</td>
      <tr v-for="driver in drivers">
          <td>{{ driver.name }}</td>
          <td>{{ driver.id }}</td>
          <td>{{ driver.phone }}</td>
          <td>{{ driver.currentAtTrip}}</td>
          <td>{{ driver.totalNo}}</td>
      </tr>
    </table>
    
    <!-- Error detection -->
    <p>
      <span v-if="errorDriverRank" style="color:red">Error: {{errorDriverRank}} </span>
    </p>
  </div>
</template>

<!-- Insert external js -->
<script src="./rank_driver.js">
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

  #driver_rank {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
    position: absolute;
    left: 15%;
    top: 50%;
    width: 70%;
  }
</style>
