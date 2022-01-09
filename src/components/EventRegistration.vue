<template>
  <div id="eventregistration">
    <h2>Passengers</h2>
    <router-link to="/OverviewStatus">Back</router-link>
    <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search.."/>
        <label>Search:</label>
      </div>
    <table>
      <!-- Realize the function of filter search -->
      <td>Name</td><td>ID</td><td>Phone</td><td>At Trip</td>
      <tr v-for="Participant in parfiltered">
          <td>{{ Participant.name }}</td>
          <td>{{ Participant.id }}</td>
          <td>{{ Participant.phone }}</td>
          <td>{{ Participant.currentAtTrip}}</td>
      </tr>
    <!-- Input field and button should be kept here -->
      <br/>
    </table>
    <p>
      <span v-if="errorParticipant" style="color:red">Error: {{errorParticipant}} </span>
    </p>
  </div>
</template>

<script src="./registration.js">
</script>

<style>
  table {
    position: relative;
    left: 15%;
    top: 50%;
    width: 70%;
    background: #f2ece8;
    margin: 5px;
  }

  #eventregistration {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
    position: absolute;
    left: 15%;
    top: 50%;
    width: 70%;
  }
</style>
