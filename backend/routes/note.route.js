import express from "express";

// import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";
import { getNotes } from "../controller/note.controller.js";

const router = express.Router();

router.get("/", getNotes);

export default router;