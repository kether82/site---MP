
// import module `database` from `../models/db.js`
const db = require('../models/db.js');
// import module `User` from `../models/UserModel.js`
const Listing = require('../models/listing_model.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `profile` paths in the server
*/
const listings_controller = {

    /*
        executed when the client sends an HTTP GET request `/profile/:idNum`
        as defined in `../routes/routes.js`
    */
    getListings: function (req, res) {

        var query = {};
        var projection = "";
        var details = {};
        db.findMany(Listing, {}, "", function (result) {
            console.log(result);

            if (result != null) {

                details.listing = result.map(arr => ({
                    "name": arr['name'],
                    "owner": arr['owner'],
                    "description": arr['description'],
                    "listing_id": arr['listing_id']
                }));
                // query ={user_id:owner};
                // projection ='full_name';
                // var owner_name;
                // db.findOne(Listing, query, projection, function(result){
                //     owner_name = result.full_name;
                // })
                //console.log(details);
                res.render('listings', details);
            }

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
module.exports = listings_controller;
