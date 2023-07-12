

import * as fs from "fs";
import * as path from "path";


export class UserData {




    getAllUsers(callBack : (response :string | undefined) => void) : void {

        fs.readFile(path.join(__dirname,"users_response.json"),"utf-8",(err,result) =>{

            callBack(result)
        })

    }


    createUser(name:string) : string{


        return "hello "+name
    }

}