//GET

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.listen(3000);

//GET and POST

var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000);



// Routers

var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3001);