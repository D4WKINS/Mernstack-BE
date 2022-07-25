import mongoose from "mongoose"

const exerciseSchema = new mongoose.Schema({
    //schema defines the structure of the data
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: { type: Date, required: true }
})
//For each exercise we have username, the description of what the exercise ia, the duration of the exercise and the date is was posted

const ExerciseModel = mongoose.model("Exercise", exerciseSchema) // UserModel is the model that we will use to interact with the database

export default ExerciseModel
