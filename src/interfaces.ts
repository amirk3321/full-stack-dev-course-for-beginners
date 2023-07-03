interface User {
    name: string;
    uid: string;
    email: string
}

interface User {
    username: string,
    password?: string;

    getUserInfo(): string;
    updateUserProfile : () => string
}

interface AdminUser  extends User{
    accountType : string
}


const adminUser : AdminUser = {
    name: "ma", email: "ma@dev", uid: "1234", username: "ma123", getUserInfo: () => {
        return "hello"
    },updateUserProfile : () => {
        return "update profile";
    },accountType:"admin"
}


const ma: User = {
    name: "ma", email: "ma@dev", uid: "1234", username: "ma123", getUserInfo: () => {
        return "hello"
    },updateUserProfile : () => {
        return "update profile";
    }

}


console.log(adminUser)

console.log(ma.uid)
console.log(ma.getUserInfo())
console.log(ma.updateUserProfile())