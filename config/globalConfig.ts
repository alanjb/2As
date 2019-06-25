const { node_env } = require('./config');
// requires lodash to perform merge of default and environment config
const _ = require('lodash');

const globalAny:any = global;

// read the config.json file to get environment types 
const envConfig = require('./config.json');

// make development the default config 
const defaultConfig = envConfig.development;

const environmentConfig = envConfig[node_env];
const finalConfig = _.merge(defaultConfig, environmentConfig);
globalAny.gConfig = finalConfig;

// log global.gConfig
console.log(`global.gConfig: ${JSON.stringify(globalAny.gConfig, undefined, globalAny.gConfig.json_indentation)}`);