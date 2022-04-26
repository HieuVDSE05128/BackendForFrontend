const config = require('./config');
const mobileRouter = require('./src/controller/router/mobileRouter');
const express = require('express');
const app = express();
const http = require('http');
// temporary hard code, should use env file 
const MOBILE_PORT = 3000;
const server = http.createServer(app);
server.listen(MOBILE_PORT, () => {
    console.log(`mobile port list on port ${MOBILE_PORT}`)
})

