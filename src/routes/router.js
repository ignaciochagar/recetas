import {Router} from "express";


import userRouter from "./userRouter.js";
import recipeRouter from "./recipeRouter.js";
import commentRouter from "./commentRouter.js";
import authRouter from "./authRouter.js";
import { isAuthenticated,isAdmin } from "../middlewares/authMiddleware.js";


const router  =  Router();

 router.get("/",(req,res)=>{
    res.json({data:"hello api"});
}) 
 
router.use("/users",userRouter);
router.use("/recipes",isAuthenticated,recipeRouter);
router.use("/comments",isAuthenticated,commentRouter);
router.use("/",authRouter);
export default router;