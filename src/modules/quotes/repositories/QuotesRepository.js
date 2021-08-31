const quotes = require("../../../shared/storage/data");

class QuotesRepository {
    constructor() {
        this.data = quotes
    }

    listAll() {
        return this.data;
    }
}

module.exports = QuotesRepository;