 import {UserService} from "../"

 import {PageService} from "../../../pages"

 export function Validate(userData,callback) {
     console.log(userData)
     UserService.validRegister(userData)
     .then((res) =>{
        if(userData.rememberMe) PageService.saveUserDataLocal(res.data)
        else PageService.saveUserDataSession(res.data)
        callback(null,res.data)
     })
     .catch((err) =>
     callback(err)
     )
 }