import bcrpyt from "bcrypt";
import { validateUser,Myusers } from "../models/user.js";
import verifyAccessToken from "../middleware/webtoken.js";
import jwt from "jsonwebtoken";



export const signUp=async(req,res)=>{
      const {error}=validateUser(req.body);
      if(error){
        return res.status(400).json({status:false,msg:"Validation failed!!"})
      }
      const {userName,email,password}=req.body;
      try {
        const findUser=await Myusers.findOne({$or:[{userName},{email}]});
        if(findUser){
            return res.status(400).status({status:false,msg:"User already exist"})
        }
        const generateSalt=await bcrpyt.genSalt(10);
        const hashPassword=await bcrpyt.hash(password,generateSalt);
        const newUser= new Myusers({
            userName,
            email,
            password:hashPassword
        })
        const userCreate=await newUser.save();
        return res.status(200).json({status:true,userCreate})
      } catch (error) {
        console.log(error)
      }
    
}


export const signIn=async(req,res)=>{
  const {error}=validateUser(req.body);
    if(error){
        return res.status(400).json({status:false,msg:"Validation failed!!"})
    }
    const {userName,email,password}=req.body;
    try {
        const findUser = await Myusers.findOne({ $or: [{ userName }, { email }] });
    if(!findUser){
        return res.status(404).json({status:false,msg:"User does not exist"})
    }
    const passwordmatch=bcrpyt.compare(password,findUser.password);
    if(!passwordmatch){
        return res.status(400).json({status:false,msg:"Password did not match"})
    }
     const token=verifyAccessToken({id:findUser._id});
    delete findUser.password;
    return res.status(200).json({ token, user: findUser, status: true, msg: "Login successful" });
    } catch (error) {
       console.log(error);
       return res.status(500).json({status:false,msg:"Internal server error"}) 
    }

}