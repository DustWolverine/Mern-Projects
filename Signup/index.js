import express from "express";
import { urlencoded,json } from "express";
import morgan from "morgan";
import chalk from "chalk";
import dotenv from "dotenv";
import dbConnection from "./Connection/Connection.js";
import registerUser from "./Routes/RegisterRoute.js";
dotenv.config();

const app=express();

app.use(express.json()) //! For parsing json request
app.use(urlencoded({extended:true}));

dbConnection();

app.use('/api', registerUser);
app.use(morgan('dev'));
const port=process.env.PORT;
app.listen(port,()=>{
   

    console.log(chalk.bgCyan(`This app is running on localhost:${port}`))
})
