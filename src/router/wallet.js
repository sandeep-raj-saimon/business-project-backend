'use strict'

import express from 'express'
import WalletController from '../controller/wallet.js'
const walletRouter = express.Router()

walletRouter.get('/current_balance', WalletController.currentBalance)
walletRouter.get('/previous_transaction', WalletController.getPreviousTransaction)
walletRouter.post('/transfer_money', WalletController.transferMoney)

export default walletRouter