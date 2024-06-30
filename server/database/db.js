
import mongoose from "mongoose";


export const Connection = async(username,password) =>{
    const URL = `mongodb+srv://sandeep:jaishreeram@ecommerce-web.pyoibhp.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;

    try{
       await mongoose.connect(URL, {useUnifiedTopology: true ,useNewUrlParser:true});
       console.log('Database connection established');

    }catch(error){
        console.log('Error while connecting with server',error.message);
    }
}

export default Connection;