const Sequelize = require('sequelize');
const url = require('url');
require('dotenv').config();

// Parse the connection string from Heroku
const connectionString = process.env.CLEARDB_DATABASE_URL || process.env.JAWSDB_URL;
const dbUrl = url.parse(connectionString);

// Extract the required information
const dbName = dbUrl.pathname.substring(1);
const dbUser = dbUrl.auth.split(':')[0];
const dbPassword = dbUrl.auth.split(':')[1];
const dbHost = dbUrl.hostname;
const dbPort = dbUrl.port;

const sequelize = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    host: dbHost,
    dialect: 'mysql',
    port: dbPort,
  }
);

module.exports = sequelize;

// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PW,
//   {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

// module.exports = sequelize;