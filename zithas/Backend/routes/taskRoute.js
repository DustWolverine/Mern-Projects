import express from "express";
import { getTask,getTasks,createTask } from "../controllers/taskcontroller.js";
import verifyAccessToken from "../middleware/webtoken.js";

const router=express.Router();

router.get('/',verifyAccessToken,getTasks);
router.get('/:taskId',verifyAccessToken,getTask);
router.post('/',verifyAccessToken,createTask);

export default router;