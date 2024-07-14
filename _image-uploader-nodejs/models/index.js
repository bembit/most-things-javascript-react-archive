var mongoose = require('mongoose');
mongoose.set('debug', true);
require('dotenv').load();

mongoose.connect(process.env.MLAB_CONNECTION);
mongoose.Promise = Promise;

module.exports.Photo = require('./photo');