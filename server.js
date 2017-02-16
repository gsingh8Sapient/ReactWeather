var express = require('express');

// Create our app

var app = express();

app.use(express.static('public'));

app.listen(3030, function(){
    console.log('Express server is running on port 3030')
});