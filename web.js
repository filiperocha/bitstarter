var express = require('express');
var util = require('util');
var fs = require('fs');

var app = express.createServer(express.logger());
var txt;
var f=fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  txt=data.toString();
});
app.get('/', function(request, response) {
  response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});