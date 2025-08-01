const { dotenv } = require('@siiges-services/shared');

const mysql = {
  dbAdmin: process.env.DATABASE,
  dbHost: dotenv.getEnvironmentVar('DB_HOST_MYSQL'),
  dbName: dotenv.getEnvironmentVar('DB_NAME_MYSQL'),
  dbPassword: dotenv.getEnvironmentVar('DB_PASSWORD_MYSQL'),
  dbPort: dotenv.getEnvironmentVar('DB_PORT_MYSQL'),
  dbUser: dotenv.getEnvironmentVar('DB_USER_MYSQL'),
  dbLogging: dotenv.getEnvironmentVar('LOGGING'),
};

module.exports = {
  mysql,
};
