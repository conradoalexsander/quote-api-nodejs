const QuotesRepository = require('../repositories/QuotesRepository');
const ListQuotesService = require('./ListQuotesSerice');

var quotesRepository;
var listQuotesService;

//setup
beforeEach(() => {
    quotesRepository = new QuotesRepository();
    listQuotesService = new ListQuotesService(quotesRepository);
});

describe("ListQuotesService", () => {

    it("Given Non Person Parameters Should Get All Quotes", () => {

        //act
        var quotes = listQuotesService.execute();

        //assert
        quotes.forEach(quote => {
            expect(quote).toHaveProperty('id');
            expect(quote).toHaveProperty('quote');
            expect(quote).toHaveProperty('person');
            expect(quote).toHaveProperty('year');
        });
    });

    it("Given A Person Parameters Should Get Quotes Of This Person", () => {

        //setup
        const person = 'John Test';

        //act
        var quotes = listQuotesService.execute(person);

        //assert
        quotes.forEach(quote => {
            expect(quote).toHaveProperty('id');
            expect(quote).toHaveProperty('quote');
            expect(quote).toHaveProperty('person');
            expect(quote).toHaveProperty('year');
        });

        expect(quotes.length).toBe(2);
    });

    it("Given A Non Registered Person Should Return Empty Array", () => {

        //setup
        const author = { person: 'Non Test' };

        //act
        var quotes = listQuotesService.execute(author);

        //assert
        expect(quotes).toEqual(expect.any(Array));
        expect(quotes.length).toBe(0);
    });
});