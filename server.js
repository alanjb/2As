// set up server + database
const express = require('express');
const mongoose = require('mongoose');
/*
body-parser extracts the entire body portion of an
incoming request stream and exposes it on req.body
as something easier to interface with
*/
const bodyParser = require('body-parser');

// set up users, profile,posts
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//instsance of express
const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.log("Error: " + err));

//set up route
//get is a METHOD to request data from the server
// "/" is a PATH on the server that we are requesting to
// When the route is matched,
app.get('/', (req, res) => res.send('Hello, World'));

//use routes
// a method to configure the middleware used by the routes of the Express HTTP server object
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
