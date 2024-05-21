import recetaModel from "../../models/recetaModel.js";

const getAll = async () => {
    try {
        const recetas = await recetaModel.find();
        return recetas;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const getById = async (id) => {
    try {
        const receta = await recetaModel.findById(id);
        return receta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const create = async (data ) => {
    try {
        const receta = await recetaModel.create(data);
        return receta;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const update = async (id, data) => {
    try {
        const receta = await recetaModel.findByIdAndUpdate(id, data);
        return receta;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async (id) => {
    try {
        const receta = await recetaModel.findByIdAndDelete(id);
        return receta;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const addUser = async(recetaId,userId) =>{
    try {
        const receta = await getById(recetaId);
        if(!receta.users.includes(userId)){
            receta.users.push(userId);
            await receta.save();
            return receta
        }
        return receta;
    } catch (error) {
        return null;
    }
}
const removeUser = async(recetaId,userId)=>{
    try {
        const receta = await getById(recetaId);
        if(receta.users.includes(userId)){
            receta.users = receta.users.filter(u=> u!==userId);
            await receta.save();
            return receta
        }
        return receta;
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
}

export default functions;
