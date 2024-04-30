'use strict'

import express from 'express'
import AccountController from '../controller/account.js'
const accountRouter = express.Router()

accountRouter.get('/current_balance', AccountController.currentBalance)
accountRouter.get('/transactions', AccountController.getTransactions)
accountRouter.post('/transaction', AccountController.createTransaction)
accountRouter.put('/transaction', AccountController.updateTransaction)
accountRouter.post('/transfer_money', AccountController.transferMoney)

export default accountRouter