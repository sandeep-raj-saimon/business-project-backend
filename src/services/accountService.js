import Transaction from "../models/Transaction.js";
import Wallet from "../models/Wallet.js";
const AccountService = {
    createTransaction,
    getTransactions,
    updateTransaction,
    currentBalance
}

async function currentBalance ({ accountId }) {
    try {
        return await Wallet.findOne({
            where: {
                
            }
        })
    } catch(err) {
        throw new Error('Something went wrong while fetching current balance', err)
    }
}
async function createTransaction(req) {
    const { payeeId, payerId, payeeAccountId, payerAccountId, modeOfPayment } = req.body
    try {
        return await Transaction.create({
            payeeId,
            payerId,
            payeeAccountId,
            payerAccountId,
            modeOfPayment
        })
    }catch(err) {
        throw new Error('Transaction could not be completed due to ', err)
    }
}

async function getTransactions() {

}

async function updateTransaction() {

}

export default AccountService