import express from "express"
import { Singup } from "../controllers/user";


const Router = express.Router();
Router.post("/singup",Singup)
export default Router 