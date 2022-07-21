import express from 'express'
import mongoose from 'mongoose'
import UserModel from './schema.js'

const usersRouter = express.Router()

usersRouter.get('/', async(req, res, next)=>{
    try{
        const foundUsers = UserModel.find()
    
         if(foundUsers){
            res.send(foundUsers)
         }
        }catch(err){
            console.log(err)
        }
})

usersRouter.post('/register',async(req, res, next)=>{
    const {username} = req.body
    const newUser = new UserModel({
        username
    })

    newUser.save((err,user)=>{
        if(err)console.log(err)
        else res.send(user)
    })
})


export default usersRouter