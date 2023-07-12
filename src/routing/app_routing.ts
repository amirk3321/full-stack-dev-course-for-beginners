


import http , {IncomingMessage,ServerResponse} from "http";
import os from "os";
import fs from "fs";
import path from "path";
import * as url from "url";
import {UserData} from "../user/user_data";

export  class AppRouting {




    static appRouting(request: IncomingMessage,response : ServerResponse) {




        let pathName = url.parse(request.url!).pathname;
        let method = request.method;




        if (pathName == "/users" && method == "GET") {


           new UserData().getAllUsers((result) => {
                response.end(`<pre>${result}</pre>>`)
            });

        } else if (pathName == "/os"  && method == "GET") {

            let osMap = {
                osMem: os.totalmem(),
                homedir: os.homedir(),
                freeMem: os.freemem(),
                hostName: os.hostname()
            }
            response.write(`<h1>${osMap.hostName}</h1><br><h2>${JSON.stringify(osMap)}</h2>`)
        } else if (pathName == "/fs"  && method == "GET") {

            fs.readFile(path.join(__dirname, "users_response.json"), "utf-8", (error, result) => {

                console.log(error);
                console.log(result)

                if (error) {
                    response.end(`${error}`)
                }

                response.write(`<pre>${result}</pre>>`)
                response.end()
            })

        }else if (pathName == "/createUser"  && method == "POST"){




            let body : any = ""

            request.on('data',(chunk) => {

                body += chunk;
            } ).on('end',() =>{


                let jsonResponse = JSON.parse(body);

                console.log(body)

                response.end(`<h1 style="color: green">${jsonResponse.name} created successfuly</h1>>`);
            })



         // let data=  new UserData().createUser("MA")
         //
         //    response.end(`${data}`);

        }else  if (pathName == "/login" && method == "POST"){



            let body : any= ""

            request.on('data',(chunk) => {

                body +=chunk
            }).on('end', () =>{


                let jsonResponse = JSON.parse(body);


                if (jsonResponse.email == "ma@dev" && jsonResponse.password == "123456"){


                    response.end(`<h1>User Login Successfully</h1>`)

                }else{
                    response.end(`<h1>Invalid Email Password</h1>`)
                }




            });



            ///LOGIC
        }else {
            response.write(`path not found`)
        }



    }
}
