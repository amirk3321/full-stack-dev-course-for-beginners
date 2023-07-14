


import express from 'express'


const app : express.Application = express()


const localhost : string = "localhost"
const postNumber : number = 5000



app.get('/',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method GET</h1>")

})

app.post('/create',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method POST</h1>")

})

app.put('/update',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method Put</h1>")

})

app.delete('/delete',(request : express.Request,response:express.Response) => {



    response.status(200)
    response.send("<h1>Welcome to Express server Method Delete</h1>")

})




app.listen(postNumber,localhost,() =>{

    console.log("Welcome To Express Server ")

})






