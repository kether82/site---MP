
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
    when a client requests for `signup` paths in the server
*/
const registerController = {

    /*
        executed when the client sends an HTTP GET request `/signup`
        as defined in `../routes/routes.js`
    */
    getRegister: function (req, res) {
        var details = {};

        // checks if a user is logged-in by checking the session data
        if (req.session.user_id) {

            /*
                sets `details.flag` to true
                to display the profile and logout tabs in the nav bar

                sets the value of `details.name` to `req.session.name`
                to display the name of the logged-in user
                in the profile tab of the nav bar

                sets the value of `details.uidNum` to `req.session.idNum`
                to provide the link the profile of the logged-in user
                in the profile tab of the nav bar

                these values are rendered in `../views/partials/header.hbs`
            */
            details.flag = true;
            details.name = req.session.name;
            details.id = req.session.user_id;
        }

        // else if a user is not yet logged-in
        else
            /*
                sets `details.flag` to false
                to hide the profile and logout tabs in the nav bar
            */
            details.flag = false;

        // render `../views/signup.hbs`
        res.render('register', details);
    },

    /*
        executed when the client sends an HTTP POST request `/signup`
        as defined in `../routes/routes.js`

        prior to the execution of this function, values are validated
        with an array of validation middlewares
        defined in the object `validation` in `../helpers/validation.js`
    */
    postRegister: function (req, res) {

        // checks if there are validation errors
        var errors = validationResult(req);
        // if there are validation errors
        if (!errors.isEmpty()) {

            // get the array of errors
            errors = errors.errors;

            var details = {};

            // checks if a user is logged-in by checking the session data
            if (req.session.id) {

                /*
                    sets `details.flag` to true
                    to display the profile and logout tabs in the nav bar

                    sets the value of `details.name` to `req.session.name`
                    to display the name of the logged-in user
                    in the profile tab of the nav bar

                    sets the value of `details.uidNum` to `req.session.idNum`
                    to provide the link the profile of the logged-in user
                    in the profile tab of the nav bar

                    these values are rendered in `../views/partials/header.hbs`
                */
                details.flag = true;
                details.name = req.session.name;
                details.id = req.session.user_id;
            }

            // else if a user is not yet logged-in
            else
                /*
                    sets `details.flag` to false
                    to hide the profile and logout tabs in the nav bar
                */
                details.flag = false;

            /*
                for each error, store the error inside the object `details`
                the field is equal to the parameter + `Error`
                the value is equal to `msg`
                as defined in the validation middlewares

                for example, if there is an error for parameter `fName`:
                store the value to the field `fNameError`
            */
            details.error = "";
            for (i = 0; i < errors.length; i++)
                details.error += errors[i].msg;

            /*
                render `../views/signup.hbs`
                display the errors defined in the object `details`
            */
            res.render('register', details);
        }

        else {
            /*
                when submitting forms using HTTP POST method
                the values in the input fields are stored in `req.body` object
                each <input> element is identified using its `name` attribute
                Example: the value entered in <input type="text" name="fName">
                can be retrieved using `req.body.fName`
            */
            var user = {};
            var full_name = req.body.name;
            var username = req.body.u_name;
            var pw = req.body.p_word;
            var contact_num = req.body.contactNumber;
            var description = req.body.description;
            var user_id2 = 1000;
            var rating = 0;
            User.findOne().sort('-user_id').exec(function (err, acc) {
                user_id2 = parseInt(acc.user_id) + 1;
                // console.log(user_id2);
                user = {
                    full_name: full_name,
                    user_name: username,
                    contact_number: contact_num,
                    description: description,
                    user_id: user_id2,
                    rating: rating
                }
                console.log(user);

                bcrypt.hash(pw, saltRounds, function (err, hash) {
                    user.pw = hash;
                    console.log(user);
                    /*
                        calls the function insertOne()
                        defined in the `database` object in `../models/db.js`
                        this function adds a document to collection `users`
                    */
                    db.insertOne(User, user, function (flag) {
                        
                        if (flag) {
                            /*
                                upon adding a user to the database,
                                redirects the client to `/success` using HTTP GET,
                                defined in `../routes/routes.js`
                                passing values using URL
                                which calls getSuccess() method
                                defined in `./successController.js`
                            */
                            res.redirect('/success?username=' + username + '&fullName=' + full_name + '&userID=' + user_id2);
                        }
                    });
                });
            })



            // var user_id = db.users.find().sort({user_id:-1}).limit(1) 
            /*
                use hash() method of module `bcrypt`
                to hash the password entered by the user
                the hashed password is stored in variable `hash`
                in the callback function
            */



        }
    },

    /*
        executed when the client sends an HTTP GET request `/getCheckID`
        as defined in `../routes/routes.js`
    */
    getCheckID: function (req, res) {

        /*
            when passing values using HTTP GET method
            the values are stored in `req.query` object
            Example url: `http://localhost/getCheckID?idNum=11312345`
            To retrieve the value of parameter `idNum`: `req.query.idNum`
        */
        var id = req.query.id;

        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            searches for a single document based on the model `User`
            sends an empty string to the user if there are no match
            otherwise, sends an object containing the `idNum`
        */
        db.findOne(User, { user_id: id }, 'user_id', function (result) {
            res.send(result);
        });
    }

}

/*
    exports the object `signupController` (defined above)
    when another script exports from this file
*/
module.exports = registerController;
