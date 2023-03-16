
import './database/db.js'
import express from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config()
import userRoute from './routes/userRoute.js';
const app =express();

app.use(cors());

app.use(express.urlencoded());
app.use(express.json());




app.use('/users' , userRoute);

app.listen(process.env.PORT,()=>{
    console.log('app startd');
})


