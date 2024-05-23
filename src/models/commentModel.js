import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String, required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    recipe: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true
    }
});

const commentModel = mongoose.model("comments", commentSchema);

export default commentModel