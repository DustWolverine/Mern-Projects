import jwt from "jsonwebtoken";
import { Myusers } from "../models/user.js";
const { ACCESS_TOKEN_SECRET } = process.env;


const verifyAccessToken = async (req, res, next) => {
    console.log(JSON.stringify(req.headers));
  const token = req.headers("Authorization");
  if (!token) return res.status(400).json({ status: false, msg: "Token not found" });
  let user;
  try {
    user = jwt.verify(token, ACCESS_TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).json({ status: false, msg: "Invalid token" });
  }

  try {
    user = await Myusers.findById(user.id);
    if (!user) {
      return res.status(401).json({ status: false, msg: "User not found" });
    }

    req.user = user;
    next();
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}

export default verifyAccessToken;