
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var CommentSchema = new mongoose.Schema({
    comment_id:{
        type: Number,
        required: true
    },
    owner:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    }

});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Comment', CommentSchema);
