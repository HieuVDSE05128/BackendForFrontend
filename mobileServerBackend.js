const config = require('./config');
const mobileRouter = require('./src/controller/router/mobileRouter');
const express = require('express');
const app = express();
const http = require('http');
const assRepository = require('./src/repository/assRepository');
const facRepository = require('./src/repository/facRepository');
// temporary hard code, should use env file 
const MOBILE_PORT = 3000;
app.use('/getAll', (req, res, next) => {
    assRepository.getListAsset(req, res, next);
})

app.use('/getById', (req, res, next) => {
    assRepository.getAssetById(req, res, next);
})

// Only mobile
app.use('/fac/getById', (req, res, next) => {
    facRepository.getFacById(req, res, next);
})

const server = http.createServer(app);
server.listen(MOBILE_PORT, () => {
    console.log(`mobile port list on port ${MOBILE_PORT}`)
})

