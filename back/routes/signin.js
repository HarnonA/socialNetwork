
const signin = require('express').Router()
const jwt = require('jsonwebtoken');
require('dotenv/config');

const User = require("../models/users.model")


signin.post('/signin', async (req, res) => {
    const myEmail = req.body.email
    const myPassword = req.body.password;
    console.log(myEmail + " " + myPassword)

    try {
        const match = await User.findOne({ email: myEmail }).select('+password')

        if (match === null)
            return res.send("Email or password incorrect.")

        if (myPassword !== match.password)
            return res.send("Email or password incorrect.")
            

        delete match._doc.password

        const token = jwt.sign(
            {}, process.env.TOKENKEY,
            {
                subject: toString(match._id),
                expiresIn: '1d'
            });
            console.log(token)
        return res.send({...match._doc,token})
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
})

module.exports = signin;