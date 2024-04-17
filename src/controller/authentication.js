'use strict'

import expressAsyncHandler from "express-async-handler"
import AuthenticationService from "../services/authenticationService.js"
import customResponse from "../utils/response.js"

const signIn = expressAsyncHandler(async (req, res, next) => {
    try {
        const user = await AuthenticationService.signIn(req)
        res.send(customResponse({ message: 'User SignIn Successful', data: user }))
    } catch (err) {
        res.send(customResponse({ message: err, data: {} }))
    }
})

const login = expressAsyncHandler(async (req, res, next) => {
    try {
        const user = await AuthenticationService.logIn(req)
        res.send(customResponse({ message: 'Login Successful', data: user }))
    } catch (err) {
        res.send(customResponse({ message: err, data: {} }))
    }
})

const logout = expressAsyncHandler(async (req, res, next) => {
    res.send({
        msg: 'logout'
    })
})

const AuthenticationController =  {signIn, login, logout}
export default AuthenticationController 