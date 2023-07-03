



 type User1 = {
    name:string;
    email:string
 }


 function getUserDetails(fn: User1) {
    console.log(fn.name,fn.email);
 }


 type getUIdReturnType =  string | number;


 type inputType = string | number | boolean | string[]  | number[];

 function getUID(inputType: inputType) : getUIdReturnType  {
    return 234;
 }


 getUID( true)


 getUserDetails({name:"MA",email:"MA@dev"})