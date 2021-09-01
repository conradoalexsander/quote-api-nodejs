class UpdateQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
        this.execute = this.execute.bind(this);
    }

    execute({ id, person, quote, year }) {
        return this.quotesRepository.updateQuote({ id, person, quote, year });
    }
}

module.exports = UpdateQuoteService;