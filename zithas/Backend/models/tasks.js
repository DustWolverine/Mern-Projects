import mongoose from "mongoose";
import { Myusers } from "./user.js";

const taskSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Myusers,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
},{
    timestamps:true
});

const Tasks=new mongoose.model("Tasks",taskSchema);

export default Tasks;