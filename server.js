'use strict'

import 'dotenv/config.js'
import express from 'express'
import homeRouter from './src/router/home.js'
import authenticationRouter from './src/router/authentication.js'
import accountRouter from './src/router/account.js'
import cors from 'cors'
import db from './src/db.js'
import SERVER_CONFIG from './src/config.js/server.js'
const app = express()
const port = process.env.PORT
try {
  await db.authenticate()
  console.log('db has been connected')
} catch (err) {
  console.log('unable to connect to the db', err)
}
app.use(cors())
app.use(express.json())
app.use('/', homeRouter)
app.use('/authentication', authenticationRouter)
app.use('/wallet', accountRouter)

if (process.env.PROJECT_ENV === 'dev') {
  SERVER_CONFIG.forEach(server => {
    const port = server.PORT
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
} else {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}