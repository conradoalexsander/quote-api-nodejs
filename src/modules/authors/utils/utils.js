const AppError = require("../../../shared/errors/AppError");

const isQuoteCorrect = ({ person, quote, year }) => {
    if (!person || !quote || !year)
        throw new AppError("Wrong parameters.", 400);

    if (isNumeric(year) == false)
        throw new AppError("Wrong year format.", 400);

    if (year > new Date().getFullYear())
        throw new AppError("Wrong year value.", 400);

};

//https://www.delftstack.com/howto/javascript/check-if-string-is-number-javascript/
function isNumeric(val) {
    return /^-?\d+$/.test(val);
}

module.exports = { isQuoteCorrect };