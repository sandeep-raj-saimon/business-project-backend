import { Sequelize, DataTypes } from "sequelize";
import db from "../db.js";

const Transaction = db.define('transaction', {
    payerId: {
        field: 'payer_id',
        type: Sequelize.INTEGER
    },
    payeeId:{
        field: 'payee_id',
        type: Sequelize.INTEGER
    },
    amount: {
        field: 'amount',
        type: Sequelize.DOUBLE
    },
    payerAccountId: {
        field: 'payer_account_id',
        type: Sequelize.INTEGER
    },
    payeeAccountId: {
        field: 'payee_account_id',
        type: Sequelize.INTEGER
    },
    modeOfPayment: {
        field: 'mode_of_payment',
        type: Sequelize.CHAR(200)
    },
    status: {
        field: 'status',
        type: Sequelize.ENUM,
        values: ['SUCCESS', 'FAILED', 'PENDING'],
        defaultValue: 'PENDING'
    },
    createdAt: {
        field: 'created_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        field: 'updated_at',
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'transaction'
})

export default Transaction