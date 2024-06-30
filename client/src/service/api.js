import axios  from 'axios';

const URL = 'https://flipkart-clone-wynr.onrender.com';

export const  authenticatesSignup = async(data) => {
    try{
      return await axios.post(`${URL}/signup`,data);
    }catch(error){
        console.log("Error while calling sigup api", error);
    }
}
export const  authenticatesLogin = async(data) => {
    try{
      return await axios.post(`${URL}/login`,data);
    }catch(error){
        console.log("Error while calling login api", error);
        return error.response;
    }
}