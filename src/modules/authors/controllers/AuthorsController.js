const ListAuthorsService = require('../services/ListAuthorsSerice.js');

class AuthorsController {
    constructor(quoteRepository) {

        this.listAuthorsService = new ListAuthorsService(quoteRepository);

        this.list = this.list.bind(this);

    }

    list(request, response) {
        let authors = this.listAuthorsService.execute();

        return response.status(200).json({ authors });
    }
}


module.exports = AuthorsController;