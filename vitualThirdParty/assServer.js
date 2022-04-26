const express = require('express');
const app = express();
const http = require('http');
// temporary hard code, should use env file 
const ASSPORT = 10000;
const server = http.createServer(app);
server.listen(ASSPORT, () => {
    console.log(`Asset port list on port ${ASSPORT}`)
});


