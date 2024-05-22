import commentController from "./commentController.js";

const getAll = async(req,res)=>{
    const recipeId = req.query.recipeId;
    const comments = await commentController.getAll(recipeId);
    res.json({data:comments});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const comment = await commentController.getById(id);
    res.json({data:comment});
}


const create = async(req,res)=>{
    const comment = await commentController.create(req.body);
    res.json({data:comment})
}

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