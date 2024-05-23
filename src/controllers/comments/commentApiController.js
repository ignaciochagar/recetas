import commentController from "./commentController.js";

/**
 * Retrieves all comments for a given recipe.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the comments are successfully retrieved and sent as a JSON response.
 */
const getAll = async(req,res)=>{
    const recipeId = req.query.recipeId;
    const comments = await commentController.getAll(recipeId);
    res.json({data:comments});
}


/**
 * Retrieves a comment by its ID and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the comment is successfully retrieved and sent as a JSON response.
 */
const getById = async (req,res) =>{
    const id = req.params.id
    const comment = await commentController.getById(id);
    res.json({data:comment});
}


/**
 * Creates a new comment using the data provided in the request body and sends it as a JSON response.
 *
 * @param {Object} req - The request object containing the comment data in the body.
 * @param {Object} res - The response object used to send the comment data as a JSON response.
 * @return {Promise<void>} A promise that resolves when the comment is successfully created and sent as a JSON response.
 */
const create = async(req,res)=>{
    const comment = await commentController.create(req.body);
    res.json({data:comment})
}

/**
 * Updates a comment with the given ID using the data provided in the request body and sends the updated comment as a JSON response.
 *
 * @param {Object} req - The request object containing the comment ID in the params and the updated comment data in the body.
 * @param {Object} res - The response object used to send the updated comment data as a JSON response.
 * @return {Promise<void>} A promise that resolves when the comment is successfully updated and sent as a JSON response.
 */
const update = async(req,res)=>{
    const id =req.params.id;
    const comment = await commentController.update(id,req.body);
    res.json({data:comment})
}
const changeStatus = async(req,res)=>{
    const id = req.params.id
    const status = req.body.status;
    const comment  = await commentController.changeStatus(id,status);
    res.json({data:comment})
}
const remove = async(req,res)=>{
    const id= req.params.id;
    const comment = await commentController.remove(id);
    res.json({data:comment})
}

const addUser = async(req,res)=>{
    const commentId = req.params.id;
    const userId = req.body.userId;
    const comment = await commentController.addUser(commentId,userId);
    res.json({data:comment})
}

const removeUser = async(req,res)=>{
    const commentId = req.params.id;
    const userId = req.body.userId;
    const comment = await commentController.removeUser(commentId,userId);
    res.json({data:comment})
}


export default{
    getAll,
    getById,
    create,
    update,
    changeStatus,
    remove,
    addUser,
    removeUser,
}