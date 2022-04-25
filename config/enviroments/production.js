module.exports = {
    enviroment: {
        name: 'production',
        status: 'online',
        facUrl: process.env.PRODUCTION_FAC_URL,
        assestUrl: process.env.PRODUCTION_ASSET_URL,
        seatUrl: process.env.PRODUCTION_SEAT_URL,
        port: 8000,
    }
}