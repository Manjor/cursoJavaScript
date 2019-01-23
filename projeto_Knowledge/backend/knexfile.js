// Update with your config settings.
//const { db } = require('./.env')
module.exports = {
    client: 'postgresql',
    connection: {
      host: process.env.BD_HOST,
      port: process.env.BD_PORT,
      database: process.env.BD_NAME,
      user: process.env.BD_USER,
      password: process.env.BD_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
