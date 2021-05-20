
/*
    defines an object which contains functions executed as callback
    when a client requests for `index` paths in the server
*/
const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },
    
    /*
        executed when the client sends an HTTP GET request `/`
        as defined in `../routes/routes.js`
    */
    get_index: function (req, res) {

        // render `../views/index.hbs`
        res.render('index',{flag : false});
    },

    get_login: function(req,res){
        res.render('login');
    },

    get_signup: function(req,res){
        res.render('signup');
    },
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;
