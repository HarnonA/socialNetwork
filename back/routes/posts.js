const postsRouter = require('express').Router()
const mongoose = require('mongoose');
const isAuth = require('../middlewares/isAuth')

const Post = require("../models/posts.model")
const User = require("../models/users.model")

const cors = require('cors');
postsRouter.use(cors());


postsRouter.post('/addPost', isAuth, async (req, res) => {
    console.log(req.body)

    let currentTime = `${new Date().getHours()}:${(new Date().getMinutes()).toLocaleString(undefined, { minimumIntegerDigits: 2 })}`
    let todayDate = `${(new Date().getDate()).toLocaleString(undefined, { minimumIntegerDigits: 2 })}/${(new Date().getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })}/${new Date().getFullYear()}`

    let arr = req.body.user.posts;
    console.log(arr)
    let element = {
        text: req.body.text,
        date: `${currentTime} ${todayDate}`,
        likes: 0,
        dislikes: 0,
        comments: [],
        id: new mongoose.Types.ObjectId(),
    }
    arr.push(element)
    console.log(arr)

    try {
        await User.findOneAndUpdate({ email: req.body.user.email }, { posts: arr });
        res.send(await User.findOne({ email: req.body.user.email }))
    } catch (err) {
        console.log("update error")
        return res.status(400).json({ error: err.message })
    }
})


postsRouter.post('/post', isAuth, async (req, res) => {
    console.log(req.body.user.email)
    try {
        console.log(await User.findOne({ email: req.body.user.email }))
        res.send(await User.findOne({ email: req.body.user.email }))
    } catch (err) {
        console.log("update error")
        return res.status(400).json({ error: err.message })
    }
})


postsRouter.post('/like', isAuth, async (req, res) => {
    console.log(req.body)
    try {
        let user = null;

        // await User.findOneAndUpdate({ "posts.id": req.body.id }, {$inc : {'likes' : 1}} );
        user = await User.findOne({ "posts.id": req.body.id })
        user.posts.forEach(async el => {
            if (el.id === req.body.id) {
                if (req.body.number > 0) {
                    console.log(typeof (el.like))
                    el.likes = parseInt(el.likes);
                    el.likes++;
                }
                else { el.likes-- };
                console.log(el.likes)
                res.send(await User.findOneAndUpdate({ "posts.id": req.body.id }, { posts: user.posts }))
            }
        })


    } catch (err) {
        console.log("update error")
        return res.status(400).json({ error: err.message })
    }
})

postsRouter.post('/dislike', isAuth, async (req, res) => {
    try {
        let user = null;
        user = await User.findOne({ "posts.id": req.body.id })
        user.posts.forEach(async el => {
            if (el.id === req.body.id) {
                el.dislikes = parseInt(el.dislikes);
                if (req.body.number > 0) {
                    el.dislikes++;
                }
                else { el.dislikes-- };
                console.log(el.dislikes)
                res.send(await User.findOneAndUpdate({ "posts.id": req.body.id }, { posts: user.posts }))
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.message })
    }
})

postsRouter.post('/addComment', isAuth, async (req, res) => {
    console.log(req.body)
    try {
        let user = await User.findOne({ "posts.id": req.body.id })
        user.posts.forEach(async el => {
            if (el.id === req.body.id) {
                el.comments.push({user: req.body.name, text:req.body.comment})
                console.log(user.posts)
                res.send(await User.findOneAndUpdate({ "posts.id": req.body.id }, { posts: user.posts }))
            }
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.message })
    }
})





module.exports = postsRouter;