const express = require('express');
const QuoteController = require('../controllers/QuoteController');
const QuotesRepository = require('../repositories/QuotesRepository');

const quoteRouter = express();

const quotesRepository = new QuotesRepository();

const quoteController = new QuoteController(quotesRepository);

quoteRouter.get('/random', (request, response) => quoteController.showRandom(request, response));

module.exports = quoteRouter;