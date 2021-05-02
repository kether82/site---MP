
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js')

const app = express();
const controller = require('../controllers/controller.js');
const profile_controller = require('../controllers/profile_controller.js');
app.get('/index', controller.get_index);
app.get('/profile/:user_name', profile_controller.getProfile);
// app.get('/chat',controller.get_chat);
// app.get('/login',controller.get_login);
// app.get('/register',controller.get_register);
// app.get('/accounts',controller.get_accounts);
// app.get('/listings',controller.get_listings);
// app.get('/search_accounts',controller.get_search_accounts);
// app.get('/logout',controller.get_logout);
module.exports = app;
