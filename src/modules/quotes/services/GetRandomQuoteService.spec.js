const QuotesRepository = require('../repositories/QuotesRepository');
const GetRandomQuoteService = require('./GetRandomQuoteService');

describe("Get Random Element", () => {

    it("Should get a random quote", () => {

        var quotesRepository = new QuotesRepository();

        const getRandomQuotesService = new GetRandomQuoteService(quotesRepository);

        var quote = getRandomQuotesService.execute();

        expect(quote).toHaveProperty('quote');
        expect(quote).toHaveProperty('person');
    });
});