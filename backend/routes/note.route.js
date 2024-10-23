import express from "express";

// import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";
import { getNotes, createNotes } from "../controller/note.controller.js";

const router = express.Router();

router.get("/", getNotes);

router.post("/", createNotes)

export default router;