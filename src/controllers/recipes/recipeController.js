import recipeModel from "../../models/recipeModel.js";
import commentController from "../comments/commentController.js";
import userController from "../users/userController.js";

const getAll = async(userId=null)=> {
    try {
        const recipes = await recipeModel.find();
        return recipes;
       /*  if(!userId){
        }
        const user =await userController.getById(userId);
        await user.populate("recipes");
        return user.recipes; */
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const recipe = await recipeModel.findById(id);
        if(!recipe){
            return null;
        }
        await recipe.populate("author");
        //await recipe.populate("comments");
        return recipe;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const getByProperty = async (property, value) => {
    try {
        console.log("property", property)
        console.log("value", value)
        const recipes = await recipeModel.find({ [property]: value })
        return recipes;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const recipe = await recipeModel.create(data);
       
       
        await userController.addRecipe(data.author,recipe._id);
        return recipe;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}


const update = async(id,data) =>{
    try {
        await recipeModel.findByIdAndUpdate(id,data);

        const recipe = await recipeModel.findById(id);
        return recipe;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const recipe = await recipeModel.findByIdAndDelete(id);
        const result = await commentController.removeForRecipe(id);
        await userController.removeRecipe(recipe.author,recipe._id);
        return recipe;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(recipeId,userId) =>{
    try {
        console.log("usuriio",userId)
        const recipe = await getById(recipeId);
        console.log("proyecto",recipe);
        await userController.addRecipe(userId,recipeId)
        if(!recipe.users.includes(userId)){
            recipe.users.push(userId);
            await recipe.save();
            return recipe
        }
        return recipe;
    } catch (error) {
        return null;
    }
}
const removeUser = async(recipeId,userId)=>{
    try {
        console.log("removeUser",recipeId,userId)
        const recipe = await getById(recipeId);
        if(userId.equals(recipe.author)){
            return {error:"El author no se puede borrar"};
        }
        await userController.removeRecipe(userId,recipeId);
        if(recipe.users.includes(userId)){
            recipe.users = recipe.users.filter(u=> !u.equals(userId));
            await recipe.save();
            return recipe
        }
        return recipe;
    } catch (error) {
        return null;
    }
}
const addComment = async(recipeId,commentId) =>{
    try {
        const recipe = await getById(recipeId);
        if(!recipe.comments.includes(commentId)){
            recipe.comments.push(commentId);
            await recipe.save();
            return recipe
        }
        return recipe;
    } catch (error) {
        return null;
    }
}
const removeComment = async(recipeId,commentId)=>{
    try {
        const recipe = await getById(recipeId);
        if(recipe.comments.includes(commentId)){
            recipe.comments = recipe.comments.filter(u=> u!==commentId);
            await recipe.save();
            return recipe
        }
        return recipe;
    } catch (error) {
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    addUser,
    removeUser,
    addComment,
    removeComment
}

export default functions;