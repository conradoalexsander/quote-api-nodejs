const AppError = require("../../../shared/errors/AppError");
const QuotesRepository = require("./QuotesRepository");

var quotesRepository;

beforeEach(() => {
    quotesRepository = new QuotesRepository();
});

describe("listAll", () => {

    it("Should get all quotes", () => {

        var quotes = quotesRepository.listAll();

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
    });
});

describe("listByParams", () => {

    it("Given a person, should get quotes filtered by it", () => {

        const author = { person: 'John Test' };

        var quotes = quotesRepository.listByPerson(author);

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(2);

        quotes.forEach(quote => expect(quote.person).toBe(author.person));
    });

    it("Given an unregistered person, should return empty array", () => {

        const author = { person: 'No Test' };

        var quotes = quotesRepository.listByPerson(author);

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(0);
    });

    it("Given an person with no name, should return empty array", () => {

        const author = { person: '' };

        var quotes = quotesRepository.listByPerson(author);

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(0);
    });
});

describe("addQuote", () => {

    it("Given a correct param, should add quotes", () => {

        const quote = { quote: "My new quote", person: "John Test" };

        var addedQuote = quotesRepository.addQuote(quote);

        expect(addedQuote).not.toBeNull();
        expect(addedQuote).not.toBeUndefined();
        expect(addedQuote.person).toBe(quote.person);
        expect(addedQuote.quote).toBe(quote.quote);
    });

    it("Given an incorrect param, should throw error", () => {

        const quote = {};

        try {

            quotesRepository.addQuote(quote);

        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});

describe("updateQuote", () => {
    it("Given a correct Id, Quote And Person, Should Update it", () => {

        const quote = { quote: "My new quote", person: "John Test" };

        var addedQuote = quotesRepository.addQuote(quote);

        const { id } = addedQuote;

        const newQuote = "Perfection";
        const newPerson = "John Test II";

        var updatedQuote = quotesRepository.updateQuote({ id, quote: newQuote, person: newPerson });

        expect(updatedQuote.id).toBe(id);
        expect(updatedQuote.quote).toBe(newQuote);
        expect(updatedQuote.person).toBe(newPerson);

    });
    it("Given a correct Id, Person, Should Update it And Kepps Original Quote Value", () => {

        const quote = { quote: "My new quote", person: "John Test" };

        var addedQuote = quotesRepository.addQuote(quote);

        const { id, quote: previousQuote } = addedQuote;

        const newPerson = "John Test II";

        var updatedQuote = quotesRepository.updateQuote({ id, person: newPerson });

        expect(updatedQuote.id).toBe(id);
        expect(updatedQuote.quote).toBe(previousQuote);
        expect(updatedQuote.person).toBe(newPerson);

    });

    it("Given a correct Id, Quote, Should Update it And Kepps Original Person Value", () => {

        const quote = { quote: "My new quote", person: "John Test" };

        var addedQuote = quotesRepository.addQuote(quote);

        const { id, person: previousPerson } = addedQuote;

        const newQuote = "Perfection";

        var updatedQuote = quotesRepository.updateQuote({ id, quote: newQuote });

        expect(updatedQuote.id).toBe(id);
        expect(updatedQuote.quote).toBe(newQuote);
        expect(updatedQuote.person).toBe(previousPerson);

    });

    it("Given an incorrect Id and Quote, Should throw error", () => {

        try {

            quotesRepository.updateQuote({});

        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});

describe("deleteQuote", () => {
    it("Given a correct Id Should Delete The Quote", () => {

        const quote = { quote: "My new quote", person: "John Test" };

        var addedQuote = quotesRepository.addQuote(quote);

        const { id } = addedQuote;

        quotesRepository.deleteQuote({ id });

        var quotes = quotesRepository.listAll();
        var deletedQuoteIndex = quotes.indexOf(qt => qt.id == id);

        expect(deletedQuoteIndex).toBe(-1);
    });

    it("Given an Incorrect Id, Should throw error", () => {

        try {

            quotesRepository.updateQuote({});

        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});
