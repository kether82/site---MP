// to run nodemon/start app
// npm run start

// import module `express`
const express = require('express');

// import module `hbs`
const hbs = require('hbs');

// import module `routes` from `./routes/routes.js`
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');

const MongoStore = require('connect-mongo');
const mongoURL = 'mongodb://localhost:27017/market_place';
// import module `database` from `./model/db.js`
const db = require('./models/db.js');


const app = express();
const port = 3000;

//payload error(?)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(session({
    secret: 'market_place',
    resave: false,
    saveUnitialized: false,
    store: MongoStore.create({ 'mongoUrl': mongoURL }),
    cookie: { path: '/', httpOnly: false },
    unset: 'destroy'
}))


// set `hbs` as view engine
app.set('view engine', 'hbs');

// sets `/views/partials` as folder containing partial hbs files
hbs.registerPartials(__dirname + '/views/partials');

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// set the folder `public` as folder containing static assets
// such as css, js, and image files
app.use(express.static('public'));


// define the paths contained in `./routes/routes.js`
app.use('/', routes);

// if the route is not defined in the server, render `../views/error.hbs`
// always define this as the last middleware
app.use(function (req, res) {
    res.render('error');
});

// connects to the database
db.connect();

// binds the server to a specific port
app.listen(port || process.env.PORT, function () {
    console.log('app listening at port ' + port);
});
