"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var exerciseSchema = new mongoose_1.default.Schema({
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
});
//For each exercise we have username, the description of what the exercise ia, the duration of the exercise and the date is was posted
var ExerciseModel = mongoose_1.default.model("Exercise", exerciseSchema); // UserModel is the model that we will use to interact with the database
exports.default = ExerciseModel;
