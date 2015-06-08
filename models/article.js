// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var getTags = function (tags) {
    return tags.join(',');
};

/**
 * Setters
 */

var setTags = function (tags) {
    return tags.split(',');
};
// create a schema
var ArticleSchema = new Schema({
    title: {type : String, default : '', trim : true},
    body: {type : String, default : '', trim : true},
    user: {type : Schema.ObjectId, ref : 'User'},
    comments: [{
        body: { type : String, default : '' },
        user: { type : Schema.ObjectId, ref : 'User' },
        createdAt: { type : Date, default : Date.now }
    }],
    tags: {type: [], get: getTags, set: setTags},
    image: {
        cdnUri: String,
        files: []
    },
    createdAt  : {type : Date, default : Date.now}
});

// the schema is useless so far
// we need to create a model using it
var Article = mongoose.model('Articles', ArticleSchema);

// make this available to our users in our Node applications
module.exports = Article;
