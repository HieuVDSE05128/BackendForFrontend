const config = require('./config');
const mobileRouter = require('./src/controller/router/mobileRouter');
const webRouter = require('./src/controller/router/webRouter');
const express = require('express');
const app = express();
const http = require('http');


const PORT = 2999;
app.use('/getAll', (req, res, next) => {
    assRepository.getListAsset(req, res, next);
})

app.use('/getById', (req, res, next) => {
    const id = Number(req.query.id)
    assRepository.getAssetById(req, res, next);
})

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Port list on port ${PORT}`)
})
