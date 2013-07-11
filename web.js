var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var contents = fs.readFileSync("index.html", encoding='UTF-8');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    console.log(fs.readFile('index.html'));


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(contents);
  console.log("Listening on " + port);
});