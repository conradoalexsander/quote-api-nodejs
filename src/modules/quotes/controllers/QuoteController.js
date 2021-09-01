const GetRandomQuoteService = require('../services/GetRandomQuoteService.js');
const ListQuotesService = require('../services/ListQuotesSerice.js');

class QuoteController {
    constructor(quoteRepository) {
        this.getRandomQuoteService = new GetRandomQuoteService(quoteRepository);
        this.listQuotesService = new ListQuotesService(quoteRepository);

        this.showRandom = this.showRandom.bind(this);
        this.list = this.list.bind(this);
    }

    showRandom(request, response) {
        const quote = this.getRandomQuoteService.execute();

        return response.json({ quote });
    }

    list(request, response) {
        const { person } = request.query;

        let quotes = this.listQuotesService.execute(person);

        return response.status(200).json({ quotes });
    }
}

module.exports = QuoteController;