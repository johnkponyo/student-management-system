// logger.js
const winston = require('winston');
const fs = require('fs');
const path = require('path');

// Ensure the 'app.log' file exists, if not, create it
const logFilePath = path.join(__dirname, 'app.log');
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, '', { flag: 'w' });  // Creates an empty file if it doesn't exist
}

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info', // default log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: logFilePath }) // Log to the 'app.log' file
  ]
});

module.exports = logger;
