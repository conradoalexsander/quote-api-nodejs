const express = require('express');
const quoteRouter = require('../modules/quotes/routes');

const routes = express();

routes.use(express.json());
routes.use('/api/quotes', quoteRouter);

module.exports = routes;
