
import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME= process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=async()=>{
       const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-6yc3n45-shard-00-00.tzhtb7j.mongodb.net:27017,ac-6yc3n45-shard-00-01.tzhtb7j.mongodb.net:27017,ac-6yc3n45-shard-00-02.tzhtb7j.mongodb.net:27017/?ssl=true&replicaSet=atlas-c4a0xo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology:true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('eroor while connecting with database',error.message);
    }
}  

export default Connection;