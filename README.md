# T06 Inter-city Ride Sharing Application

> A Vue.js web frontend for Inter-city Ride Sharing Application

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080# T06 Inter-city Ride Sharing Application

> A Vue.js web frontend for Inter-city Ride Sharing Application

## 1. Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 2. Deliverables

### Web App View #1: Fleet Status Overview (Priority: 3/3)
- Include a means of checking the status of all active drivers and passengers in the network
- Provide a listing of all active routes, all active drivers, and all active passengers.

  - Definition of Active Routes: Journey that has been completed but yet to be completed
    - On the frontend web, there will be a column titled "Whether active"
    - true: completed ride
    - false: uncompleted ride
    
  - Definition of Active Drivers and Passengers: Drivers and passengers who are currently on a ride (i.e. in the midst of the journey)
    - On the frontend web, there will be a column titled "At trip"
    - true: Driver or passenger are currently on a ride (ie. in the midst of a journey)
    - false: Driver or passenger are currently not on a ride

- Able to filter any one of these overviews by typing text in a search box associated with each category (routes, drivers, passengers)
The filter functionality should support partial matching.
  - For example, if the administrator types “mon” in the search box of the all active routes category, active routes to “Montréal”,       “Moncton”, and “Edmonton” should appear.

#### Process:

1. Web administrator will login to the web application using the registered username and password. 

![login](https://user-images.githubusercontent.com/43051936/48961593-e0e8ca80-ef43-11e8-9036-706f6cc71784.png)

2. Directed to the landing page

![overview](https://user-images.githubusercontent.com/43051936/48961607-ff4ec600-ef43-11e8-8507-576f30b3e58b.png)

3. Select “View Fleet Status Overview” and be directed to overview page. (Figure 3)

![status overview](https://user-images.githubusercontent.com/43051936/48961618-1392c300-ef44-11e8-8840-ed6734b26fae.png)

4. Select any of the category and be directed to the specific page. 

![routes](https://user-images.githubusercontent.com/43051936/48961626-24433900-ef44-11e8-9ef0-4f4ba9a84438.png)

![drivers](https://user-images.githubusercontent.com/43051936/48961630-29a08380-ef44-11e8-99bd-3ada0919c48f.png)

![passengers](https://user-images.githubusercontent.com/43051936/48961633-2c9b7400-ef44-11e8-9cb5-571b95496b92.png)

5. To filter, web administrator can enter the keyword in the search box and click “Search”. Filtered results will be displayed. 

### Web App View #2: Ranking Overview (Priority: 3/3)
- Allow administrators to identify top performing drivers, most loyal passengers, and most popular routes.

  - Ranking of Top Performing Drivers: Drivers will be ranked by the number of journeys they have created. The greater the number of      journey created, the better the performance.
  - Ranking of Most Loyal Passengers: Passengers will be ranked by the number of trips completed. The greater the number of trips         completed, the greater the loyalty.
  - Ranking of Most Popular Routes: Cities will be ranked by its inclusion in trips. The higher the frequency of the city being           included in journeys, the greater its popularity.

- A ranking view based on completed trips will be used. The filtering of results to contain only completed trips will be done at the backend.
- Able to filter by selecting a timeframe with a start date and an end date.
- In that filtered view, only completed trips within the timeframe will be used to compute the top drivers, passengers, and routes.
  - Eg. Entering a timeframe between January 2017 and December 2017 will produce different results compared to the entering December        2017 and October 2018 as timeframe.


#### Process:

1. Web administrator will login to the web application using the registered username and password. 

![login](https://user-images.githubusercontent.com/43051936/48961593-e0e8ca80-ef43-11e8-9036-706f6cc71784.png)

2. Directed to the landing page 

![overview](https://user-images.githubusercontent.com/43051936/48961607-ff4ec600-ef43-11e8-8507-576f30b3e58b.png)

3. Select “View Ranking Overview” and be directed to the ranking overview page. 

![ranking overview](https://user-images.githubusercontent.com/43051936/48961637-38873600-ef44-11e8-87d0-4a2fa8abe0f9.png)

4. Select any of the category and be directed to the specific page. The default result is the ranking of all trips. 

![driverranking](https://user-images.githubusercontent.com/43051936/48961648-42109e00-ef44-11e8-8e0e-23e02fdd5e4c.png)

![passengerranking](https://user-images.githubusercontent.com/43051936/48961652-46d55200-ef44-11e8-963c-2dc1fc881b3b.png)

![cityrank](https://user-images.githubusercontent.com/43051936/48961655-4b9a0600-ef44-11e8-9829-5f321dc4f8f3.png)


5. To filter, web administrator can enter the start date and end date in the search boxes and click “Search”. Filtered results will be displayed. 

## 3. Current Data and Operations

Attached in the pdf file are the current data and operations. 

[Data and Operations.pdf](https://github.com/ECSE321-Fall2018/t06-web/files/2611966/Data.and.Operations.pdf)

## 4. Tests

Tests are written to validate the page redirection logic.

## 5. Job Distribution

| Team Member | Tasks |
| ------------- | ------------- |
| Chang Zhou  | Documentation and Testings  |
| Andy Zheng  | Backend Development and Deployment  |
| Xirui Zhang  | Backend Development and Deployment  |
| William Wang | Frontend Web Development  |
| Shu Fen Pun  | Documentation and Testings  |
| Xu Hai  | Frontend Web Development |



## 5. Backlog

[ECSE 321 Sprint 3 Backlog.pdf](https://github.com/ECSE321-Fall2018/t06-web/files/2611296/ECSE.321.Sprint.3.Backlog.3.pdf)
