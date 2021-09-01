class DeleteQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
        this.execute = this.execute.bind(this);
    }

    execute({ id }) {
        return this.quotesRepository.deleteQuote({ id });
    }
}

module.exports = DeleteQuoteService;