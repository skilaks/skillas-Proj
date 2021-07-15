import {UserService} from '../'

export async function Register(userData,callback) {
   const res = await UserService.registerUser(userData)


    if(res.data.status ===400){
        // callback({msg:'این شماره تلفن قبلا ثبت شده است '})
        callback({msg:'این ایمیل قبلا ثبت شده است!'})
    }
    else if(res.status==200){
        callback(null,res.data);
    }
    // .then((res) =>{
    //     callback(null,res)
    // })
    // .catch((err) =>{
    //     console.log(err)
    //     callback(err)
    // })

}