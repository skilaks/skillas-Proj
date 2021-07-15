const axios = require('axios');

const apiAddress = "http://localhost:5000/dashbord";

export const  dashbordService = {
    getDashboard:(user)=>{
        return axios.post(apiAddress+"/getUser", user)
    }
}

