var express = require('express');
var app = express();

app.get('/gethomepage', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"Content":"Welcome to the Home Page."}));
})

app.get('/getofficepage', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"Content":"Welcome to the Office Page."}));
})

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
