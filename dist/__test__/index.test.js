"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("../server"));
var supertest_1 = __importDefault(require("supertest"));
var dotenv_1 = __importDefault(require("dotenv"));
var request = (0, supertest_1.default)(server_1.default); // supertest is a library that allows us to test our server
dotenv_1.default.config(); // configuring our dotenv variables
var sum = function (num1, num2) {
    return num1 + num2;
};
test("test the addition of two numbers", function () {
    expect(sum(1, 2)).toBe(3);
});
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
