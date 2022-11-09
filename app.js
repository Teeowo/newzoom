'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 3200;
const HOST = '0.0.0.0';

// App

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile( __dirname + "/index.html");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
