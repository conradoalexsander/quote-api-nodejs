const QuotesRepository = require('../repositories/QuotesRepository');
const AddQuoteService = require('./AddQuoteService');
const AppError = require('../../../shared/errors/AppError');

var quotesRepository;
var addQuoteService;

beforeEach(() => {
    quotesRepository = new QuotesRepository();
    addQuoteService = new AddQuoteService(quotesRepository);
});

it("Given a Correct Quote, Should Add it", () => {
    var quote = addQuoteService.execute({ quote: "My new quote", person: "John Test", year: 2000 });

    expect(quote).toHaveProperty('quote');
    expect(quote).toHaveProperty('person');
    expect(quote).toHaveProperty('year');
});

