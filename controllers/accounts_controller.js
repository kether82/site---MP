
// import module `database` from `../models/db.js`
const db = require('../models/db.js');
// import module `User` from `../models/UserModel.js`
const User = require('../models/user_model.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const accounts_controller = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    getAccounts: function (req, res) {

        db.findMany(User,{},"", function(result){
             /*
                if the user exists in the database
                render the profile page with their details
            */
                console.log(result);
                if(result != null) {
                    var details = {
                        "user_id": result.user_id,
                        "full_name": result.full_name,
                        "description": result.description,
                        "user_name" : result.user_name,
                        "rating" : result.rating
                    };
                    var query = {owner: details.user_id}
                    var projection = "name listing_id description";
                    db.findMany(Listing, query, projection, function(result){
                        console.log(result);
                        
                        if(result != null) {
                            details.item = result.map(arr =>({
                                            "item_name": arr['name'],
                                            "item_desc": arr['description'],
                                            "item_id": arr['listing_id']
                                        }));
    
                            console.log(details);
                            res.render('profile', details);
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
        })
    }
}


/*
    exports the object `profileController` (defined above)
    when another script exports from this file
*/
module.exports = accounts_controller;
