#!/usr/bin/env node
const express = require("express");
const connectDB = require('./config/database/db.js');
const path = require('path');

// create an express application object
const app = express();

// conntect to database
connectDB();

// Init Middleware - get data in req.body
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client//build')); 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
else{
    app.use(express.static(__dirname + '/public'));
}

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;