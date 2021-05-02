
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js')

const app = express();
const controller = {
    /*
        executed when the client sends an HTTP GET request `/`
        as defined in `../routes/routes.js`
    */
    getIndex: function (req, res) {

        // render `../views/index.hbs`
        res.render('index');
    }
}
module.exports = app;
