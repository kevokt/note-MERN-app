import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt & updatedAt
});

const Note = mongoose.model("notes", noteSchema);

export default Note;