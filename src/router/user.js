import express from "express";
import { Login, Singup } from "../controllers/user";

const router = express.Router();
router.post("/signup", Singup);
router.post("/signin", Login);

export default router;
