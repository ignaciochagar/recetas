import recipeController from "./recipeController.js";

const getAll = async(req,res)=>{
    const recipes = await recipeController.getAll();
    res.json({data:recipes});
}

const getById = async (req,res) =>{
    const id = req.params.id
    const recipe = await recipeController.getById(id);
    res.json({data:recipe});
}

//quiero sacar las recestas de un author
const getByProperty = async (req, res) => {
    const { property, value } = req.query;
    const recipes = await recipeController.getByProperty(property, value);
    res.json({ data: recipes })
}


const create = async(req,res)=>{
    const author = req.user._id;
    const data = {...req.body,author:author};
    const recipe = await recipeController.create(data);
    res.json({data:recipe})
}

const update = async(req,res)=>{
    const id =req.params.id;
    const recipe = await recipeController.update(id,req.body);
    res.json({data:recipe})
}

const remove = async(req,res)=>{
    const id= req.params.id;
    const recipe = await recipeController.remove(id);
    res.json({data:recipe})
}

const addUser = async(req,res)=>{
    const recipeId = req.params.id;
    const userId = req.body.userId;
    const recipe = await recipeController.addUser(recipeId,userId);
    res.json({data:recipe})
}

const removeUser = async(req,res)=>{
    const recipeId = req.params.id;
    const userId = req.body.userId;
    const recipe = await recipeController.removeUser(recipeId,userId);
    res.json({data:recipe})
}


export default{
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove,
    addUser,
    removeUser,
}