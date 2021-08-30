/*********************************************
server yelp api setup:
1. npm install express, nodemon and yelp api
2. go to Yelp website to get an api key, store under path './config/config.js'
**********************************************/

const express = require('express');
const yelpAPI = require('yelp-api');
const access = require('./config/config.js');

const PORT = 3001;
const app = express();

app.use(express.json());

let apiKey = access.TOKEN;
let yelp = new yelpAPI(apiKey);

app.get('/yelp', (req, res) => {
  // hard coded data
  let params = [{ categories: 'fitness', location: 94536}];
  yelp.query('businesses/search', params)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log('error:', err);
  });
})

app.get('/yelp/medcenters', (req, res) => {
  // hard coded data
  let params = [{ categories: 'medcenters', location: 94536}];
  yelp.query('businesses/search', params)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log('error:', err);
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost: ${PORT}`);

});
