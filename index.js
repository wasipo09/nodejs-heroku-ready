//Vars
var http = require('http');
var express = require('express');
var app = express();


//Sets
app.set('port', (process.env.PORT || 5000));

//Middlewares
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', function(request, response) {
  response.send('Hello World');
});

//Server
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
