const { Sequelize } = require('sequelize');

// Environment variables for database configuration
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || 'mydatabase', // Database name
  process.env.MYSQL_USER || 'root', // Username
  process.env.MYSQL_PASSWORD || 'rootpassword', // Password
  {
    host: process.env.MYSQL_HOST || 'db', // Hostname (from docker-compose)
    dialect: 'mysql', // Database dialect
    port: 3306, // MySQL default port
    logging: false, // Disable SQL logging
  },
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the MySQL database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
