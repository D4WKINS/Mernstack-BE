import express, { Request, Response, NextFunction } from "express"

const indexRouter = express.Router()

indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world")
})

export default indexRouter
