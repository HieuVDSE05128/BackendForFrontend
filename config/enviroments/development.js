require("dotenv").config();
module.exports = {
    enviroment: {
        name: 'development',
        status: 'offline',
        facUrl: process.env.DEVELOPMENT_FAC_URL,
        assestUrl: process.env.DEVELOPMENT_ASSET_URL,
        seatUrl: process.env.DEVELOPMENT_SEAT_URL,
        port: 3000,
    }
}