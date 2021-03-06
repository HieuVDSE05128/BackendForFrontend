const config = require('./config');
const webRouter = require('./src/controller/web/webRouter');
const express = require('express');
const app = express();
const http = require('http');
// temporary hard code, should use env file 
const WEB_PORT = 3001;
const server = http.createServer(app);

app.use(webRouter);

server.listen(WEB_PORT, () => {
    console.log(`web port list on port ${WEB_PORT}`)
})


