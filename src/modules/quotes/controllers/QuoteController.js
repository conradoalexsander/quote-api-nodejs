const AddQuoteService = require('../services/AddQuoteService.js');
const GetRandomQuoteService = require('../services/GetRandomQuoteService.js');
const ListQuotesService = require('../services/ListQuotesSerice.js');
const { isQuote } = require('../utils/utils.js');

class QuoteController {
    constructor(quoteRepository) {
        this.getRandomQuoteService = new GetRandomQuoteService(quoteRepository);
        this.listQuotesService = new ListQuotesService(quoteRepository);
        this.addQuoteService = new AddQuoteService(quoteRepository);

        this.showRandom = this.showRandom.bind(this);
        this.list = this.list.bind(this);
        this.add = this.add.bind(this);
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

    add(request, response) {
        isQuote(request.query);

        let quote = this.addQuoteService.execute(request.query);

        return response.status(200).json({ quote });
    }
}

module.exports = QuoteController;