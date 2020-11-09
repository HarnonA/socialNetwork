const sessionsRouter = require('express').Router()
const isAuth = require('../middlewares/isAuth')

const cors = require('cors');
sessionsRouter.use(cors());

// sessionsRouter.use(isAuth)

// const sessionsRouter = Router()


// sessionsRouter.post('/auth', async (req, res, next) => {
//     console.log(req.body)
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send(req.body)
// })

sessionsRouter.post('/auth1', async (req, res, next) => {
    // const auth = new isAuth()
    // console.log(req.body)
    // res.header("Access-Control-Allow-Origin", "*");
    // res.send(auth)
})


sessionsRouter.post('/update', isAuth, async (req, res) => {
    console.log(req.body.myMed)
    try {
        res.send(await Medications.findByIdAndUpdate(req.body.myMed._id, { ...req.body.myMed }))
        // return await Medications.updateMany({ ...req.body.myMed })
    } catch (err) {
        console.log("update error")
        return res.status(400).json({ error: err.message })
    }
})

sessionsRouter.post('/insert', isAuth, async (req, res) => {
    console.log(req.body.medication)
    try {
        res.send(await Medications.insertMany(req.body.medication))
    } catch (err) {
        console.log("insert error")
        return res.status(400).json({ error: err.message })
    }
})

sessionsRouter.post('/delete', isAuth, async (req, res) => {
    try {
        res.send(await Medications.deleteOne({ _id: req.body.id }))
    } catch (err) {
        console.log("delete error")
        return res.status(400).json({ error: err.message })
    }
})

sessionsRouter.post('/search', async (req, res) => {
    res.send(await Medications.findOne({ _id: req.body.id }))
})



module.exports = sessionsRouter;