/**
 * All config about connecting database
 */
module.exports = {
    development: {
        user: process.env.DATABASE_DEVELOPMENT_USER,
        password: process.env.DATABASE_DEVELOPMENT_PASSWORD,
        name: process.env.DATABASE_NAME,
    },
    production: {
        user: process.env.DATABASE_PRODUCTION_USER,
        password: process.env.DATABASE_PRODUCTION_PASSWORD,
        name: process.env.DATABASE_NAME,
    }
}