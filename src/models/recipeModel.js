import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    ingredients: {
        type: [String], required: true
    },
    instructions: {
        type: String, required: true
    },
    image: {
        type: String
    },
    category: {
        type: String, required: true
    },
    author: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    }
});

const recetaModel = mongoose.model("recetas", recetaSchema);

export default recetaModel;