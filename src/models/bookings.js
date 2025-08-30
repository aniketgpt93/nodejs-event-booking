import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  eventId: { type: String, required: true },
  bkId: { type: String, required: true },
  price: { type: Number, required: true },
  seats: { type: Number, required: true },
  tag: { 
    type: String, 
    enum: ['PUBLISHED', 'CANCELLED'], 
    default: 'PENDING' 
  }
});

const bookingModel = new model("bookingModel", userSchema);
export default bookingModel
