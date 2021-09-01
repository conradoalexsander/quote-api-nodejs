const QuotesRepository = require("./QuotesRepository");
describe("listAll", () => {

    it("Should get all quotes", () => {
        var quotesRepository = new QuotesRepository();

        var quotes = quotesRepository.listAll();

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
    });
})

describe("listByParams", () => {

    it("Given a person, should get quotes filtered by it", () => {
        var quotesRepository = new QuotesRepository();

        const author = { person: 'John Test' };

        var quotes = quotesRepository.listByPerson(author);

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(2);

        quotes.forEach(quote => expect(quote.person).toBe(author.person));
    });

    it("Given an unregistered person, should return empty array", () => {
        var quotesRepository = new QuotesRepository();

        const author = { person: 'No Test' };

        var quotes = quotesRepository.listByPerson(author);

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(0);
    });

    it("Given an person with no name, should return empty array", () => {
        var quotesRepository = new QuotesRepository();

        const author = { person: '' };

        var quotes = quotesRepository.listByPerson(author);

        expect(quotes).not.toBeNull();
        expect(quotes).not.toBeUndefined();
        expect(Array.isArray(quotes)).toBe(true);
        expect(quotes.length).toBe(0);
    });
})
