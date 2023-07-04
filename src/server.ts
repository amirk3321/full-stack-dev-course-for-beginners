
import http, {IncomingMessage,ServerResponse} from "http";



const hostName : string= "localhost"
const portNumber : number= 5000


http.createServer((req:IncomingMessage, res:ServerResponse)=>{

    res.statusCode = 200;
    res.setHeader("content-type","text/html")
    res.write(`<h1 style="color: red">hi MA first server</h1></br><h2>${res.statusCode}</h2></br><h3>Method:${req.method}</h3>`)
    res.end()

}).listen(portNumber,hostName,() => {

    console.log("Hello My First Server");
    console.log(`http://${hostName}:${portNumber}`)

})



