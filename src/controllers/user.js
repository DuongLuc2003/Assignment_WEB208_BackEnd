import { CheckvalidateSignIn, CheckvalidateSignUp } from "../middlewares/user";
import UserSchema from "../models/user.model"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
export const Login = async(req,res)=>{
  try {
    const {email,password} = req.body
    const {error} = CheckvalidateSignIn.validate(req.body)
    if(error){
      return res.status(500).json({
        error: error.details[0].message
      })
    }
    const user = await UserSchema.findOne({email})
    if(!user){
      console.log(user);
      return res.json({
        message: "tài khoản không tồn tại"
      })
    }
    const isMach = await bcrypt.compare(password,user.password)
    if(!isMach){
      return res.json({
        message:"mật khẩu không chính xác"
      })
    }
    const token = jwt.sign({_id:user.id},"1234",{expiresIn:"1h"});
    user.password = undefined
    return res.json({
      message: "Đăng nhập thành công",
      accsestoken: token,
      user
    })
  } catch (error) {
    return res.status(400).json({
      massage: error.message,
    });
  }
}