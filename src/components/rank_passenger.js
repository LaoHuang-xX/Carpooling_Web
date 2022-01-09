// The code from the tutorial to call backend
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
    return {
      // Initial variables
      search: '',
      errorParticipantRank: '',
      response: [],
      passengers: [],
      searchTimeStart: '',
      searchTimeEnd: ''
    }
  },
  created: function () {
    // Initializing participants from backend
    
    AXIOS.get(`/getPassengerInPeriod?startDate=1000-01-01&endDate=3000-11-11`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.passengers = response.data
    })
    .catch(e => {
      this.errorParticipantRank = e;
    });
    
    
  },
  methods: {
    getRankPassenger: function (dateStart, dateEnd) {
      // Call for corresponding method to realize filter search within a time period
      AXIOS.get(`/getPassengerInPeriod?startDate=`+dateStart+`&endDate=`+dateEnd)
      .then(response => {
        // JSON responses are automatically parsed.
        this.passengers = response.data
      })
      .catch(e => {
        this.errorParticipantRank = e;
      });
    }
  }
}

