<template>
  <!-- UI Design -->
  <div id="OverviewRank">
    <h1>Welcome</h1>
      <!-- Buttons to realize page jumping -->
      <button id="back" type="button" v-on:click="back()">Back</button>
      <br/>
      <button type="button" v-on:click="city_rank()">View City Ranking</button>
      <br/>
      <button type="button" v-on:click="drivers_rank()">View Driver Ranking</button>
      <br/>
      <button type="button" v-on:click="passengers_rank()">View Passenger Ranking</button>
      <br/>
  </div>
</template>

<script>
export default {
  name: 'OverviewRank',
  // Methods to realize page jumping
  methods: {
    city_rank() {
        this.$router.replace({ name: "city_rank"});
    },
    drivers_rank() {
        this.$router.replace({ name: "drivers_rank"});
    },
    passengers_rank() {
        this.$router.replace({ name: "passenger_rank"});
    },
    back() {
        this.$router.replace({ name: "Overview"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- CSS Setting -->
<style scoped>
#OverviewRank {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 20px;
  padding: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  font-style: italic;
  font-size: 14px;
}

input, button {
  border-width: 5px;
  margin: 5px;
}
</style>
