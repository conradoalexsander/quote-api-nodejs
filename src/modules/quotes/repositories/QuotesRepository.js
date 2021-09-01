const { quotes } = require("../../../shared/storage/data");

class QuotesRepository {
    constructor() {
        this.quotes = quotes
    }

    listAll() {
        return this.quotes;
    }

    listByPerson({ person }) {
        var filteredQuotes = this.quotes.filter(quote => quote.person === person);
        return filteredQuotes;
    }
}

module.exports = QuotesRepository;