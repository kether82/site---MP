// import module `validationResult` from `express-validator`
const { validationResult } = require('express-validator');

// import module `bcrypt`
const bcrypt = require('bcrypt');
const saltRounds = 10;

// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user_model.js');


/*
    defines an object which contains functions executed as callback
    when a client requests for `chat` paths in the server
*/
const  chatController = {

    getConversation: function (req, res) {
        db.findMany(User, {}, "", function (result) {
            console.log(result);
            var details ={};
            if (result != null) {
                details.account = result.map(arr => ({
                    "name": arr['full_name'],
                    "rating": arr['rating'],
                    "description": arr['description'],
                    "user_name": arr['user_name']

                }));

                //console.log(details);
                res.render('accounts', details);
            } else {
                // render `../views/error.hbs`
                console.log("here");
                res.render('error');
            }
        })
    }

}