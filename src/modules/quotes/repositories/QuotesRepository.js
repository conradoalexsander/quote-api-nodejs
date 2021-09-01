const { uuid } = require("uuidv4");
const AppError = require("../../../shared/errors/AppError");
const { quotes } = require("../../../shared/storage/data");
const { isQuoteCorrect } = require("../utils/utils");

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

    addQuote({ quote, person, year }) {

        isQuoteCorrect({ quote, person, year });

        const id = uuid();

        this.quotes.push({ id, quote, person });

        return { id, person, quote, year };
    }

    updateQuote({ id, quote, person, year }) {

        var quoteIndex = this.quotes.findIndex(quote => quote.id == id);

        if (quoteIndex == -1) {
            throw new AppError("Wrong Id");
        }

        if (person) quotes[quoteIndex].person = person;
        if (quote) quotes[quoteIndex].quote = quote;
        if (year) quotes[quoteIndex].year = year;

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