import mongoose, { Schema } from "mongoose";

const studentSchema=new Schema({
    name:{
        type:String,    
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const Student=mongoose.model('Student',studentSchema)

export default Student;