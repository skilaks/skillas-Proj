import axios from "axios";
const apiAddress = "http://localhost:5000/";
const apiAddress_server = "https://server.skillas-boof.com/";
// const apiAddressUser =apiAddress_server +"users/"
const apiAddressUser =apiAddress +"users/"
export const UserService = {
  getUser: () => {
     return axios.get(apiAddressUser);
  },
  getUserByUsername: (username) => {
     return axios.get(apiAddressUser + username);
  },
  loginUser: (userData) => {
    return axios.post(apiAddressUser+ "login/", userData);
    // return {
    //   status :200,
    //   data :'User Logined !!'

    // }
  },
  registerUser: (userData) => {
    return axios.post(apiAddressUser + "register", userData);
    
   
  },
  validRegister:(data)=>{
      return axios.post(apiAddressUser + "validRegister",data);
  },
  confrimRegister: (data)=>{
    return axios.post(apiAddressUser + "confrimRegister",data);
    // console.log(data);
    //  return{
    //    status :200,
    //    data:'User Registerted !!'
    //  }
  }
};