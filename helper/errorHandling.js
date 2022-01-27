function error_Handler (err,req,res,next){
    if(err.name === "UnauthorizedError"){
        //jwt authentication error
    return res.status(400).json({message: "The user is not authorized jwt Error"})    }

    if(err.name === "ValidationError"){
        // validation error
        return res.status(400).json({message:err})
    }

    //default to 500 server error
    return res.status(500).json(err)
}

module.exports = error_Handler