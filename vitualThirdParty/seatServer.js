const express = require('express');
const app = express();
const http = require('http');
const seatMockdata = require('./mockdata/seatMockdata.json');
// temporary hard code, should use env file 
const SEATPORT = 10002;
const server = http.createServer(app);

app.use('/getAll', (req, res, next) => {
    const {page, size} = req.query;
    res.send(pagination(seatMockdata, page, size));
})

app.use('/getById', (req, res, next) => {
    const id = Number(req.query.id)
    res.send(seatMockdata.find(ass => ass.id === id));
})

server.listen(SEATPORT, () => {
    console.log(`SEAT port list on port ${SEATPORT}`)
});


