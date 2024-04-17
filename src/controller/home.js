'use strict'

import expressAsyncHandler from "express-async-handler"

const home = expressAsyncHandler(async(req, res, next) => {
    res.send({
        msg: 'home page'
    })
})

const HomeController = { home }
export default HomeController