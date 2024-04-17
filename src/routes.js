'use strict'

import express from 'express'
import AuthenticationService from './services/authentication.js'
import HomeService from './services/home.js'
const router = express.Router()

router.get('/', HomeService.home)
router.get('/logout', AuthenticationService.logout)
router.get('/login', AuthenticationService.login)

export default router