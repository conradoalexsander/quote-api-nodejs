const QuotesRepository = require("./QuotesRepository");
describe("listAll", () => {

    it("Should get all quotes", () => {
        var quotesRepository = new QuotesRepository();

        var data = quotesRepository.listAll();

        expect(data).not.toBeNull();
        expect(data).not.toBeUndefined();
        expect(Array.isArray(data.quotes)).toBe(true);
    })
})
