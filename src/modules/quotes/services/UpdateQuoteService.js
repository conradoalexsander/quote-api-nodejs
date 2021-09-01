class UpdateQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
        this.execute = this.execute.bind(this);
    }

    execute({ id, person, quote }) {
        return this.quotesRepository.updateQuote({ id, person, quote });
    }
}

module.exports = UpdateQuoteService;