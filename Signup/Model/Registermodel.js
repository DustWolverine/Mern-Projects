import mongoose, { model, Schema } from "mongoose";
import Joi from "joi";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:5,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:16
    },
  createdAt:{
    type:Date,
    default:Date.now,
  }
})

const User=mongoose.model('User',userSchema)

const validateUser=(user)=>{
    const schema=Joi.object({
            name: Joi.string()
            .min(2)
            .max(20)
            .required(),
           email: Joi.string()
           .min(5)
           .max(255)
           .pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')),
           password: Joi.string()
           .min(8)
           .max(16)
           .required(),
           


    })
    return schema.validate(user)
}

export {User,validateUser};




