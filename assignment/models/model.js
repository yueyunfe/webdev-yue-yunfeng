var mongoose = require('mongoose');
//used in local machine
// var db = mongoose.connect('mongodb://localhost:27017/webdev');

//used in heroku
var db = mongoose.connect('mongodb://yueyunfe:123456@ds263837.mlab.com:63837/heroku_0dkpkgg7', {useMongoClient: true});

module.exports = db;
