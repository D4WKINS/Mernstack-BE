import express from "express"

const exercisesRouter = express.Router()

exercisesRouter.get("/", async (req, res, next) => {
    try {
        const foundUsers = UserModel.find()

        if (foundUsers) {
            res.send(foundUsers)
        }
    } catch (err) {
        next(err)
    }
})

exercisesRouter.post("/", async (req, res, next) => {
    try {
        const username = req.body.username
        const duration = req.body.duration
        const description = Number(req.body.duration)
        const date = Date.parse(req.body.date)

        const newExercise = new UserModel({
            username,
            description,
            duration,
            date
        })

        newExercise.save((err, user) => {
            if (err) console.log(err)
            else res.send(user)
        })
    } catch (err) {
        next(err)
    }
})

exercisesRouter.put("/", async (req, res, next) => {
    //finish tommorow
})

exercisesRouter.delete("/", async (req, res, next) => {
    //finish tommorow
})

export default exercisesRouter
