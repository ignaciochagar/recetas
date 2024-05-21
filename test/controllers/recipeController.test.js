import connectDB from "../../src/config/mongo.js";
import mongoose from "mongoose";
import recipeController from "../../src/controllers/recipes/recipeController.js";
import userController from "../../src/controllers/users/userController.js";

let recipeId = null;
let userId = null;

describe("Test recipesController", () => {
    beforeAll(async () => {
        await connectDB();
        try {
            await mongoose.connection.collections["recipes"].drop();
        } catch (error) {
            console.error(error); 
        }
    })
    afterAll(async () => {
        await mongoose.connection.close();
    })
    test ("Crear recipe vacia", async () => {
        const user = await userController.getAll();
        console.log("usuario",users[0])
        const recipeData = {
            name: "recipe vacia",
            owner: user,
            users:users
        }
        const recipe = await recipeController.create(recipeData)
        recipeId = recipe._id;
        expect(recipe).not.toBeNull();
        expect(recipe.owner).toEqual(users[0]._id);   
        })
        test("Añadir usuario",async()=>{
            const newUser = await userController.create({title:"berberechos con pechos",description:"plato tipico andalusi",
            ingredients:"['pechos','berberechos']",'instructions':"hacer plato",image:"http://image.com",
            category:"plato tipico",author:"1234"});
            userId = newUser._id;
            const recipe = await recipeController.addUser(recipeId,newUser._id);
            expect(recipe).not.toBeNull();
            expect(recipe.users).toContain(newUser._id);
    
        })
        test("Quitar usuario",async()=>{
            const recipe = await recipeController.removeUser(recipeId,userId);
            expect(recipe).not.toBeNull();
            expect(recipe.users).not.toContain(userId);
        })
    

})


