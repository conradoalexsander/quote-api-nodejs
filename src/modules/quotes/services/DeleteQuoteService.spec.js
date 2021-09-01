const AppError = require("../../../shared/errors/AppError");
const QuotesRepository = require("../repositories/QuotesRepository");
const AddQuoteService = require("./AddQuoteService");
const DeleteQuoteService = require("./DeleteQuoteService");

var quotesRepository;
var addQuoteService;

beforeEach(() => {
    quotesRepository = new QuotesRepository();
    addQuoteService = new AddQuoteService(quotesRepository);
    deleteQuoteService = new DeleteQuoteService(quotesRepository);
});

describe("deleteQuote", () => {
    it("Given A correct Id, Should Delete The Quote it", () => {

        const quote = { quote: "My new quote", person: "John Test" };

        var addedQuote = addQuoteService.execute(quote);

        const { id } = addedQuote;

        deleteQuoteService.execute({ id });

        var quotes = quotesRepository.listAll();
        var deletedQuoteIndex = quotes.indexOf(qt => qt.id == id);

        expect(deletedQuoteIndex).toBe(-1);

    });

    it("Given an incorrect Id and Quote, Should throw error", () => {

        try {

            deleteQuoteService.execute({});

        } catch (error) {

            expect(error).toBeInstanceOf(AppError);

        }
    });
});
