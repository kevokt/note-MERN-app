import mongoose from "mongoose";
import Note from "../models/note.model.js"

// READ NOTES
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes })
    } catch (error) {
        console.error("Error in Get Notes: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// CREATE NOTE
export const createNotes = async (req, res) => {
    const note = req.body;

    if (!note.title || !note.content) {
        return res.status(400).json({ success: false, message: "Please insert the title or content" });
    }

    // const newProduct = new Product(product);
    const newNote = new Note(note);

    try {
        await newNote.save();
        res.status(201).json({ success: true, message: "Note Successfully Created", data: newNote })
    } catch (error) {
        console.error("Error in Creating Note: ", error.message);
    }
}