import mongoose from "mongoose";


const { Schema, model } = mongoose;

const eventSchema = new Schema({
    name:{type:String, require:true},
    enentId:{type:String, require:true},
    eventDate:{type:Date, require:true},
    city:{type:String, require:true},
    price:{type:Number, require:true},
    seats:{type:Number, require:true},
    tag:{type:String, enum:['PUBLISHED', 'CANCELLED'], default :'PENDING'}
})
const eventModel = new model("eventModel", eventSchema);
export default eventModel;