import commentController from "./commentController.js";

const getAll = async(req,res)=>{
    const projectId = req.query.projectId;
    const comments = await commentController.getAll(projectId);
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
    const task = await taskController.addUser(taskId,userId);
    res.json({data:task})
}

const removeUser = async(req,res)=>{
    const taskId = req.params.id;
    const userId = req.body.userId;
    const task = await taskController.removeUser(taskId,userId);
    res.json({data:task})
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