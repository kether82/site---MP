
// import module `database` from `../models/db.js`
const db = require('../models/db.js');
// import module `User` from `../models/UserModel.js`
const Listing = require('../models/listing_model.js');
const Comment = require('../models/comment_model.js');
const User = require('../models/user_model.js');
/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const comment_controller = {

    addComment: function (req, res) {
        // console.log(req.session.user_id);
        var comment_desc = req.body.comment;
        var listing_id = req.body.listing_id;
        var poster = req.session.user_id

        Comment.findOne().sort('-comment_id').exec(function (err, comment) {
            comment_id = parseInt(comment.comment_id) + 1;

            comment = {
                comment_id : comment_id,
                poster : poster,
                description : comment_desc,
                listing_id : listing_id
            }

            db.insertOne(Comment, comment, function (flag) {
                if (flag) {
                    res.status(200).send();
                }
            })
        })
    },

    editListing: function (req, res) {
        let name = req.body.name;
        let description = req.body.description;
        let image = req.body.image;
        let listing_id = req.body.listing_id;
        let update = {};

        if (name !== "") update.name = name;
        if (description !== "") update.description = description;
        if (image !== "") update.image = image;



        let query = { listing_id: listing_id };


        db.updateOne(Listing, query, update, function (flag) {
            if (flag) res.redirect('/listing' + listing_id);
            else console.log("fail update");
        })
    }

}



/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = comment_controller;
