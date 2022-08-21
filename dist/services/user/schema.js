"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3 // needs to be minimum 3 characters long
    }
}, {
    timestamps: true // adds createdAt and updatedAt fields to the schema
});
var UserModel = mongoose_1.default.model('User', userSchema); // UserModel is the model that we will use to interact with the database
exports.default = UserModel;
