'use strict'

import expressAsyncHandler from "express-async-handler"
import AccountService from "../services/accountService.js"
import customResponse from "../utils/response.js"
const currentBalance = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'current balance'
    })
})

const getTransactions = expressAsyncHandler(async(req, res, next) => {
    try {
        const transactions = await AccountService.getTransactions(req)
        res.send(customResponse({ message: 'previous transactions are ', data: transactions }))
    } catch (err) {
        res.send(customResponse({ message: 'Something went wrong', data: {}}))
    }
})

const createTransaction = expressAsyncHandler(async(req, res, next) => {
    try {
        const transaction = await AccountService.createTransaction(req)
        res.send(customResponse({ message: 'a new transaction was created ', data: transaction }))
    } catch (err) {
        res.send(customResponse({ message: 'Something went wrong', data: {}}))
    }
})

const updateTransaction = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'previous transaction'
    })
})

const transferMoney = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'transfer money'
    })
})

const AccountController = { currentBalance, getTransactions, transferMoney, createTransaction, updateTransaction}
export default AccountController