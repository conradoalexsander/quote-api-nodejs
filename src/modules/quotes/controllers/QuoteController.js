const GetRandomQuoteService = require('../services/GetRandomQuoteService.js');

class QuoteController {
    constructor(quoteRepository) {
        this.getRandomQuoteService = new GetRandomQuoteService(quoteRepository);
    }

    showRandom(request, response) {
        const quote = this.getRandomQuoteService.execute();

        return response.send({ quote });
    }
}

module.exports = QuoteController;