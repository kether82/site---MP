
// import module `bcrypt`
const bcrypt = require('bcrypt');

// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/user_model.js');

/*
    defines an object which contains functions executed as callback
    when a client requests for `login` paths in the server
*/
const loginController = {

    /*
        executed when the client sends an HTTP GET request `/login`
        as defined in `../routes/routes.js`
    */
    getLogIn: function (req, res) {

        // checks if a user is logged-in by checking the session data
        if (req.session.user_id) {

            /*
                redirects the client to `/profile` using HTTP GET,
                defined in `../routes/routes.js`
                passing values using URL
                which calls getProfile() method
                defined in `./profileController.js`
            */
            res.redirect('/profile/' + req.session.user_name);
        }

        // else if a user is not yet logged-in
        else {

            /*
                sets `details.flag` to false
                to hide the profile and logout tabs in the nav bar
            */
            var details = {
                flag: false
            };

            // render `../views/login.hbs`
            res.render('login', details);
        }
    },

    /*
        executed when the client sends an HTTP POST request `/login`
        as defined in `../routes/routes.js`
    */
    postLogIn: function (req, res) {

        /*
            when submitting forms using HTTP POST method
            the values in the input fields are stored in `req.body` object
            each <input> element is identified using its `name` attribute
            Example: the value entered in <input type="text" name="idNum">
            can be retrieved using `req.body.idNum`
        */
        var username = req.body.username;
        var pw = req.body.password;

        // TODO REMEMBER ME
        // var rem = req.body.rememberMe;
        // console.log(rem);
        // if(rem){
        //     req.session.cookie.maxAge = 7 * 24 * 3600000 // 1 week
        // }else{
        //     req.session.cookie.expires = false;
        // }
        /*
            calls the function findOne()
            defined in the `database` object in `../models/db.js`
            this function finds a document from collection `users`
            where `idNum` is equal to `idNum`
        */
        var query = { user_name: username }
        db.findOne(User, query, '', function (result) {

            // if a user with `idNum` equal to `idNum` exists
            if (result) {

                var user = {
                    id: result.user_id,
                    name: result.full_name,
                    user_name: result.user_name
                };

                /*
                    use compare() method of module `bcrypt`
                    to check if the password entered by the user
                    is equal to the hashed password in the database
                */
                bcrypt.compare(pw, result.pw, function (err, equal) {

                    /*
                        if the entered password
                        match the hashed password from the database
                    */
                    if (equal) {

                        /*
                            stores `user.idNum` to `req.session.idNum`
                            stores `user.fName` to `req.session.name`

                            these values are stored to the `req.session` object
                            to indicate that a user is logged-in
                            these values will be removed
                            if the user logs-out from the web application
                        */
                        req.session.user_id = user.id;
                        req.session.name = user.name;
                        req.session.user_name = user.user_name;
                        /*
                            redirects the client to `/profile/idNum`
                            where `idNum` is equal
                            to the `idNum` entered by the user
                            defined in `../routes/routes.js`
                            which calls getProfile() method
                            defined in `./profileController.js`
                        */

                        res.redirect('/profile/' + user.user_name);
                    }

                    /*
                        else if the entered password
                        does not match the hashed password from the database
                    */
                    else {

                        /*
                            sets `details.flag` to false
                            to hide the profile and logout tabs in the nav bar
                        */
                        var details = {
                            flag: false,
                            error: `Password is incorrect.`
                        };

                        /*
                            render `../views/login.hbs`
                            display the errors
                        */
                        res.render('login', details);
                    }
                });
            }

            // else if a user with `idNum` equal to `idNum` does not exist
            else {

                /*
                    sets `details.flag` to false
                    to hide the profile and logout tabs in the nav bar
                */
                var details = {
                    flag: false,
                    error: `Username and/or Password is incorrect.`
                };

                /*
                    render `../views/login.hbs`
                    display the errors
                */
                res.render('login', details);
            }
        });
    }
}

/*
    exports the object `loginController` (defined above)
    when another script exports from this file
*/
module.exports = loginController;
