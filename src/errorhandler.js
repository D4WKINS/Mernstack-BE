
const notFound =(req, res, next)=>{

    res.status(404).send({error:'Cannot be found'})

}

const serverError = (req,res,next)=>{
    res.status(500).send({error:'Something is broken'})
}

export {
    notFound,
    serverError
}