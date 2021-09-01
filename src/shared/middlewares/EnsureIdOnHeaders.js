const AppError = require("../errors/AppError");

const ensureIdOnHeaders = (request, response, next) => {
    const { id } = request.headers;

    if (!id)
        throw new AppError("An id must be provided.");

    return next();
};

module.exports = ensureIdOnHeaders;