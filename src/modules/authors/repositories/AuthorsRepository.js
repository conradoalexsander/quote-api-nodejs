const { authors } = require("../../../shared/storage/data");

class AuthorsRepository {
    constructor() {
        this.authors = authors;
    }

    listAll() {
        return this.authors;
    }
}

module.exports = AuthorsRepository;