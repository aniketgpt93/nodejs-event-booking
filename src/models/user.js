import mongoose from "mongoose";


const { Schema , model} = mongoose;

const userSchema = new Schema({
    email:{type:String, unique:true,require:true},
    password:{type:String, require:true},
    role:{type:String, enum:['ORGANIZER', 'CUSTOMER'], default :'CUSTOMER'}
})

const userModel = new model("User", userSchema);
export default userModel;