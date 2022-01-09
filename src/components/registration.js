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
  name: 'eventregistration',
  data () {
    // Initial variables
    return {
      search: '',
      passengers: [],
      errorParticipant: '',
      response: []
    }
  },
  created: function () {
    // Initializing participants from backend
    AXIOS.get(`/getPassengers`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.passengers = response.data
    })
    .catch(e => {
      this.errorParticipant = e;
    });
  },
  // Here we use function filter to realize filter search 
  computed: {
    parfiltered() {
      return this.passengers.filter(participant => {
        // Check whether the name has information searched
        return participant.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

