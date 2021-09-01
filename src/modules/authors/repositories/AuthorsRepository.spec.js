const AuthorsRepository = require("./AuthorsRepository");

var authorsRepository;

beforeEach(() => {
    authorsRepository = new AuthorsRepository();
});

describe("listAll", () => {

    it("Should get all authors", () => {

        var authors = authorsRepository.listAll();

        expect(authors).not.toBeNull();
        expect(authors).not.toBeUndefined();
        expect(Array.isArray(authors)).toBe(true);
    });
});

