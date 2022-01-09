<template>
  <!-- UI Design -->
  <div id="Routes">
    <h2>Routes</h2>
    <router-link to="/OverviewStatus">Back</router-link>
    <table>
      <!-- Date input -->
      <tr>
      <td>
        <input type="date" v-model="time1" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <input type="date" v-model="time2" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <button @click="setSearchTime(time1,time2)">Search Date</button>
      </td>
      <!-- Information list -->
    </tr>
      <!-- Realize the function of filter search -->
      <td>First City</td><td>Second City</td><td>Third City</td><td>Start Date</td><td>Start Time</td><td>End Date</td><td>End Time</td><td>Whether Active</td>
      <tr v-for="route in parfiltered">
          <td>{{ route.city1 }}</td>
          <td>{{ route.city2 }}</td>
          <td>{{ route.city3 }}</td>
          <td>{{ route.startDate }}</td>  
          <td>{{ route.startTime }}</td>
          <td>{{ route.endDate }}</td> 
          <td>{{ route.endTime }}</td>
          <td>{{ route.active }}</td>  
      </tr>
    </table>
    <!-- Error detection -->
    <p>
      <span v-if="errorRoute" style="color:red">Error: {{errorRoute}} </span>
    </p>
  </div>
</template>

<!-- Insert external js -->
<script src="./route.js">
</script>

<!-- CSS setting -->
<style>
  table {
    position: relative;
    left: 15%;
    top: 50%;
    width: 70%;
    background: #f2ece8;
    margin: 5px;
  }

  #Routes {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
    position: absolute;
    left: 15%;
    top: 50%;
    width: 70%;
  }
</style>
