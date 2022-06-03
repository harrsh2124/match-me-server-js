const { createLogger, format, transports } = require("winston");

const options = {
    console: {
        handleExceptions: true,
        format: format.combine(
            format.colorize(),
            format.timestamp({
                format: "DD-MMM-YYYY HH:mm:ss",
            }),
            format.align(),
            format.printf(
                (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
            )
        ),
    },
};

const consoleTransport = new transports.Console(options.console);

const logger = createLogger({
    transports: [consoleTransport],
    exitOnError: false,
});

logger.stream = {
    write(message) {
        logger.info(message);
    },
};

module.exports = logger;
