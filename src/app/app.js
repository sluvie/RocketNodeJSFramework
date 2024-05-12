const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var path = require('path');
const http = require('http');

// configuration local
const configJson = require('./config.json')
const appLocals = require('./app-locals');

const dotenv = require('dotenv');
dotenv.config();

// routes
const routes = require('./routes/index');

// application
const app = express();

// set 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'))
app.locals = appLocals

// use
app.use(express.static(path.join(__dirname, '../app/public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
app.use(cookieParser());
app.use("/", routes);

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(session({
    secret: "battery-maintenance",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// server
const server = http.createServer(app);
module.exports = server;