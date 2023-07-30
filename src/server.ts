


import express from 'express'
import userRouting from "./routing/user_routing";
import appLogger from "./app_logger/app_logger";
import {connectToDatabase} from "./data/mongodb_client";

const app : express.Application = express()

app.use(express.json())
app.use(appLogger)


app.use("/v1/user",userRouting)



const localhost : string = "localhost"
const postNumber : number = 5000





app.listen(postNumber,localhost,async () =>{

    await connectToDatabase()
    console.log(`http://${localhost}:${postNumber}/v1/user/`)
    console.log("Welcome To mongo Server")

})






