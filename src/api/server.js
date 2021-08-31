const express = require('express');
const AppError = require('../shared/errors/AppError');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(routes);

app.use((err, request, response, _) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    console.log(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});


app.listen(PORT, () => { console.log(`Server started, port: ${4001}`) });

app.use(express.static('public'));

