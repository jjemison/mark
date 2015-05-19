var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');

var express = require('express');



var app = express();






app.listen(port, function() {
  console.log('Listening on port' + port )
})