
// import module `database` from `../models/db.js`
const db = require('../models/db.js');
const Handlebars = require('handlebars')
// import module `User` from `../models/UserModel.js`
const Listing = require('../models/listing_model.js');
const Comment = require('../models/comment_model.js');
const User = require('../models/user_model.js');
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
        var query = {listing_id: req.params.listing_id};
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
        db.findOne(Listing,query, projection, function(result) {

            /*
                if the user exists in the database
                render the profile page with their details
            */
            //console.log(result);
            if(result != null) {
                var details = {
                    "item_id": result.listing_id,
                    "item_name": result.name,
                    "item_desc": result.description,
                    "owner" : result.owner,
                    "rating" : result.rating
                };
                var query = {listing_id: details.item_id}
                var projection = "";
                db.findMany(Comment, query, projection, function(result){
                    console.log(result);
                    
                    if(result != null) {
                        details.comments = result.map(arr =>({
                                        "description": arr['description'],
                                        "poster": arr['poster'],
                                        "poster_name": "",
                                        "time": arr['time']
                                    }));
                                    // console.log(details.comments);
                                    details.comments.forEach((comment) => {
                                        // console.log(comment.poster);
                                        query = {user_id:comment.poster};
                                        db.findOne(User,query,"full_name",(result)=>{
                                            comment.poster_name = result.full_name;
                                        });
                                    });
                                    

                        if(req.session.user_id == details.owner){
                            details.owner_flag = true;
                        }
                            // console.log(details);
                            res.render('listing', details);
                    }
                })
                
            }
            /*
                if the user does not exist in the database
                render the error page
            */
            else {
                // render `../views/error.hbs`
                console.log("here");
                res.render('error');
            }
        });
    }
}


/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = listing_controller;
