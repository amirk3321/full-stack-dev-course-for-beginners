function greeting() {
    console.log("Hi MA");
}
function addition(num1, num2) {
    return num1 + num2;
}
//@ts-ignore
function sqrt(val) {
    return val * val;
}
function multiplyByTwo(num1) {
    console.log(num1 * 2);
}
multiplyByTwo(10);
function login(fn) {
    fn("MA", "123456");
}
function user(name, password) {
    console.log(typeof password);
    console.log(name, password);
}
login(user);
var signUp = function (name, email, pass, isVerified) {
    if (isVerified === void 0) { isVerified = true; }
    console.log(name, email, pass, isVerified);
};
signUp("MA", "ma@gmail.com", "123456");
// let data =sqrt(4)
//
//
//
// console.log(data);
// let value = addition(10,10)
//
// console.log(value)
// let data : string ="hello MA";
// let num1 : number =20;
// let isLogin = false;
//
// let num2  = 10
//
// let names : string[] = ["a","b","z"];
//
//
//
// console.log(names[1]);
//
// // console.log(num2)
// //
// // console.log(data);
// // console.log(num1);
// // console.log(isLogin);
