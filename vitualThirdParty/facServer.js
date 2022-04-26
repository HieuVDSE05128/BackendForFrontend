const express = require('express');
const app = express();
const http = require('http');
// temporary hard code, should use env file 
const FACPORT = 10001;
const server = http.createServer(app);
server.listen(FACPORT, () => {
    console.log(`FAC port list on port ${FACPORT}`)
});


