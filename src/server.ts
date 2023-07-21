


import express from 'express'
import userRouting from "./routing/user_routing";
import postRouting from "./routing/post_routing";
import appLogger from "./app_logger/app_logger";

const app : express.Application = express()

app.use(express.json())
app.use(appLogger)


app.use("/v1/user",userRouting)
app.use("/v1/post",postRouting)



const localhost : string = "localhost"
const postNumber : number = 5000





app.listen(postNumber,localhost,() =>{


    console.log(`${localhost}:${postNumber}/v1/user/update`)
    console.log("Welcome To Express Server Routing Optimization")

})






