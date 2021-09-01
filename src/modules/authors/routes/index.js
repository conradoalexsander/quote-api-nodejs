const express = require('express');
const AuthorController = require('../controllers/AuthorsController');
const AuthorsRepository = require('../repositories/AuthorsRepository');

const authorRouter = express();

const authorsRepository = new AuthorsRepository();

const authorController = new AuthorController(authorsRepository);

authorRouter.get('/', authorController.list);

module.exports = authorRouter;