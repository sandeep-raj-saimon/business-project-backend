'use strict'

import express from 'express'
import HomeController from '../controller/home.js'
const homeRouter = express.Router()

homeRouter.get('/', HomeController.home)
export default homeRouter