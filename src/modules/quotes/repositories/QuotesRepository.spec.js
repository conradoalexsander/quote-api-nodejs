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
