import mongoose from "mongoose";
import Note from "../models/note.model.js"

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes })
    } catch (error) {
        console.error("Error in Get Notes", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}