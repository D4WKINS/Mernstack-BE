import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({//schema defines the structure of the data
    username:{
        type:String,
        required:true,
        unique:true, // make sure that the username is unique which means that it cannot be used twice
        trim:true, // trim removes whitespace from the beginning and end of the string
        minlength:3 // needs to be minimum 3 characters long
    }
},{
    timestamps:true // adds createdAt and updatedAt fields to the schema
})

const UserModel = mongoose.model('User', userSchema) // UserModel is the model that we will use to interact with the database

export default UserModel