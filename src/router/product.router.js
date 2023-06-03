import express from "express";
import {
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductBySlug,
    getProductsByCategoryId,
    newProduct,
    updateProduct,
} from "~/controllers/ProductController";
// import { verifyToken } from "~/middleware/verifyToken";

const router = express.Router();

router.route("/products/category/:id").get(getProductsByCategoryId);
router.route("/products").get(getAllProducts).post(newProduct);

router.route("/product/:id").get(getProductById);
router.route("/products/:id").get(getProductBySlug).put(updateProduct).delete(deleteProduct);

export default router;
