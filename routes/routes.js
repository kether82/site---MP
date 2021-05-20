
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js')

const app = express();
const controller = require('../controllers/controller.js');
const profile_controller = require('../controllers/profile_controller.js');
const login_controller = require('../controllers/login_controller.js');
const signup_controller = require('../controllers/register_controller.js');
const accounts_controller = require('../controllers/accounts_controller.js');
const listings_controller = require('../controllers/listings_controller.js');

app.get('/', controller.get_index);
app.get('/index',controller.get_index);
app.get('/profile/:user_name', profile_controller.getProfile);
app.get('/chat',controller.get_chat);
// app.get('/login',login_controller.getLogIn);
app.get('/register',controller.get_register);
app.get('/accounts',accounts_controller.getAccounts);
app.get('/listings',listings_controller.getListings);
// app.get('/search_accounts',controller.get_search_accounts);
// app.get('/logout',controller.get_logout);
module.exports = app;
