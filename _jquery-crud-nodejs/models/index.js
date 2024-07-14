var mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect("mongodb://localhost/todo"); // local
mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds111876.mlab.com:11876/api", { useMongoClient: true }); //mlab

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");