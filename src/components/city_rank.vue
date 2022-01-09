<template>
  <!-- UI Design -->
  <div id="city_rank">
    <h2>Cities Ranking</h2>
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
        <button @click="getRankcity(dateStart,dateEnd)">Search</button>
      </td>
    </tr>
    <table>
      <!-- Realize the function of filter search -->
      <!-- Information list -->
      <td>Name</td><td>Popular value</td>
      <tr v-for="city in cities">
          <td>{{ city.name }}</td>
          <td>{{ city.count }}</td>
      </tr>
      <br/>
    </table>
    <!-- Error detection -->
    <p>
      <span v-if="errorcityRank" style="color:red">Error: {{errorcityRank}} </span>
    </p>
  </div>
</template>

<!-- Insert external js file -->
<script src="./rank_city.js">
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

  #city_rank {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
    position: absolute;
    left: 15%;
    top: 50%;
    width: 70%;
  }
</style>
