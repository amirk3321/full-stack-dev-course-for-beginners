

import express from "express";
import appLogger from "../app_logger/app_logger";
import bcrypt from 'bcrypt'
import {body,validationResult} from "express-validator"

const userRouting = express.Router();



/// userRouting Level middleware
// userRouting.use((request : express.Request,response:express.Response,next: express.NextFunction) => {
//
//     console.log(new Date().toLocaleDateString())
//     console.log(new Date().toLocaleTimeString())
//     console.log(request.method)
//     next()
//
// })



userRouting.get('/',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method GET</h1>")

})

userRouting.post('/create',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method POST</h1>")

})

userRouting.put('/update',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method Put</h1>")

})

userRouting.delete('/delete',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method Delete</h1>")

})


userRouting.post("/login",appLogger,(request : express.Request,response:express.Response) => {

    let body = request.body;

    let {email,password}  = request.body;


    if (email == "ma@dev.com" && password == "123456"){

        response.status(200).json({
            "status":response.statusCode,
            "data":body,
            "msg":"user login successfully",
        });
    }else{
        response.status(401).json({
            "status":response.statusCode,
            "data":body,
            "msg":"invalid email password",
        });
    }








})


userRouting.post("/createNewUser",[
    body('email').not().isEmpty().isEmail().withMessage("email required"),
    body('name').not().isEmpty().withMessage("name is required"),
],appLogger,async  (request : express.Request,response:express.Response) => {

    let body = request.body;

    let {email,password,name}  = request.body;

   let error = validationResult(request)

    if (!error.isEmpty()){

        response.status(400).json({
            "status":response.statusCode,
            "data":error,
        });

    }else{
        let salt =await bcrypt.genSalt();

        let hashPassword =await bcrypt.hash(password,salt)

        response.status(200).json({
            "status":response.statusCode,
            "data":body,
            "hashPassword":hashPassword,
        });
    }




})

export default userRouting;




