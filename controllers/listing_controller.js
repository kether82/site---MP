
// import module `database` from `../models/db.js`
const db = require('../models/db.js');
const Handlebars = require('handlebars')
// import module `User` from `../models/UserModel.js`
const Listing = require('../models/listing_model.js');
const Comment = require('../models/comment_model.js');
const User = require('../models/user_model.js');
const fs = require('fs');
/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const listing_controller = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    getListing: function (req, res) {

        // query where `idNum` is equal to URL parameter `idNum`

        // var query ={full_name: req.params.user_id };
        var query = { listing_id: req.params.listing_id };
        // console.log(req.params.user_id);
        //console.log(query);

        var projection = '';
        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            this function searches the collection `users`
            based on the value set in object `query`
            the third parameter is a string containing fields to be returned
            the fourth parameter is a callback function
            this called when the database returns a value
            saved in variable `result` mongoose@5.9.6
        */
        // db.findMany(User,{},projection,function(result){
        //     console.log(result); 
        // });
        db.findOne(Listing, query, projection, function (result) {

            /*
                if the user exists in the database
                render the profile page with their details
            */
            //console.log(result);
            if (result != null) {
                var details = {
                    "item_id": result.listing_id,
                    "item_name": result.name,
                    "item_desc": result.description,
                    "owner": result.owner,
                    "ratingArr": result.rating,
                    "image": result.image
                };
                // rem to change 'rating' -> 'ratingArr'
                // var accu = 0;
                // details.ratingArr.forEach((rating) => {
                //     accu += rating;
                // })

                // details.rating = (accu / details.ratingArr.length).toFixed(2);
                var query = { listing_id: details.item_id }
                var projection = "";
                db.findMany(Comment, query, projection, function (result) {
                    // console.log(result);

                    if (result != null) {
                        details.comments = result.map(arr => ({
                            "description": arr['description'],
                            "poster": arr['poster'],
                            "poster_name": arr['poster_name'],
                            "time": arr['time'],
                            "comment_id" : arr['comment_id']
                        }));
                        // console.log(details.comments);
                        details.comments.forEach((comment) => {
                            // console.log(comment);
                            // query = { user_id: comment.poster };
                            // // async func is messing with the sequence.
                            // db.findOne(User, query, "full_name", (result) => {
                            //     // console.log(result.full_name);
                            //     comment.poster_name = result.full_name;
                            //     console.log(comment);
                            //     // console.log(comment.poster_name);
                            //     if(req.session.name === result.full_name){
                            //         comment.poster_owner_flag = true;
                            //     }
                            // });
                            if(comment.poster_name === req.session.user_name){
                                comment.poster_owner_flag = true;
                            }
                            // console.log(comment);
                        });
                        // console.log("ASD");
                        // console.log(details.comments);
                    }
                    if (req.session.user_id == details.owner) {
                        details.owner_flag = true;
                    }
                    if (req.session.user_id) {
                        details.my_user_name = req.session.user_name;
                        details.flag = true;
                        details.user_fullname = req.session.name;
                    }
                    


                    // console.log(details);
                    res.render('listing', details);
                })

            }
            /*
                if the user does not exist in the database
                render the error page
            */
            else {
                // render `../views/error.hbs`
                // console.log("here");
                res.render('error');
            }
        });
    },

    addListing: function (req, res) {
        // console.log(req.session.user_id);
        var listing = {};
        var name = req.body.name;
        var description = req.body.description;
        var listing_id = 0;
        var owner = req.session.user_id;
        var image = req.body.pic;
        Listing.findOne().sort('-listing_id').exec(function (err, listing) {
            if(listing != null){
                listing_id = parseInt(listing.listing_id) + 1;
            }else listing_id = 1000;
           

            listing = {
                name: name,
                description: description,
                listing_id: listing_id,
                owner: owner,
                rating: 0,
                image: image
            }

            db.insertOne(Listing, listing, function (flag) {
                if (flag) {
                    // console.log("added");
                    // res.status(200).send({listing_id : listing.listing_id})
                    res.status(200).send();
                    // res.redirect('/listing/' + listing.listing_id);
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
        if (typeof image !=='undefined' && image) update.image = image;
        console.log(image);


        let query = { listing_id: listing_id };


        db.updateOne(Listing, query, update, function (flag) {
            if (flag) res.redirect('/listing' + listing_id);
            else console.log("fail update");
        })
    },

    delListing : function(req, res){
        var listing_id = req.params.listing_id;
        var query = {listing_id : listing_id}
        db.deleteOne(Listing, query, (flag) =>{
            if(flag){
                console.log("Delete success");
                res.redirect("/profile/"+req.session.user_name);
            }
        })
    }

}



/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = listing_controller;
