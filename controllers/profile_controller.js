
// import module `database` from `../models/db.js`
const db = require('../models/db.js');
const Handlebars = require('handlebars')
// import module `User` from `../models/UserModel.js`
const User = require('../models/user_model.js');
const Listing = require('../models/listing_model.js');
/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const profile_controller = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    getProfile: function (req, res) {
        // console.log(req.session);
        // query where `idNum` is equal to URL parameter `idNum`
        // var query ={full_name: req.params.user_id };
        var query = {user_name: req.params.user_name};
        // console.log(req.params.user_id);
        //console.log(query);
 
        var projection = 'user_id full_name user_name description rating';
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
        db.findOne(User,query, projection, function(result) {

            /*
                if the user exists in the database
                render the profile page with their details
            */
            //console.log(result);
            
            if(result != null) {
                var details = {
                    "user_id": result.user_id,
                    "full_name": result.full_name,
                    "description": result.description,
                    "user_name" : result.user_name,
                    "rating" : result.rating
                };
                var query = {owner: details.user_id};
                // console.log(query);
                var projection = "name listing_id description";
                db.findMany(Listing, query, projection, function(result){
                    // console.log(result);
                    
                    if(result != null) {
                        details.item = result.map(arr =>({
                                        "item_name": arr['name'],
                                        "item_desc": arr['description'],
                                        "item_id": arr['listing_id']
                                    }));
                    }
                    // console.log(req.session.user_id + "vs" + details.user_id);
                    if(req.session.user_id == details.user_id){
                        details.owner = true;
                    }
                    console.log(req.session.id);
                    if(req.session.user_id){
                        details.my_user_name = req.session.user_name;
                        details.flag = true;
                        details.user_fullname = req.session.name;
                    }

                        // console.log(details);
                        res.render('profile', details);
                    
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

    delProfile: function(req,res){
        // console.log(req);
        // console.log(req.session.user_id);

        if(req.session.user_id){
            var user_name = req.session.user_name;
            var user_id = req.session.user_id;
            var query ={
                user_name : user_name,
                user_id : user_id
            }
            console.log(query);
            db.deleteOne(User,query,(flag) =>{
                res.redirect('/logout');
            });
        }else res.render('error');
    },

    editProfile : function(req,res){

        if(req.session.user_id){
            var user_name = req.session.user_name;
            var user_id = req.session.user_id;
            var query ={
                user_name : user_name,
                user_id : user_id
            }
            console.log(query);
            
        }else res.render('error');
    }



}


/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = profile_controller;
