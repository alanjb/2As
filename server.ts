// app.ts - set up server + database
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
let { port, db_connection } = require('./config');

/*
body-parser extracts the entire body portion of an
incoming request stream and exposes it on req.body
as something easier to interface with
*/

const bodyParser = require('body-parser');

// set up users, profile, posts
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//application instsance of express
const app = express();

//body parser middleware
//send a request like a sign up form to server to save the details. the server file receives request object
//http sends your form data in bits and pieces which are intended to get assembled as they reach their destination.
//body-parser parses your request and converts it into a format from which you can easily extract relevant information that you may need
//body-parser parsed your incoming request, assembled the chunks containing your form data, then created this body object for you and filled it with your form data.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

//DB config
const database = require('./config/keys').mongoURI;

//connect to MongoDB database
mongoose
  .connect(database, db_connection, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log("Error: " + err));

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

//set up route
//get is a METHOD to request data from the server
// '/' is a PATH on the server that we are requesting to
app.get('/', (req, res) => res.send('Hello World!'));

//use routes
// a method to configure the middleware used by the routes of the Express HTTP server object
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// process.env.SERVER_STRING = 'Server';
app.listen(port, () => {
  console.log(`Server running on ${port}`)
});