'use strict'

import express from 'express'
import AuthenticationController from '../controller/authentication.js'
const authenticationRouter = express.Router()

authenticationRouter.post('/login', AuthenticationController.login)
authenticationRouter.post('/sign_in', AuthenticationController.signIn)
authenticationRouter.post('/logout', AuthenticationController.logout)

export default authenticationRouter