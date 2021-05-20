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

    /*
        executed when the client sends an HTTP GET request `/chat`
        as defined in `../routes/routes.js`
    */
    

}