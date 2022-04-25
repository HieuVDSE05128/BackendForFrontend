/**
 * All config about connecting database
 */
// Create read config by dotenv
require("dotenv").config();
module.exports = {
    development: {
        user: process.env.DATABASE_DEVELOPMENT_USER,
        password: process.env.DATABASE_DEVELOPMENT_PASSWORD
    },
    production: {
        user: process.env.DATABASE_PRODUCTION_USER,
        password: process.env.DATABASE_PRODUCTION_PASSWORD
    }
}