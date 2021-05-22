
// import module `mongoose`
var mongoose = require('mongoose');

// defines the schema for collection `users`
var ListingSchema = new mongoose.Schema({
    listing_id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    owner:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    image:{
        type: Buffer,
        required: true
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Listing', ListingSchema);
