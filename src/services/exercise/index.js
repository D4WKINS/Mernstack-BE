

import express from 'express'


const exercisesRouter = express.Router()

exercisesRouter.get('/', async(req, res, next)=>{
    try{
    const foundUsers = UserModel.find()

     if(foundUsers){
        res.send(foundUsers)
     }
    }catch(err){
        console.log(err)
    }

})

exercisesRouter.post('/', async(req,res,next)=>{

})

exercisesRouter.put('/', async(req,res,next)=>{

})

exercisesRouter.delete('/',async(req,res,next)=>{

})

export default exercisesRouter