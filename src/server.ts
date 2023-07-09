import http, {IncomingMessage, ServerResponse} from "http";
import * as url from "url";
import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import {UserData} from "./user/user_data";



const hostName: string = "localhost"
const portNumber: number = 5000


http.createServer((request: IncomingMessage, res: ServerResponse) => {

    res.statusCode = 200;
    res.setHeader("content-type", "text/html")
    let _url = request.url;
    let queryParams = url.parse(_url!).query
    let pathName = url.parse(_url!).pathname;
    let filterQuery = queryParams?.split("data=").pop()!.replaceAll("%20", " ")
    let user = new UserData()


    if (pathName == "/users") {


        let users = user.getAllUsers();
        res.write(`<pre>${users}</pre>`)
        res.end()
    } else if (pathName == "/data") {


        res.write(`data`)

    } else if (pathName == "/os") {

        let osMap = {
            osMem: os.totalmem(),
            homedir: os.homedir(),
            freeMem: os.freemem(),
            hostName: os.hostname()
        }
        res.write(`<h1>${osMap.hostName}</h1><br><h2>${JSON.stringify(osMap)}</h2>`)
    } else if (pathName == "/fs") {
        console.log("hello")
        fs.readFile(path.join(__dirname, "users_response.json"), "utf-8", (error, result) => {

            console.log(error);
            console.log(result)

            if (error) {
                res.end(`${error}`)
            }

            res.write(`<pre>${result}</pre>>`)
            res.end()
        })

    }else if (pathName == "/createUser"){



       let data= user.createUser("MA")

        res.end(`${data}`);

    } else {
        res.write(`path not found`)
    }


    //res.end()


}).listen(portNumber, hostName, () => {
    console.log("Hello My First Server");
    console.log(`http://${hostName}:${portNumber}`)

})



