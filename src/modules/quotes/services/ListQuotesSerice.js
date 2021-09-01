class ListQuotesService {

    constructor(quotesRepository) {
        this.quotesRepository = quotesRepository;
        this.execute = this.execute.bind(this);
    }

    execute(person = null) {

        let quotes = [];

        if (person == null)
            quotes = this.quotesRepository.listAll();
        else
            quotes = this.quotesRepository.listByPerson({ person });

        return quotes;
    }
}

module.exports = ListQuotesService;