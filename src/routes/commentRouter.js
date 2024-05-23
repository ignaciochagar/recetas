import {Router} from "express";

import commentApiController from "../controllers/comments/commentApiController.js";


const router  = Router();

router.get("/",commentApiController.getAll);
router.get("/:id",commentApiController.getById);
router.post("/",commentApiController.create);
router.put("/:id",commentApiController.update);
router.delete("/:id",commentApiController.remove);
router.post("/:id/status",commentApiController.changeStatus);
router.post("/:id/user",commentApiController.addUser);
router.delete("/:id/user",commentApiController.removeUser);

export default router;