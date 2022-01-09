import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import EventRegistration from '@/components/EventRegistration'
import Overview from '@/components/Overview'
import Drivers from '@/components/Drivers'
import Routes from '@/components/Routes'
import OverviewStatus from '@/components/OverviewStatus'
import OverviewRank from '@/components/OverviewRank'
import drivers_rank from '@/components/drivers_rank'
import passenger_rank from '@/components/passenger_rank'
import city_rank from '@/components/city_rank'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        redirect: {
          name: 'login'
        }
      },
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/app',
        name: 'EventRegistration',
        component: EventRegistration
      },
      {
        path: '/overviewstatus',
        name: 'OverviewStatus',
        component: OverviewStatus
      },
      {
        path: '/routes',
        name: 'Routes',
        component: Routes
      },
      {
        path: '/drivers',
        name: 'Drivers',
        component: Drivers
      },
      {
        path: '/overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: '/overviewrank',
        name: 'OverviewRank',
        component: OverviewRank
      },
      {
        path: '/city_rank',
        name: 'city_rank',
        component: city_rank
      },
      {
        path: '/drivers_rank',
        name: 'drivers_rank',
        component: drivers_rank
      },
      {
        path: '/passenger_rank',
        name: 'passenger_rank',
        component: passenger_rank
      }
    ]
})
