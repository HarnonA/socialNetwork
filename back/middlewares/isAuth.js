const jwt = require('jsonwebtoken');
require('dotenv/config')
// import { verify } from 'jsonwebtoken'


function isAuth(req,res,next) {

// function isAuth(Request, Response) {
    const authHeader = req.headers.authorization;
    console.log(process.env.TOKENKEY)
   
    if (!authHeader)
        res.send({ "error":  req.body })

    const [bearer, token] = authHeader.split(' ')
    try {
        
        const decoded = jwt.verify(token, process.env.TOKENKEY)
        console.log("my token")
        console.log(decoded)
        return next()
        // return res.send("Login sucess")
        // res.next()
    } catch (err) {
        res.send({ "error": "Invalid JWT" })
    }
}

module.exports = isAuth;