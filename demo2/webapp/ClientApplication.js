var express = require('express');
const axios = require('axios')

var app = express();

app.get('/home', function (req, res) {
    axios.get('http://backend-service:3000/gethomepage', {})
    .then(response => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'text/plain');
      res.end(response.data.Content);
    })
    .catch(error => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'text/plain');
      res.end("Error : " + error);
    })   
})

app.get('/office', function (req, res) {
  axios.get('http://backend-service:3000/getofficepage', {})
  .then(response => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.end(response.data.Content);
  })
  .catch(error => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.end("Error : " + error);
  })   
})

app.listen(7000, function () {
  console.log("App listening on port 7000!");
});

