import jwt from "jsonwebtoken";


 const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
}
export default createAccessToken
