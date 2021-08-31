const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => { console.log(`🚀 Server started, port: ${4001}`) });

app.use(express.static('public'));

