const express = require('express'),
    app = express();

var bodyParser = require('body-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local');
var Admin = require('./models/admin');

var methodOverride = require("method-override");

var photoRoutes = require('./routes/routes');
var Photos = require('./models/photo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// templating for form
app.set("view engine", "ejs");

//landing to upload photos
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));

//==============// 
//authentication//
//==============//
app.use(require('express-session') ({
    secret: "asd!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', passport.authenticate('local',
        {
            successRedirect: '/',
            failureRedirect: '/login'
        }), function(req, res) {
});

app.get('/logout', isLoggedIn, function(req, res) {
    req.logout();
    res.redirect('/login');
});

//

//handling form submissions to delete and update routes
app.use(methodOverride("_method"));

//lading EJS with forms to update the API manually
app.get('/', isLoggedIn, function(req, res) {
    res.render('index.ejs');
});

app.get('/test', isLoggedIn, function(req, res) {
    Photos.find({}, function(err, photos) {
        if(err) {
            console.log(err);
        } else {
            res.render('test.ejs', {photo: photos});
        }
    })
})

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// api routes
app.use('/api/photos', photoRoutes);
// listen
app.listen(3000, function() {
    console.log('server on msg me');
})