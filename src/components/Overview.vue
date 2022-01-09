<template>
  <!-- UI Design -->
  <div id="Overview">
    <h1>Welcome</h1>
      <!-- Buttons to realize page jumpping -->
      <br/>
      <button type="button" v-on:click="status()">View Fleet Status Overview</button>
      <br/>
      <button type="button" v-on:click="ranking()">View Ranking Overview</button>
      <br/>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  // Methods to realize page jumping
  methods: {
    status() {
        this.$router.replace({ name: "OverviewStatus"});
    },
    ranking() {
        this.$router.replace({ name: "OverviewRank"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- CSS Setting -->
<style scoped>
#Overview {
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
