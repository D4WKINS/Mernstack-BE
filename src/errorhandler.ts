import { Request, Response, NextFunction } from "express"

const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({ error: "Sorry the resource you are looking for does not exist" })
}

const serverError = (req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ error: "Sorry the server is experiencing an error" })
}

export { notFound, serverError }
