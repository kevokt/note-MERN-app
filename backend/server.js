// Importing Node Libaries
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

// Importing for MongoDB connection
import { connectDB } from './config/db.js';
// import productRoutes from "./routes/product.route.js";
import noteRoutes from './routes/note.route.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express()

const __dirname = path.resolve();

app.use(express.json()); // Middleware - allows us to accept JSON data in the body

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`TakeNote App Server started at http://localhost:${PORT}`);
})