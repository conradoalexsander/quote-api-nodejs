const AuthorsRepository = require('../repositories/AuthorsRepository');
const ListAuthorsService = require('./ListAuthorsSerice');

var authorsRepository;
var listAuthorsService;

//setup
beforeEach(() => {
    authorsRepository = new AuthorsRepository();
    listAuthorsService = new ListAuthorsService(authorsRepository);
});

describe("listAuthorsService", () => {

    it("Should Get All Authors", () => {

        //act
        var authors = listAuthorsService.execute();

        //assert
        authors.forEach(author => {
            expect(author).toHaveProperty('id');
            expect(author).toHaveProperty('name');
            expect(author).toHaveProperty('biography');
        });
    });
});