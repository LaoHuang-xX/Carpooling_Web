<template>
  <div id="app">
    <!-- Parent page setting -->
    <!-- Logo image -->
    <img src="./assets/logo.png">
    <div id="nav">
      <tr>
        <!-- Logout link -->
        <td>
          <router-link to="/login">Logout</router-link>
        </td>
      </tr>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      // Administrator accounter
      mockAccount: {
        username: "admin",
        password: "123456"
      }
    }
  }
}
</script>

<!-- CSS setting -->
<style>
#nav {
  position: fixed;
  left: 0;
  top: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
