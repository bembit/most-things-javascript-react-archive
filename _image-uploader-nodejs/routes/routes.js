var express = require('express');
    app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
var imageFilter = function(req, file, cb) {
    //accept images only
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter })

require('dotenv').load();

// api keys for cloudinary
var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var database = require('../models/index');

router.get('/', isLoggedIn, function(req, res) {
    database.Photo.find()
    .then(function(photos) {
        res.json(photos);
    })
    .catch(function(err) {
        res.send(err);
    })
});
// ALL I NEED IS TO PUSH THE CLOUDINARY URL TO MLAB
router.post('/', isLoggedIn, upload.single('image'), function(req, res) {
    //checking for name and tag, without them we don't submit images to cloudinary
        // if(req.body.name && req.body.tag) {
    cloudinary.uploader.upload(req.file.path, function(result) {
        req.body.image = result.secure_url;
        console.log(req.body);
        // }
    database.Photo.create(req.body)
    .then(function(newPhoto) {
        // res.status(201).json(newPhoto);
        // console.log(newPhoto);
        res.redirect('/');
    })
    .catch(function(err) {
        res.send(err);
        });
    });
});

router.get('/:photoId', isLoggedIn, function(req, res) {
    database.Photo.findById(req.params.photoId)
    .then(function(foundPhoto) {
        res.json(foundPhoto)
    })
    .catch(function(err){
        res.send(err);
    })
});

router.put('/:photoId', isLoggedIn, function(req, res) {
    database.Photo.findOneAndUpdate({_id: req.params.photoId}, req.body, {new: true})
    .then(function(photo) {
        res.json(photo);
    })
    .catch(function(err) {
        res.send(err);
    })
});

router.delete('/:photoId', isLoggedIn, function(req, res) {
    database.Photo.remove({_id: req.params.photoId})
    .then(function(){
        res.json({message: 'Deleted!'})
    })
    .catch(function(err) {
        res.send(err);
    })
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;