var express = require('express');


var app = express();



app.get('/', function(req, res) {
  res.render('index.html')
})


var port     = process.env.PORT || 8000;


app.listen(port, function() {
  console.log('Listening on port' + port )
})