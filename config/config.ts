const dotenv = require('dotenv');
dotenv.config(); 
// if (process.env.NODE_ENV === 'development') {
//     module.exports = require('./keys_dev');
// }
// else {
//     module.exports = require('./keys_prod');
// }

module.exports = {
    node_env: process.env.NODE_ENV,
    endpoint: process.env.API_URL, 
    masterkey: process.env.API_KEY, 
    port: process.env.PORT, 
    db_connection: process.env.DB_CONN
}