class ListAuthorsSerice {

    constructor(authorsRepository) {
        this.authorsRepository = authorsRepository;
        this.execute = this.execute.bind(this);
    }

    execute() {

        return this.authorsRepository.listAll();

    }
}

module.exports = ListAuthorsSerice;