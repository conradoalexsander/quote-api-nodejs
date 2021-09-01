const express = require('express');
const quoteRouter = require('../modules/quotes/routes');
const authorRouter = require('../modules/authors/routes');

const routes = express();

routes.use(express.json());
routes.use('/api/quotes', quoteRouter);
routes.use('/api/authors', authorRouter);

module.exports = routes;
