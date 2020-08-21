import express from 'express';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from 'winston';
const connectDB = require('./config/db');
const passport = require('passport');

// Defining app
const app = express();

// Load config
dotenv.config({path: './config/config.env'});

// Connecting to Mongo
connectDB();

// Passport config
app.use(passport.initialize());
require('./config/passport')(passport);

// Defining middlewares
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining the Routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

app.use('/times', require('./routes/times'));


// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Defining port
const port = process.env.PORT || 9000;

// Listening to port
app.listen(port, console.log(`Listening On http://localhost:${port}`));

module.exports = app;
