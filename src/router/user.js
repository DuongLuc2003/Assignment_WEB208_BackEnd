import express from "express"
import { Login, Singup } from "../controllers/user";


const Router = express.Router();
Router.post("/singup",Singup)
Router.post("/singin",Login)
export default Router 