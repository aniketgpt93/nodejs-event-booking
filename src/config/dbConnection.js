import mongoose from 'mongoose'



export const dbonnection = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL)

        console.log("db connected")
    } catch (error) {
        console.log("db not connected",error)
        return error.message
    }
}