require("dotenv").config();
module.exports = {
    enviroment: {
        name: 'development',
        status: 'offline',
        port: 3000,
    },
    externalSystem: {
        facUrl: process.env.DEVELOPMENT_FAC_URL,
        assestUrl: process.env.DEVELOPMENT_ASSET_URL,
        seatUrl: process.env.DEVELOPMENT_SEAT_URL,
    }
}