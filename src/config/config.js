require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT } = process.env

module.exports = {
  development: {
    username: DB_USER || "root",
    password: DB_PASSWORD || "password",
    database: DB_NAME || "database_development",
    host: DB_HOST || "127.0.0.1",
    dialect: DB_DIALECT || "mysql"
},
  test: {
    username: DB_USER || "root",
    password: DB_PASSWORD || "password",
    database: DB_NAME || "database_development",
    host: DB_HOST || "127.0.0.1",
    dialect: DB_DIALECT || "mysql"
},
  production: {
    username: DB_USER || "root",
    password: DB_PASSWORD || "password",
    database: DB_NAME || "database_development",
    host: DB_HOST || "127.0.0.1",
    dialect: DB_DIALECT || "mysql"
}
}
