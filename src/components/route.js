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
  name: 'routes',
  data () {
    // Initial variables
    return {
      routes: [],
      errorRoute: '',
      response: [],
      searchTimeStart: '',
      searchTimeEnd: ''
    }
  },
  created: function () {
    // Initializing participants from backend
    AXIOS.get(`/getTrips`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.routes = response.data
    })
    .catch(e => {
      this.errorRoute = e;
    });
    this.searchTimeStart = '0001-01-01'
    this.searchTimeEnd = '3000-12-31'
  },
  // Set search time
  methods: {
    setSearchTime: function(time1,time2){
      this.searchTimeStart = time1
      this.searchTimeEnd = time2
    }
  },
  // Here we use function filter to realize filter search
  computed: {
    parfiltered() {
      return this.routes.filter(route => {
        var esDate = new Date(route.startDate)
        var eeDate = new Date(route.endDate)
        var Date1 = new Date(this.searchTimeStart)
        var Date2 = new Date(this.searchTimeEnd)
        // Check whether the start date before the search date and the end date after the search date
        if(esDate.getTime()>=Date1.getTime()&&(eeDate.getTime()<=Date2.getTime())){
          return route
        }
      })
    }
  }
}

