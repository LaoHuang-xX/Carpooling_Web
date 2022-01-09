<template>
  <!-- UI Design -->
  <div id="hello">
    <h1>Administrator Login</h1>
      <!-- Username and password input -->
      <br/>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <br/>
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <br/>
      <button type="button" v-on:click="login()">Login</button>
      <br/>
      <!-- The tip of administrator account -->
      <a class="Tip">Please input username as "admin", password as "123456" to login</a>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // Initial the input values
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      // Login check
      if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          // Page jumpping
          this.$router.replace({ name: "Overview" });
          // Corresponding error information
        } else {
            console.log("The username and / or password is incorrect");
          }
      } else {
          console.log("A username and password must be present");
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- CSS Setting -->
<style scoped>
#hello {
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
