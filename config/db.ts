const mongoose = require('mongoose');
const { db_connection } = require('./config.ts');

//async function connect to MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(db_connection, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        //remember to whitelist IPs
        console.log("MongoDB Connected");
    }
    catch(err) {
        console.error('The errors are: ' + err);
        //exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;