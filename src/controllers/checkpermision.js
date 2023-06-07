import jwt from "jsonwebtoken"
import UserSchema from "../models/user.model"

export const checkpirmision = async(req,res,next)=>{
try {
    if(!req.headers.authorization){
     throw new Error("bạn cần đăng nhập để thực hiện chức năng này")
    }
    const token = req.headers.authorization.split("")[1];
    jwt.verify(token,"1234", async(payload,error)=>{
        if(error){
            if(error.name == "TokenExpiredError"){
                return res.json({
                    message:"token không hợp lệ"
                })
            }
            if (error.name == "JsonWebTokenError") {
                return res.json({
                  message: "Xin vui lòng đăng nhập lại",
                });
              }
        }
        const user = await UserSchema.findById(payload._id);
        console.log(user);
        if (user && user.role !== "admin") {
          return res.json({
            message: "Bạn không đủ thẩm quyền để truy cập",
          });
        }
        req.user = user;
        next();
    })
} catch (error) {
    return res.status(400).json({
        error: error.message
    })
}
}