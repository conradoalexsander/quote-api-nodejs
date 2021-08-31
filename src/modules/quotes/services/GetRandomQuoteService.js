const { getRandomElement } = require('../../../shared/utils/utils');
const QuotesRepository = require('../repositories/QuotesRepository');

class GetRandomQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
    }

    execute() {
        const { quotes } = this.quotesRepository.listAll();

        return getRandomElement(quotes);
    }
}

module.exports = GetRandomQuoteService;