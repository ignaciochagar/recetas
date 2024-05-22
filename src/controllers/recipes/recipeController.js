import recipeModel from "../../models/recipeModel.js";
import commentController from "../comments/commentController.js";
import userController from "../users/userController.js";

const getAll = async(userId=null)=> {
    try {
        if(!userId){
            const projects = await projectModel.find();
            return projects;
        }
        const user =await userController.getById(userId);
        await user.populate("projects");
        return user.projects;
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
        await recipe.populate("users");
        await recipe.populate("tasks");
        return recipe;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const create = async(data) =>{
    try {
        const recipe = await recipeModel.create(data);
        recipe.users.push(data.owner);
        await recipe.save();
        await userController.addRecipe(data.owner,recipe._id);
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
        await userController.removeRecipe(recipe.owner,recipe._id);
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
            return {error:"El owner no se puede borrar"};
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
    create,
    update,
    remove,
    addUser,
    removeUser,
    addComment,
    removeComment
}

export default functions;