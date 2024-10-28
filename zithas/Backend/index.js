import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utility/dbConnection.js";
import authRoute from "./routes/authRoute.js"

dotenv.config();

const app=express();
const port=process.env.port || 4000;



app.use(express.json());
app.use('/api/auth',authRoute);
dbConnection();

app.listen(port,()=>{
    console.log(`This app is running on ${port}`)
})