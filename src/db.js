
import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config.js/db.js";
const db = new Sequelize(DB_CONFIG.DB_NAME, DB_CONFIG.DB_USER, DB_CONFIG.DB_PASSWORD, {
    host: DB_CONFIG.DB_HOST,
    dialect: 'postgres',
    port: DB_CONFIG.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    }
  })

export default db