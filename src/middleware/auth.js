import jwt from 'jsonwebtoken'
import User from '../models/user.js';


export const protect =async(req,res,next)=>{
    try {
        const token = req.headres.authorization.spilt(" ")[1];
        if(!token) return  res.status(403).json({message:"token not found"});
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findOne({id:decoded.id}).select("-password")
        req.user = user
        next()
    } catch (error) {
      return  res.status(403).json({message:"Access denaied"})
    }
}
