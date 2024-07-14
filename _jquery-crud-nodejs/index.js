var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(4040, function() {
    console.log('app is running on 4040');
});