
// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
// const controller = require('../controllers/controller.js')

const app = express();
const controller = require('../controllers/controller.js');

app.get('/index', controller.getIndex);

//routing lang ata idk 
// o nga e
module.exports = app;
