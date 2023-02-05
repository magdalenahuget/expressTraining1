//GET

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.listen(3000);

//GET and POST

// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });

// app.post('/hello', function(req, res){
//    res.send("You just called the post method at '/hello'!\n");
// });

// app.listen(3000);



// // Routers

// var express = require('Express');
// var app = express();

// var things = require('./things.js');

// //both index.js and things.js should be in same directory
// app.use('/things', things);

// app.listen(3001);


// ExpressJS - URL Building - short

// var express = require('express');
// var app = express();

// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
// });
// app.listen(3000);

// ExpressJS - URL Building - long

var express = require('express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
    console.log(res);
});
app.listen(3000);

// todo: more 3endpoints
// To test the above code, go to http://localhost:3000/things/tutorialspoint/12345.