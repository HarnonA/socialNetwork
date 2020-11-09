
const signup = require('express').Router()

const User = require("../models/users.model")

const cors = require('cors');
signup.use(cors());

signup.post('/signup', async (req, res, next) => {
    console.log(req.body)
    res.header("Access-Control-Allow-Origin", "*");

    if (req.body.email && req.body.password && req.body.userName) {
        await User.insertMany({
            ...req.body
        })
        res.send("Successfully registered")
        return;
    }
    res.send({ "error": "Couldn't make a register. Something is missing." })
})

module.exports = signup;