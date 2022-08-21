import app from "../server"
import supertest from "supertest"
import mongoose from "mongoose"

import dotenv from "dotenv"

const request = supertest(app) // supertest is a library that allows us to test our server
dotenv.config() // configuring our dotenv variables

const sum = (num1: number, num2: number) => {
    return num1 + num2
}
test("test the addition of two numbers", () => {
    expect(sum(1, 2)).toBe(3)
})

// Describe in jest is used to describe what we are testing
// describe("Testing tests", () => {
//     // beforeAll in jest is like saying to before test has began do this
//     beforeAll((done) => {
//         //The exclamation mark following the connection string is the non-null asssertion operator
//         //It is a way to tell the compiler "this expression cannot be null or undefined"
//         //so don't complain about the possibility of it being null or undefined." Sometimes the type checker is unable to make that determination itself.
//         mongoose.connect(process.env.MONGO_CONNECTION_STRING!).then(() => {
//             console.log("Connected to mongo db")
//             done()
//         })
//     })

//     // afterAll is like saying once all test's are finished/done do this
//     afterAll((done) => {
//         mongoose.connection.dropDatabase().then(() => {
//             mongoose.connection.close()
//             done()
//         })
//     })
// })
