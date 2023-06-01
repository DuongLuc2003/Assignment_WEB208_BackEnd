import { CheckvalidateSignUp } from "../middlewares/user";
import UserSchema from "../models/user.model"
import bcrypt from "bcryptjs";

export const Singup = async(req,res)=>{
    try {
        const {name , email, password,address, phone, role} =req.body;
        const UserExists = await UserSchema.findOne({email,phone})
        if(UserExists) {
            return res.json({
              message: " Tài khoản đã tồn tại ",
            });
          }
        const {error} = CheckvalidateSignUp.validate(req.body, {abortEarly:false})
       if(error){
        return res.json({
                message: error.details[0].message
        })
       }
       const bcrpassword = await bcrypt.hash(password,8);
       const user = await UserSchema.create({
        name,
        email,
        password:bcrpassword,
        address,
        phone,
       })
       user.password = undefined;
       return res.json({
        message: "tạo tài khoản thành công",
        data: user
       })
    } catch (error) {
        return res.status(401).json({
            message: error.message,
          });
        
    }
}