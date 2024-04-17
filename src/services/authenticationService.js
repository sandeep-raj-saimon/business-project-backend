import User from "../models/User.js"
const AuthenticationService = {
    signIn,
    logIn
}

async function signIn (req) {
    try {
        const { body } = req
        const user = await User.create({
            userName: body.userName,
            phoneNumber: body.phoneNumber,
            password: body.password
        })
        return user
    } catch (err) {
        throw new Error('SignIn failed due to ', err)
    }
}

async function logIn (req) {
    try {
        const { body } = req
        const user = await User.findOne({
            where: {
                phoneNumber: body.phoneNumber
            }
        })

        if (user && user.authenticate(body.password)) {
            console.log(`login is successful for user ${user}`)
            return user
        } else {
            throw new Error('Invalid Credentials')
        }
    } catch (err) {
        throw new Error('Login Failed due to ', err)
    }
}
export default AuthenticationService