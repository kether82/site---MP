
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
        db.findMany(User, {}, "", function (result) {
            // console.log(result);
            var details ={};
            if (result != null) {
                details.account = result.map(arr => ({
                    "name": arr['full_name'],
                    "rating": arr['rating'],
                    "description": arr['description'],
                    "user_name": arr['user_name'],
                    "image" : arr['image']
                }));

                if(req.session.user_id){
                    details.my_user_name = req.session.user_name;
                    details.flag = true;
                    details.user_fullname = req.session.name;
                }

                // console.log(details);
                res.render('accounts', details);

            } else {
                // render `../views/error.hbs`
                // console.log("here");
                res.render('error');
            }
        })
    }
}

module.exports = accounts_controller;
