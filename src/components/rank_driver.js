// The code from tutorial to call backend
import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'https://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'https://' + config.dev.backendHost //+ ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  name: 'driver_rank',
  data () {
    return {
      // Initial values
      search: '',
      errorDriverRank: '',
      response: [],
      drivers: [],
      searchTimeStart: '0001-01-01',
      searchTimeEnd: '3000-12-31'
    }
  },
  created: function () {
    // Initializing participants from backend
    // Call for corresponding method to realize filter search
    AXIOS.get(`/getDriversByTrip?startDate=`+this.searchTimeStart+`&endDate=`+this.searchTimeEnd)
    .then(response => {
      // JSON responses are automatically parsed.
      this.drivers = response.data
    })
    .catch(e => {
      this.errorDriverRank = e;
    });
  },
  // Set search time
  methods: {
    getRankDrivers: function (startDate, endDate) {
      // Call for corresponding method to realize filter search within a time period
      AXIOS.get(`/getDriversByTrip?startDate=`+startDate+`&endDate=`+endDate)
      .then(response => {
        // JSON responses are automatically parsed.
        this.drivers = response.data
      })
      .catch(e => {
        this.errorParticipantRank = e;
      });
    }
  }
}

