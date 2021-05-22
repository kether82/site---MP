
/*
    defines an object which contains functions executed as callback
    when a client requests for `success` paths in the server
*/
const successController = {

    /*
        executed when the client sends an HTTP GET request `/success`
        as defined in `../routes/routes.js`
    */
    getSuccess: function (req, res) {

        /*
            when passing values using HTTP GET method
            the values are stored in the req.query object
            Example url: res.redirect('/success?username=' + username + '&fullName=' + full_name + '&userID=' + user_id2);
            To retrieve the value of parameter `fName`: req.query.fName
        */
        console.log(req.session);
        var details = {
            user_name: req.query.username,
            full_name: req.query.fullName,
            userID: req.query.userID,
            my_user_name : req.query.username
        };
        // console.log(details.userID);

        // checks if a user is logged-in by checking the session data
        if(req.session.id) {

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
            req.session.user_id = details.userID;
            req.session.user_name = details.user_name;
            req.session.name = details.full_name;
            // console.log(req.session.id);
            // console.log("session stored");
        }

        // else if a user is not yet logged-in
        else
            /*
                sets `details.flag` to false
                to hide the profile and logout tabs in the nav bar
            */
            details.flag = false;

        // render `../views/success.hbs`
        res.render('success', details);
    }

}

/*
    exports the object `successController` (defined above)
    when another script exports from this file
*/
module.exports = successController;
