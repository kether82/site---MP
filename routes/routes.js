
// import module `express`
const express = require('express');
const validation = require('../helpers/validation.js');
// import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

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
const comment_controller = require('../controllers/comment_controller.js');

app.get('/', listings_controller.getListings);
app.get('/index', listings_controller.getListings);

app.get('/accounts', accounts_controller.getAccounts);

app.get('/profile/', register_controller.getRegister);
app.get('/profile/:user_name', profile_controller.getProfile);
app.post('/profile/addListing', listing_controller.addListing);
app.post('/profile/editProfile', profile_controller.editProfile);

// app.get('/listings', listings_controller.getListings);
app.get('/listing/:listing_id', listing_controller.getListing);
app.post('/listing/editListing', listing_controller.editListing);

app.post('/listing/addComment', comment_controller.addComment);
app.post('/listing/delComment',comment_controller.delComment);
app.post('/listing/editComment', comment_controller.editComment);

app.post('/profile/addRating',profile_controller.addRating);
app.get('/chat',controller.get_chat);
// app.get('/chat/:user_id',chat_controller.getConversation);
// app.get('/login',controller.get_login);
app.get('/login', login_controller.getLogIn);
app.post('/login', login_controller.postLogIn);

app.get('/register', register_controller.getRegister);
app.post('/register', upload.single('userPic'), validation.signupValidation(), register_controller.postRegister);
app.get('/check_user_name', register_controller.getCheckUserName);
app.get('/success', success_controller.getSuccess);


app.get('/delete_account/:user_name', profile_controller.delProfile);
// app.get('/delete_account', profile_controller.editProfile);
app.get('/logout', logoutController.getLogOut);
module.exports = app;
