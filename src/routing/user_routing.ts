

import express from "express";
import {getDatabase} from "../data/mongodb_client";
import {ObjectId} from "mongodb";

const userRouting = express.Router();

/// CRUD - Create | Read  | update | delete

userRouting.post("/addNewUser", async (request :express.Request,response: express.Response) => {


   let db = getDatabase();


   let usersCollection = db.collection("users")

    let body = request.body;


   const data = await usersCollection.insertOne(body)


    response.status(200).json({
        "response":data
    })

})

userRouting.get("/getUsers",async (request :express.Request,response: express.Response) => {

    let db = getDatabase();


    let usersCollection = db.collection("users")

   let data=await usersCollection.find({}).toArray();

    response.status(200).json({
        "response":data,
    })

})

/// Task for you
userRouting.get("/getProfile/:id",async (request :express.Request,response: express.Response) => {


    let userId = request.params.userId

    let db = getDatabase();


    let usersCollection = db.collection("users")

    let data=await usersCollection.find({"_id":new ObjectId(userId)}).toArray();

    response.status(200).json({
        "response":data,
    })

})


userRouting.put("/updateUser",async (request :express.Request,response: express.Response) => {

    let db = getDatabase();

    let usersCollection = db.collection("users")

    const body = request.body

    const userObject = {
        name:body.name,
        following:body.following,
        followers:body.followers,
    }



    let data=await usersCollection.updateOne(
        {_id : new ObjectId(body.userId)},
        {$set : userObject})

    response.status(200).json({
        "response":data,
    })

})


userRouting.delete("/deleteUser",async (request :express.Request,response: express.Response) => {

    let db = getDatabase();


    let usersCollection = db.collection("users")

    const userId =request.body.userId;

    let data=await usersCollection.deleteOne({_id:new ObjectId(userId)});

    response.status(200).json({
        "response":data,
    })

})


export default userRouting;




