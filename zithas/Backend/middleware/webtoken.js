import jwt from "jsonwebtoken";
import { Myusers } from "../models/user.js";



const verifyAccessToken = async (req, res, next) => {
    console.log(JSON.stringify(req.headers)); 

    const authHeader = req.headers["authorization"] || req.headers["Authorization"];
    if (!authHeader) {
        return res.status(400).json({ status: false, msg: "Token not found" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(400).json({ status: false, msg: "Malformed token" });
    }

    try {
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    

        const user = await Myusers.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ status: false, msg: "User not found" });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error("Token verification error:", err);
        return res.status(401).json({ status: false, msg: "Invalid token" });
    }
};

export default verifyAccessToken;
