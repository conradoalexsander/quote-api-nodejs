const express = require('express');
const QuoteController = require('../controllers/QuoteController');
const QuotesRepository = require('../repositories/QuotesRepository');

const quoteRouter = express();

const quotesRepository = new QuotesRepository();

const quoteController = new QuoteController(quotesRepository);

quoteRouter.get('/random', quoteController.showRandom);
quoteRouter.get('/', (req, res) => quoteController.list(req, res));

module.exports = quoteRouter;