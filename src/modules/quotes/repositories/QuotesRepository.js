const { quotes } = require("../../../shared/storage/data");

class QuotesRepository {
    constructor() {
        this.quotes = quotes;
        this.listAll = this.listAll.bind(this);
        this.listByPerson = this.listByPerson.bind(this);
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