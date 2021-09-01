const { uuid } = require("uuidv4");
const AppError = require("../../../shared/errors/AppError");
const { quotes } = require("../../../shared/storage/data");
const { isQuote } = require("../utils/utils");

class QuotesRepository {
    constructor() {
        this.quotes = quotes;
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

        const id = uuid();

        this.quotes.push({ id, quote, person });

        return { id, person, quote };
    }

    updateQuote({ id, quote, person }) {

        var quoteIndex = this.quotes.findIndex(quote => quote.id == id);

        if (quoteIndex == -1) {
            throw new AppError("Wrong Id");
        }

        if (person) quotes[quoteIndex].person = person;
        if (quote) quotes[quoteIndex].quote = quote;

        return quotes[quoteIndex];
    }

    deleteQuote({ id }) {

        var quoteIndex = this.quotes.findIndex(quote => quote.id == id);

        if (quoteIndex == -1) {
            throw new AppError("Wrong Id");
        }

        this.quotes.splice(quoteIndex, 1);
    }
}

module.exports = QuotesRepository;