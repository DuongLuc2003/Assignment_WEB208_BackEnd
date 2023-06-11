import express from "express";
import { createCategory, getAllCategory, getCategory, removeCategory, updateCategory } from "../controllers/categoryController.js";
import { checkpirmision } from "../controllers/checkpermision.js";

const router = express.Router()

router.get("/categories", getAllCategory);
router.get("/category/:id", getCategory);
router.post("/category/add", checkpirmision,createCategory);
router.patch("/category/:id/update",checkpirmision, updateCategory);
router.delete("/category/:id",checkpirmision,removeCategory);

export default router;