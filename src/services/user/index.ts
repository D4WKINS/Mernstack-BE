import express from "express"
import mongoose from "mongoose"
import UserModel from "./schema"

const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
    try {
        const foundUsers = await UserModel.find() //

        if (foundUsers) {
            res.send(foundUsers)
        }
    } catch (err) {
        next(err)
    }
})

usersRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const foundUser = await UserModel.findById(id)
        if (foundUser) {
            res.send(foundUser)
        }
    } catch (err) {
        next(err)
    }
})

usersRouter.post("/", async (req, res, next) => {
    try {
        const username = req.body.username

        const newUser = new UserModel({ username })
        console.log(newUser)
        newUser.save((err, user) => {
            if (err) console.log(err)
            else res.send(user)
        })
    } catch (err) {
        next(err)
    }
})

usersRouter.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const update = req.body
        const updatedUser = await UserModel.findByIdAndUpdate(id, update)
        if (updatedUser) {
            console.log(`User with ID ${id} has been updated successfully`)
            res.send(update)
        }
    } catch (err) {
        next(err)
    }
})

usersRouter.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const deletedUser = await UserModel.findByIdAndDelete(id)
        if (deletedUser) {
            res.send({ message: "User has been successfully deleted" })
        }
    } catch (err) {
        next(err)
    }
})

export default usersRouter
