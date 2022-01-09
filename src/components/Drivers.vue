<template>
  <!-- UI Design -->
  <div id="Drivers">
    <h2>Drivers</h2>
    <!-- Back link to previous page -->
    <router-link to="/OverviewStatus">Back</router-link>
    <!-- Search bar -->
    <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search Driver By Name"/>
        <label>Search:</label>
    </div>
    <!-- Information list -->
    <table>
      <!-- Information title -->
      <td>Name</td><td>ID</td><td>Phone</td><td>At Trip</td>
      <tr v-for="driver in driversfilted">
          <td>{{ driver.name }}</td>
          <td>{{ driver.id }}</td>
          <td>{{ driver.phone }}</td>
          <td>{{ driver.currentAtTrip}}</td>
      </tr>
      <!--
        <tr>
          <td>
              <input type="text" v-model="id" placeholder="Participant Name">
          </td>
          <td>
              <button @click="getDriversByID(id)">Create Participant</button>
          </td>
        </tr>-->
    </table>
    <!-- Error detection -->
    
    <p>
      <span v-if="errorDriver" style="color:red">Error: {{errorDriver}} </span>
    </p>
  </div>
</template>

<!-- Insert external js -->
<script src="./driver.js">
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

  #Drivers {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
    position: absolute;
    left: 15%;
    top: 50%;
    width: 70%;
  }
</style>
