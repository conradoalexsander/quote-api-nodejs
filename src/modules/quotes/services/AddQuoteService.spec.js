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
    var quote = addQuoteService.execute({ quote: "My new quote", person: "John Test" });

    expect(quote).toHaveProperty('quote');
    expect(quote).toHaveProperty('person');
});

it("Given an Incorrect Quote, Should Not Add it", () => {

    try {
        addQuoteService.execute({});

    } catch (error) {
        expect(error).toBeInstanceOf(AppError);
    }
});
