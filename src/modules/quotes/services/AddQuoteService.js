const { getRandomElement } = require('../../../shared/utils/utils');
const { isQuote } = require('../utils/utils');

class AddQuoteService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
        this.execute = this.execute.bind(this);
    }

    execute({ person, quote }) {
        isQuote({ person, quote });

        return this.quotesRepository.addQuote({ person, quote });
    }
}

module.exports = AddQuoteService;