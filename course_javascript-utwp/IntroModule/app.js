var greet = require('./greet.js') // "./" same location

// Exporting from my module
// greet();  <-- doesn't work here unless I export it! greet.js has to have the line --> module.exports = greet;
greet();
