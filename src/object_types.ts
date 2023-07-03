

//
//
// let user = {
//     name : "MA",
//     id : "123",
//     email: "ma@dev"
// }
//
// let typescriptObj = {
//     name : "ts",
//     id : "1"
// }
//
//
// function getData(obj : {name:string,id:string,password?:number}) {
//
//     console.log(obj.name,obj.id);
// }
//
//
// // getData(user)
// // getData(typescriptObj)
// // getData({name:"MA",id:"123"})
//
//
//
// function getDetails(id : string | number | string[]){
//
//
//     if (typeof id == "string"){
//
//         console.log(`${id.toUpperCase()} ${typeof id}`);
//     }else if (Array.isArray(id)){
//
//
//         console.log("arrayDataId "+id);
//
//
//     }else{
//
//         console.log(`${id} ${typeof id}`);
//     }
//
//
// }
//
//
//
// getDetails(["1"])
//
//
// function getItems(id : string) {
//
//     if (id == "1"){
//         return true;
//     }else{
//         return  "item not exists";
//     }
//
// }
//
//
// function getDocs(id : number) : number {
//     return id;
// }
//
// let getUserInfo = (uid : string) : string=> {
//     return "hello UID "+uid
//
// }
//
//
// let data = getUserInfo("123")
// getDocs(1)
//
// console.log(data);
//

// let data =getItems("2")
//
// console.log(data)
