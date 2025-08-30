import Event from '../models/eventsModel.js'
import { fourDigitRamdomNumber } from '../utils/index.js';
import { eventSchema } from "../validation/eventValidation.js";


export const createvent=async(req,res)=>{
try {
    const {error} = eventSchema.validate(req.body);
    const {name,eventDate,city,price,seats,tag} = req.body
    if(error) return res.status(400).json({message:error.details[0].message})
     const ramdomNumber = fourDigitRamdomNumber
    const create = await Event.create({name,eventId:ramdomNumber,eventDate,city,price,seats, tag,}).save()

    return res.status(200).json({user:create})

} catch (error) {
    res.status(500).json({message:error.message})
}
}

export const updateEvent =async(req,res)=>{
try {
    const id = req.params.id;

    if(!params) return res.status(400).json({message:"Event id not valid"})
    const updateData = await Event.findByIdAndUpdate(id,req.body,{new:true})

  return  res.status(200).json({sucess:true,message:"Update sucessfullt", user:updateData})
    
} catch (error) {
   return res.status(500).json({message:error.message})
}
}
export const markPublish =async (req,res)=>{
try {
    const id = req.params.id;
    if(!id) return res.status(400).json({message:"Event id not valid"});
        const updateData = await Event.findByIdAndUpdate(id,{tag:"PUBLISHED"},{new:true})

  return  res.status(200).json({sucess:true,message:"Event Published", user:updateData})
    
} catch (error) {
   return res.status(500).json({message:error.message})
}
}
export const markCancel =async(req,res)=>{
try {
       const id = req.params.id;
    if(!id) return res.status(400).json({message:"Event id not valid"});
           const updateData = await Event.findByIdAndUpdate(id,{tag:"CANCELLED"},{new:true})

  return  res.status(200).json({sucess:true,message:"Event Published", user:updateData})
    
} catch (error) {
   return res.status(500).json({message:error.message})
}
}
export const eventMe =(req,res)=>{
try {
    
} catch (error) {
   return res.status(500).json({message:error.message})
}
}
export const getAllvents= async(req,res)=>{
try {
    const {tags, city, date} = req.body;
    const list = await Event.find({tags, city, date})

    
    return res.status(200).json({list})
    
} catch (error) {
   return res.status(500).json({message:error.message})
}
}