
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
        if(req.session.user_id){
            res.redirect('/profile' + req.session.user_name);
        }else{
            var details={
                flag : false
            };
            res.render('index',details);
        }
    },

    get_login: function(req,res){
        res.render('login');
    },

    get_register: function(req,res){
        res.render('register',{flag : false});
    },

    get_chat: function (req, res) {

        res.render('chat',{flag : false});
    },

    get_profile: function (req, res) {

        res.render('profile', {flag : false});
    }
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = controller;
