

import * as fs from "fs";
import * as path from "path";


export class UserData {




    getAllUsers() : string | undefined {
        let userResponse : string;
        fs.readFile(path.join(__dirname,"users-response.json"),"utf-8",(err,result) =>{

            userResponse = result;
        })


        return  userResponse!;
    }


    createUser(name:string) : string{


        return "hello "+name
    }

}