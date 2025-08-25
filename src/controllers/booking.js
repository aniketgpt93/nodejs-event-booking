import eventsModel from "../models/eventsModel.js"
import { fourDigitRamdomNumber } from "../utils"




export const Booking =async(req,res)=>{
try {
   const {eventId, qty}= req.body
    const ramdomNumber = fourDigitRamdomNumber
    const findEventSeats = await eventsModel.findOne({id:eventId})
    
} catch (error) {
    res.status(500).json({message:error.message})
}
}

export const getMyBooking =()=>{
try {
    
} catch (error) {
    res.status(500).json({message:error.message})
}
}