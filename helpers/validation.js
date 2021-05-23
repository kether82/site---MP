
// import module `check` from `express-validator`
const { check } = require('express-validator');

/*
    defines an object which contains functions
    which returns array of validation middlewares
*/
const validation = {

    /*
        function which returns an array of validation middlewares
        called when the client sends an HTTP POST request for `/signup`
    */
    signupValidation: function () {

        /*
            object `validation` is an array of validation middlewares.
            the first parameter in method check() is the field to check
            the second parameter in method check() is the error message
            to be displayed when the value to the parameter fails
            the validation
        */
        console.log("validation");
        var validation = [

            check('name', 'First name should not be empty.').notEmpty(),

            check('u_name', 'Last name should not be empty.').notEmpty(),

            check('p_word', 'Password should not be empty.').notEmpty(),

            check('contactNumber', 'Contact Number should not be empty').notEmpty(),
        ];

        return validation;
    }
}

/*
    exports the object `validation` (defined above)
    when another script exports from this file
*/
module.exports = validation;
