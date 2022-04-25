/**
 * Load all config file
 */

const path = require('path');
const fs = require('fs');

// require('dotenv').load();
console.log(process.env.NODE_ENV);
const ENV = process.env.NODE_ENV || "development";

// Get config by enviroment from env config
const envConfig = require(path.join(__dirname, "enviroments", ENV));

const databaseConfig = require('./databaseConfig')

const config = Object.assign({
    databaseConfig: databaseConfig[ENV],
}, envConfig)

module.exports = config;
