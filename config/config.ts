const dotenv = require('dotenv');
const envConfig = require('./config.json');
const defaultEnv = envConfig.development;
dotenv.config(); 
console.log("Current environemnt: " + defaultEnv.config_id);

if(process.env.NODE_ENV === 'development'){
  module.exports = {
    config_id: envConfig.development.config_id,
    host: process.env.DEV_DB_HOST,
    node_env: process.env.NODE_ENV,
    endpoint: process.env.API_URL, 
    masterkey: process.env.API_KEY, 
    port: process.env.PORT, 
    db_connection: process.env.DB_CONN
  }
}
else{
  // add production when necessary 
  console.log('production running');
}