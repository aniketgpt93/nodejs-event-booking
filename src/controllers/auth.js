import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authSchema, loginSchema } from "../validation/authValidation"
import User from '../models/user.js'



export const register =async(req,res)=>{
try {
    const {error} = authSchema.validate(req.body)
    if(error) return res.status(401).json({message:error.details[0].message})
    const {email,password} = req.body;
    const findUser = await User.findOne({email})
    if(findUser) return res.status(401).json({message:"costomer was allready created"})
    const hashPassword = bcrypt.hash(password,10);
    const createUser = await User.create({password:hashPassword,email})
    return res.status(200).json({message:"user Create successfully",})

} catch (error) {
    return res.status(403).json({message:""})
}
}

export const login =async(req,res)=>{
try {
    const {error} = loginSchema.validate(req.body)
    if(error) return res.status(401).json({message:error.details[0].message})
    const {email,password} = req.body;
    const findUser = await User.findOne({email})
    const hashPassword = bcrypt.compare(password, findUser.password);
     if(!hashPassword) return res.status(401).json({message:"password not match"})
     const token = jwt.sign({id: findUser._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    return res.status(200).json({message:"user loggedIn successfully",token})

} catch (error) {
    return res.status(403).json({message:""})
}
}