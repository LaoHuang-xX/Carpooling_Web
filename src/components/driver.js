// The code from tutorial to realize calling backend
import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'https://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'https://' + config.dev.backendHost //+ ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  name: 'driver',
  data () {
    // Initial variables
    return {
      search: '',
      errorDriver: '',
      response: [],
      drivers: []
    }
  },
  created: function () {
    // Initializing participants from backend
    AXIOS.get(`/getDrivers`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.drivers = response.data
    })
    .catch(e => {
      this.errorDriver = e;
    });
  },
  methods: {
    getDriversByID: function (id) {
      AXIOS.get(`/getUserById?id=`+id)
      .then(response => {
        // JSON responses are automatically parsed.
        this.drivers = [response.data]
      })
      .catch(e => {
        this.errorDriver = e;
      });
    }
  },
  // Here we use function filter to realize filter search
  computed: {
    driversfilted() {
      return this.drivers.filter(driver => {
        // Check whether the name has information searched
        return driver.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

