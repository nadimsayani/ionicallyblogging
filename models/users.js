/**
 * Created by Nadim on 2015-06-07.
 */
// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    FirstName: String,
    LastName:String,
    Email:String,
    Password:String
});

module.exports = mongoose.model('Users', UserSchema);