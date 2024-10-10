import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';


config();

import ConnectDb from '../curd/connection/Connection.js';
import studentRoutes from '../curd/routes/studentRoutes.js';

const app=express();

app.use(express.json()); //? For parsing json Requests
app.use(urlencoded({extended:true})); //? For parsing url-enconded Requests

ConnectDb();

app.use('/api/students',studentRoutes);

const port=process.env.PORT || 4500

app.listen(process.env.PORT,()=>{
    console.log('The server is running on port 3000')
})