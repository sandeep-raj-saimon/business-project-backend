'use strict'

import expressAsyncHandler from "express-async-handler"

const currentBalance = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'current balance'
    })
})

const getPreviousTransaction = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'previous transaction'
    })
})

const transferMoney = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'transfer money'
    })
})

const WalletController = { currentBalance, getPreviousTransaction, transferMoney}
export default WalletController