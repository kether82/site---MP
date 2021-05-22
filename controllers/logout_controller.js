
/*
    defines an object which contains functions executed as callback
    when a client requests for `logout` paths in the server
*/
const logoutController = {

    /*
        executed when the client sends an HTTP GET request `/logout`
        as defined in `../routes/routes.js`
    */
    getLogOut: function (req, res) {

        /*
            logs-out the current user
            destroys the current values stored in `req.session`
        */
            console.log("destro");
            req.session.destroy(function(err) {
            if(err) throw err;

            /*
                redirects the client to `/profile` using HTTP GET,
                defined in `../routes/routes.js`
            */
                console.log("destroy???");
                console.log(req.session);
            res.redirect('/');
        });

    }

}

/*
    exports the object `logoutController` (defined above)
    when another script exports from this file
*/
module.exports = logoutController;
