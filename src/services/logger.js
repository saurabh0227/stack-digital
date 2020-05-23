const winston = require('winston');
require('winston-mongodb');

const options = {
    database: {
        levels: winston.levels,
        db: 'mongodb://localhost:27017/stack-digital-saurabh',
        options: {
            useUnifiedTopology: true
        },
        collection: 'logs',
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        storeHost: true
    },
};

const winstonLogger = winston.createLogger({
    transports: [
        new winston.transports.MongoDB(options.database)
    ],
    exitOnError: false,
});

module.exports = winstonLogger;