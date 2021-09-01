const QuotesRepository = require('../repositories/QuotesRepository');
const ListQuotesService = require('./ListQuotesSerice');

describe("ListQuotesService", () => {

    it("Given Non Person Parameters Should Get All Quotes", () => {
        var quotesRepository = new QuotesRepository();

        const listQuotesService = new ListQuotesService(quotesRepository);

        var quotes = listQuotesService.execute();

        quotes.forEach(quote => {
            expect(quote).toHaveProperty('quote');
            expect(quote).toHaveProperty('person');
        });
    });

    it("Given A Person Parameters Should Get Quotes Of This Person", () => {

        var quotesRepository = new QuotesRepository();

        const listQuotesService = new ListQuotesService(quotesRepository);

        const person = 'John Test';

        var quotes = listQuotesService.execute(person);

        quotes.forEach(quote => {
            expect(quote).toHaveProperty('quote');
            expect(quote).toHaveProperty('person');
        });

        expect(quotes.length).toBe(2);
    });

    it("Given A Non Registered Person Should Return Empty Array", () => {

        var quotesRepository = new QuotesRepository();

        const listQuotesService = new ListQuotesService(quotesRepository);

        const author = { person: 'Non Test' };

        var quotes = listQuotesService.execute(author);

        expect(quotes).toEqual(expect.any(Array));
        expect(quotes.length).toBe(0);
    });
});