/*********************************************
server yelp api setup:
1. npm install express, nodemon and yelp api
2. go to Yelp website to get an api key, store under path './config/config.js'
**********************************************/

const express = require('express');
const yelpAPI = require('yelp-api');
const access = require('./config/config.js');
const routes = require('./routes.js');
const db = require('./models/index.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios');


const PORT = 3001;
const app = express();

db.sequelize.sync().then(data => {
  console.log('Table and Model synced')
}).catch(err => console.error(err))

app.use(express.json());
app.use('/', routes);

let apiKey = access.TOKEN;
let yelp = new yelpAPI(apiKey);

app.get('/yelp', (req, res) => {
  // hard coded data
  let params = [{ categories: req.query.categories, location: req.query.zipCode}];
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
