const AppError = require("../../../shared/errors/AppError");
const QuotesRepository = require("../repositories/QuotesRepository");
const AddQuoteService = require("./AddQuoteService");
const UpdateQuoteService = require("./UpdateQuoteService");

var quotesRepository;
var addQuoteService;
var addedQuote;

beforeEach(() => {
    quotesRepository = new QuotesRepository();
    addQuoteService = new AddQuoteService(quotesRepository);
    updateQuoteService = new UpdateQuoteService(quotesRepository);

    const quote = { quote: "My new quote", person: "John Test", year: 2000 };

    addedQuote = addQuoteService.execute(quote);
});

describe("updateQuoteService", () => {
    it("Given a correct Id, Quote, Person And Year, Should Update it", () => {

        const { id } = addedQuote;

        const newQuote = "Perfection";
        const newPerson = "John Test II";
        const newYear = new Date().getFullYear();

        var updatedQuote = updateQuoteService.execute({ id, quote: newQuote, person: newPerson, year: newYear });

        expect(updatedQuote.id).toBe(id);
        expect(updatedQuote.quote).toBe(newQuote);
        expect(updatedQuote.person).toBe(newPerson);
        expect(updatedQuote.year).toBe(newYear);

    });

    it("Given a correct Id, Person, Should Update it And Kepps Original Quote Value", () => {

        const { id, quote: previousQuote } = addedQuote;

        const newPerson = "John Test II";

        var updatedQuote = updateQuoteService.execute({ id, person: newPerson });

        expect(updatedQuote.id).toBe(id);
        expect(updatedQuote.quote).toBe(previousQuote);
        expect(updatedQuote.person).toBe(newPerson);

    });

    it("Given a correct Id, Quote, Should Update it And Kepps Original Person Value", () => {

        const { id, person: previousPerson } = addedQuote;

        const newQuote = "Perfection";

        var updatedQuote = updateQuoteService.execute({ id, quote: newQuote });

        expect(updatedQuote.id).toBe(id);
        expect(updatedQuote.quote).toBe(newQuote);
        expect(updatedQuote.person).toBe(previousPerson);

    });

    it("Given an incorrect Id and Quote, Should throw error", () => {

        try {

            updateQuoteService.execute({});

        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});
