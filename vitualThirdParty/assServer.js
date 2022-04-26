const express = require('express');
const app = express();
const assMockdata = require('./mockdata/assMockData.json');
const { pagination } = require('../src/util/commonFunction');

const http = require('http');
// temporary hard code, should use env file 
const ASSPORT = 10000;
const server = http.createServer(app);

app.use('/getAll', (req, res, next) => {
    const {page, size} = req.query;
    res.send(pagination(assMockdata, page, size));
})

app.use('/getById', (req, res, next) => {
    const id = Number(req.query.id)
    res.send(assMockdata.find(ass => ass.id === id));
})

server.listen(ASSPORT, () => {
    console.log(`Asset port list on port ${ASSPORT}`)
});

