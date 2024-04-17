import { Sequelize } from "sequelize";
import useBcrypt from "sequelize-bcrypt";
import db from "../db.js";

const User = db.define('user', {
    userName: {
        field: 'username',
        type: Sequelize.CHAR(200) 
    },
    password: {
        field: 'password',
        type: Sequelize.CHAR(200)
    },
    phoneNumber: {
        field: 'phonenumber',
        type: Sequelize.BIGINT
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
    tableName: 'user'
})

const options = {
    field: 'password',
    round: 12,
    compare: 'authenticate'
}
useBcrypt(User, )
export default User