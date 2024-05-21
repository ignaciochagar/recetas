import {Router} from "express";

import userRouter from "./userRouter.js";
import recipeRouter from "./recipeRouter.js";
import commentRouter from "./commentRouter.js";

const router  =  Router();

router.get("/",(req,res)=>{
    res.json({data:"hello api"});
})
router.use("/users",userRouter);
router.use("/auths",authRouter);
router.use("/recipes",recipeRouter);
router.use("/comments",commentRouter);
export default router;