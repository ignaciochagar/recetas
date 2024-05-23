import commentModel from "../../models/commentModel.js";
import recipeController from "../recipes/recipeController.js"

const getAll = async (recipeId) =>{
    try {
        const comments = await commentModel.find({recipe:recipeId});
        return comments;
    } catch (error) {
        console.error(error);
        return [];
    }
}


const getById = async(id) =>{
    try {
        const comment = await commentModel.findById(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        const comment = await commentModel.find({[property]:value})
        return comment;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const comment = await commentModel.create(data);
        if(comment){
            await recipeController.addComment(comment.recipe,comment._id)
        }
        return comment;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const changeStatus = async(id,status) =>{
    try {
        const data = {
            status: status
        }
        await commentModel.findByIdAndUpdate(id,data);

        const comment = await commentModel.findById(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const update = async(id,data) =>{
    try {
         await commentModel.findByIdAndUpdate(id,data);

        const comment = await commentModel.findById(id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const comment = await commentModel.findByIdAndDelete(id);
        await recipeController.removecomment(comment.recipe,comment._id);
        return comment;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const removeForRecipe = async(recipeId) =>{
    try {
        const comments = await commentModel.deleteMany({ recipe: recipeId });
        return comments;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const removeMany = async(ids) =>{
    try {
        const comments = await commentModel.deleteMany({ _id: { $in: ids } });
        return comments;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(commentId,userId) =>{
    try {
        const comment = await getById(commentId);
        if(!comment.users.includes(userId)){
            comment.users.push(userId);
            await comment.save();
            return comment
        }
        return comment;
    } catch (error) {
        return null;
    }
}
const removeUser = async(commentId,userId)=>{
    try {
        const comment = await getById(commentId);
        if(comment.users.includes(userId)){
            comment.users = comment.users.filter(u=> u!==userId);
            await comment.save();
            return comment
        }
        return comment;
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
    changeStatus,
    remove,
    removeMany,
    removeForRecipe,
    addUser,
    removeUser
}

export default functions;