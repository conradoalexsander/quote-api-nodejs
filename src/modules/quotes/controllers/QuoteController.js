const AddQuoteService = require('../services/AddQuoteService.js');
const GetRandomQuoteService = require('../services/GetRandomQuoteService.js');
const ListQuotesService = require('../services/ListQuotesSerice.js');
const UpdateQuoteService = require('../services/UpdateQuoteService.js');
const DeleteQuoteService = require('../services/DeleteQuoteService.js');
const { isQuote } = require('../utils/utils.js');

class QuoteController {
    constructor(quoteRepository) {
        this.getRandomQuoteService = new GetRandomQuoteService(quoteRepository);
        this.listQuotesService = new ListQuotesService(quoteRepository);
        this.addQuoteService = new AddQuoteService(quoteRepository);
        this.updateQuoteService = new UpdateQuoteService(quoteRepository);
        this.deleteQuoteService = new DeleteQuoteService(quoteRepository);

        this.showRandom = this.showRandom.bind(this);
        this.list = this.list.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
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

    update(request, response) {
        const { id } = request.headers;
        const { quote, person } = request.body;
        let updatedQuote = this.updateQuoteService.execute({ id, quote, person });

        return response.status(200).json({ updatedQuote });
    }

    delete(request, response) {
        const { id } = request.headers;

        this.deleteQuoteService.execute({ id });

        return response.status(201).send();
    }

}


module.exports = QuoteController;