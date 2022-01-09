<template>
  <!-- UI Design -->
  <div id="OverviewStatus">
    <h1>Welcome</h1>
      <!-- Buttons to realize page jumpping -->
      <button id="back" type="button" v-on:click="back()">Back</button>
      <br/>
      <button type="button" v-on:click="routes()">View All Active Routes</button>
      <br/>
      <button type="button" v-on:click="drivers()">View All Active Drivers</button>
      <br/>
      <button type="button" v-on:click="passengers()">View All Active Passengers</button>
      <br/>
  </div>
</template>

<script>
export default {
  name: 'OverviewStatus',
  // Methods to realize page jumpping
  methods: {
    routes() {
        this.$router.replace({ name: "Routes" });
    },
    drivers() {
        this.$router.replace({ name: "Drivers" });
    },
    passengers() {
        this.$router.replace({ name: "EventRegistration" });
    },
    back() {
        this.$router.replace({ name: "Overview" });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- CSS Setting -->
<style scoped>
#OverviewStatus {
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
