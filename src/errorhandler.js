
const notFound =(req, res, next)=>{

    res.status(404).send({error:'Sorry the resource you are looking for does not exist'})

}

const serverError = (req,res,next)=>{
    res.status(500).send({error:'Sorry the server is experiencing an error'})
}

export {
    notFound,
    serverError
}