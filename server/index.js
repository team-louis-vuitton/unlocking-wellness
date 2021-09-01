/*********************************************
server yelp api setup:
1. npm install express, nodemon and yelp api
2. go to Yelp website to get an api key, store under path './config/config.js'
**********************************************/
const cors = require('cors');
const express = require('express');
const yelpAPI = require('yelp-api');
const access = require('./config/config.js');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios');


const PORT = 3001;
const app = express();

app.use(express.json());
app.use(cors());

let apiKey = access.TOKEN;
let yelp = new yelpAPI(apiKey);

app.get('/yelp', (req, res) => {
  let params = [{ categories: req.query.categories, location: req.query.location}];
  yelp.query('businesses/search', params)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log('error:', err);
  });
})

// app.get('/yelp/feature', (req, res) => {
//   // hard coded data
//   let params = [{ categories: 'urgent_care', location: "1900 Webster St Ste A Oakland, CA 94612"}];
//   yelp.query('businesses/search', params)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     console.log('error:', err);
//   });
// })

// var data = null;
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://partner-api.yelp.com/program/q2EbLD93gEO5uXXx7Pk3bw/features/v1");
// xhr.setRequestHeader("Authorization", `{username}:{password}`);
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     data = JSON.parse(this.responseText);
//     console.log(data);
//   }
// });
// xhr.send(data);

// app.get('/yelp/medcenters', (req, res) => {
//   // hard coded data
//   let params = [{ categories: 'medcenters', location: 94536}];
//   yelp.query('businesses/search', params)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     console.log('error:', err);
//   });
// })

app.listen(PORT, () => {
  console.log(`Server listening at localhost: ${PORT}`);

});
