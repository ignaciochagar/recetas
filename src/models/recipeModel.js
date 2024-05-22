import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    });
    
    
const recipeModel = mongoose.model("recipes", recipeSchema);

export default recipeModel;