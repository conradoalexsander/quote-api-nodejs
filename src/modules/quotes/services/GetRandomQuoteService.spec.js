const QuotesRepository = require('../repositories/QuotesRepository');
const GetRandomQuoteService = require('./GetRandomQuoteService');
const quotesData = require('../../../shared/storage/fake-data');

jest.mock('../repositories/QuotesRepository');

describe("Get Random Element", () => {

    it("Should get a random quote", () => {
        QuotesRepository.mockImplementation(() => {
            return {
                listAll: () => { return quotesData },
            };
        });

        var quotesRepository = new QuotesRepository();

        const getRandomQuotesService = new GetRandomQuoteService(quotesRepository);

        var quote = getRandomQuotesService.execute();

        expect(quote).not.toBeNull();
        expect(quote).not.toBeUndefined();
    })
})