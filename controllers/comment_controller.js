
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
            if(comment != null){
                comment_id = parseInt(comment.comment_id) + 1;
            }else comment_id = 100;

            comment = {
                comment_id : comment_id,
                poster : poster,
                description : comment_desc,
                listing_id : listing_id,
                poster_name : req.session.user_name
            }

            db.insertOne(Comment, comment, function (flag) {
                if (flag) {
                    res.status(200).send();
                }
            })
        })
    },

    editComment: function (req, res) {
        let comment_id = req.body.comment_id;
        let description = req.body.description; 
        console.log("desc:"+description);
        console.log("cid:"+comment_id);
        let query = { comment_id: comment_id };
        let update = { description : description }

        db.updateOne(Comment, query, update, function (flag) {
            if (flag){
                console.log('suc update');
                res.status(200).send();
            } 
            else console.log("fail update");
        })
    },

    delComment: function(req,res){
        let comment_id  = req.body.comment_id;
        console.log(comment_id);
        db.deleteOne(Comment,{comment_id : comment_id},(flag)=>{
            if(flag){
                console.log("delete success");
                res.status(200).send();
            }
        })  
    }

}



/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = comment_controller;
