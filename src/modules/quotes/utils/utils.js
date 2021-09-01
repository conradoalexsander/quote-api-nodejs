const AppError = require("../../../shared/errors/AppError");

const isQuote = ({ person, quote }) => {
    if (!person || !quote)
        throw new AppError("Wrong parameters", 400);
};

module.exports = { isQuote };