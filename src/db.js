import { Sequelize } from "sequelize";

const db = new Sequelize('businessproject', 'sandeep', 'Sandeep@1997', {
    host: 'localhost',
    dialect: 'postgres'
  })

export default db