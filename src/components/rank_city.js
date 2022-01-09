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
  name: 'city_rank',
  data () {
    return {
      // Initial variables
      search: '',
      cities: [],
      newParticipant: '',
      errorcity: '',
      response: [],
      searchTimeStart: '0001-01-01',
      searchTimeEnd: '3000-12-31'
    }
  },
  created: function () {
    // Initializing participants from backend
    // Call for corresponding method to realize filter search
    
    AXIOS.get(`/getCitiesInPeriod?startDate=`+this.searchTimeStart+`&endDate=`+this.searchTimeEnd)
    .then(response => {
      // JSON responses are automatically parsed.
      this.cities = response.data
    })
    .catch(e => {
      this.errorcityRank = e;
    });
  },
  methods: {
    getRankcity: function (startDate, endDate) {
      // Call for corresponding method to realize filter search within a time period
      AXIOS.get(`/getCitiesInPeriod?startDate=`+startDate+`&endDate=`+endDate)
      .then(response => {
        // JSON responses are automatically parsed.
        this.cities = response.data
      })
      .catch(e => {
        this.errorcitytRank = e;
      });
    }
  }
}

