import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./utility/dbConnection.js";
import authRoute from "./routes/authRoute.js";
import taskRoute from "./routes/taskRoute.js";

dotenv.config();

const app=express();
const port=process.env.port || 4000;



app.use(express.json());
app.use('/api/auth',authRoute);
app.use('/api/task',taskRoute);
app.use(morgan('dev'));
dbConnection();

app.listen(port,()=>{
    console.log(`This app is running on ${port}`)
})