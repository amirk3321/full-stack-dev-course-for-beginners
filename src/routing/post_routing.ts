

import express from "express";


const postRouting = express.Router();


postRouting.get('/getPost/:id',(request:express.Request,response:express.Response) => {

    let postId = request.params.id

    console.log("postId "+postId)




    response.status(200).send(`<h1>postId details ${postId}</h1>`)


});


export default postRouting