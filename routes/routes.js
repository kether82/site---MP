
// import module `express`
const express = require('express');
const validation = require('../helpers/validation.js');
// import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js')

const app = express();
const controller = require('../controllers/controller.js');
const profile_controller = require('../controllers/profile_controller.js');
const listing_controller = require('../controllers/listing_controller.js');
const login_controller = require('../controllers/login_controller.js');
const accounts_controller = require('../controllers/accounts_controller.js');
const listings_controller = require('../controllers/listings_controller.js');
const chat_controller = require('../controllers/chat_controller.js');
const register_controller = require('../controllers/register_controller.js');
const success_controller = require('../controllers/success_controller.js');
const logoutController = require('../controllers/logout_controller.js');
app.get('/', controller.get_index);
app.get('/index', controller.get_index);
// app.get('/profile', controller.get_profile);
app.get('/profile/:user_name', profile_controller.getProfile);
app.get('/listing/:listing_id', listing_controller.getListing);
// app.get('/chat',controller.get_chat);
// app.get('/chat/:user_id',chat_controller.getConversation);
app.get('/login',controller.get_login);
app.get('/login',login_controller.getLogIn);
app.post('/login', login_controller.postLogIn);
app.get('/register', register_controller.getRegister);
app.post('/register', validation.signupValidation(), register_controller.postRegister);
app.get('/check_user_name', register_controller.getCheckUserName);
app.get('/success', success_controller.getSuccess);
app.get('/accounts', accounts_controller.getAccounts);
app.get('/listings', listings_controller.getListings);
app.get('/logout', logoutController.getLogOut);
module.exports = app;
