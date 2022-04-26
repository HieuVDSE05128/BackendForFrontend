const express = require('express');
const app = express();
const http = require('http');
// temporary hard code, should use env file 
const SEATPORT = 10002;
const server = http.createServer(app);
server.listen(SEATPORT, () => {
    console.log(`SEAT port list on port ${SEATPORT}`)
});


