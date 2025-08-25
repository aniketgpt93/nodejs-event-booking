import mongoose from "mongoose";


const Schema = mongoose.Schema()

const userSchema = new Schema({
    email:{type:String, unique:true,require:true},
    password:{type:String, require:true},
    role:{type:String, enum:['ORGANIZER', 'CUSTOMER'], default :'CUSTOMER'}
})
export default mongoose.model("User", userSchema);