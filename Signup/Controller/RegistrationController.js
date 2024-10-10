import { User,validateUser } from "../Model/Registermodel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {


    const { error } = validateUser(req.body);
    if (error) {
       
        return res.status(400).json(error); 
    }
    
    const { name, email, password } = req.body;
    const isExist = await User.findOne({ email });

    if (isExist) {
        console.log("User already exists");
        return res.status(400).json({ message: "The User Already Exists" });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new User({ name, email, password: hashPassword });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json(error);
    }
};
