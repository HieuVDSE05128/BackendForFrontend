const express = require('express');
const app = express();
const http = require('http');
const facMockdata = require('./mockdata/facMockdata.json');
// temporary hard code, should use env file 
const FACPORT = 10001;
const server = http.createServer(app);

app.use('/getAll', (req, res, next) => {
    const {page, size} = req.query;
    res.send(pagination(facMockdata, page, size));
})

app.use('/getById', (req, res, next) => {
    const id = Number(req.query.id)
    res.send(facMockdata.find(ass => ass.id === id));
})

server.listen(FACPORT, () => {
    console.log(`FAC port list on port ${FACPORT}`)
});




