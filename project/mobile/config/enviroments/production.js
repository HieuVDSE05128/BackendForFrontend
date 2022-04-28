module.exports = {
    enviroment: {
        name: 'production',
        status: 'online',
        port: 8000,
    },
    externalSystem: {
        facUrl: process.env.DEVELOPMENT_FAC_URL,
        assestUrl: process.env.DEVELOPMENT_ASSET_URL,
        seatUrl: process.env.DEVELOPMENT_SEAT_URL,
    }
}