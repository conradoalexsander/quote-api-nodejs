class AddQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
        this.execute = this.execute.bind(this);
    }

    execute({ person, quote, year }) {

        return this.quotesRepository.addQuote({ person, quote, year });
    }
}

module.exports = AddQuoteService;