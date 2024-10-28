import mongoose from "mongoose";
import Joi from "joi";


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        min:6,
        max:16,
        unique:true,
        requried:true,
        trim:true,
    },
    email:{
        type:String,
        min:10,
        max:255,
        unique:true,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        min:6,
        max:16,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

const Myusers=mongoose.model("Myusers",userSchema);

const validateUser=(user)=>{
    const schema=Joi.object({
        userName:Joi.string()
        .min(6)
        .max(16)
        .required(),
        email:Joi.string()
        .email()
        .min(10)
        .max(255)
        .required(),
        password:Joi.string()
        .alphanum()
        .min(6)
        .max(16)
        .required()
    })
    return schema.validate(user);
}

export {Myusers,validateUser};