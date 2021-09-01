const { getRandomElement } = require('../../../shared/utils/utils');

class GetRandomQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
    }

    execute() {
        const quotes = this.quotesRepository.listAll();

        return getRandomElement(quotes);
    }
}

module.exports = GetRandomQuoteService;