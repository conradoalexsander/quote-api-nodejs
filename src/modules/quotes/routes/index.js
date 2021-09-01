const express = require('express');
const ensureIdOnHeaders = require('../../../shared/middlewares/EnsureIdOnHeaders');
const QuoteController = require('../controllers/QuoteController');
const QuotesRepository = require('../repositories/QuotesRepository');

const quoteRouter = express();

const quotesRepository = new QuotesRepository();

const quoteController = new QuoteController(quotesRepository);

quoteRouter.get('/random', quoteController.showRandom);
quoteRouter.get('/', quoteController.list);
quoteRouter.post('/', quoteController.add);
quoteRouter.put('/', ensureIdOnHeaders, quoteController.update);

module.exports = quoteRouter;