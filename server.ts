const express = require("express");
const path = require('path');
const { port } = require('./config/config.ts');
const connectDatabase = require('./config/db.ts');
const bodyParser = require('body-parser');
// const passport = require('passport');

// const users = require('./routes/api/users');

const app = express();

connectDatabase();

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// // parse application/json
app.use(bodyParser.json());

// // Passport middleware
// app.use(passport.initialize());
// require('./config/passport')(passport);

//get is a METHOD to request data from the server
// '/' is a PATH on the server that we are requesting to
app.get('/', (req, res) => res.send('API running'));

//use routes
// a method to configure the middleware used by the routes of the Express HTTP server object
// app.use('/api/users', users);

app.listen(port, () => console.log(`Server started on port ${port}`));
module.exports = app;