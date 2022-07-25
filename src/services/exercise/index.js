import e from "express"
import express from "express"

import ExerciseModel from "./schema.js"

const exercisesRouter = express.Router()

exercisesRouter.get("/", async (req, res, next) => {
    try {
        const foundExercises = await ExerciseModel.find()

        if (foundExercises) {
            res.send(foundExercises)
        }
    } catch (err) {
        next(err)
    }
})

exercisesRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const foundExercise = await ExerciseModel.findById(id)
        if (foundExercise) {
            res.send(foundExercise)
        }
    } catch (err) {
        next(err)
    }
})

exercisesRouter.post("/", async (req, res, next) => {
    try {
        const username = req.body.username
        const duration = req.body.duration
        const description = req.body.description
        const date = Date.parse(req.body.date) //Date.parse converts the string to a date object

        const newExercise = new ExerciseModel({
            username,
            description,
            duration,
            date
        })

        newExercise.save((err, exercise) => {
            if (err) console.log(err)
            else res.send(exercise)
        })
    } catch (err) {
        next(err)
    }
})

exercisesRouter.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const update = req.body
        const updatedExercise = await ExerciseModel.findByIdAndUpdate(id, update)
        if (updatedExercise) {
            console.log(`Exercise with ID ${id} been updated successfully`)
            res.send(update)
        }
    } catch (err) {
        console.log(err)
    }
})

exercisesRouter.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedExercise = await ExerciseModel.findByIdAndDelete(id)
        if (deletedExercise) {
            console.log(`Exercise with ID ${id} has been deleted`)
            res.send({ message: `Exercise with ID ${id} has been deleted` })
        }
    } catch (err) {}
})

export default exercisesRouter
