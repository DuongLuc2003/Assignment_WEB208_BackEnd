import mongoose from "mongoose";
 const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    role: {  type: String , default: "member", }, 
 })
 export default mongoose.model("User",UserSchema)