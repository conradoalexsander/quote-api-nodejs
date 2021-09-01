const { quotes } = require("../../../shared/storage/data");
const { isQuote } = require("../utils/utils");

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

    addQuote({ quote, person }) {

        isQuote({ quote, person });

        this.quotes.push({ quote, person });

        return { person, quote };
    }
}

module.exports = QuotesRepository;