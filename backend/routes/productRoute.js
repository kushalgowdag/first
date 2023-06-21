import express from "express"
import { createProduct, getAllProducts, getProduct } from "../controllers/productController.js"
import { auth } from "../auth/auth.js"


const router = express.Router()

router.route("/create/product").post(auth, createProduct)
router.route("/products/all").get(getAllProducts)
router.route("/product/:id").get(getProduct)

export default router