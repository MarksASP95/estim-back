const config = require('./config/config');
const mongoose = require('mongoose');
const app = require('./app');

let server;

// connect to MongoDB
mongoose.connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        console.log('Connected to DB');
        server = app.listen(config.port, () => {
            console.log(`Listening to port ${config.port}`);
        });
    });

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.log('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    console.log(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
        server.close();
    }
});