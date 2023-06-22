import express from "express";
import {getRoom,postRoom} from '../controller/room.js'

const router = express.Router();

router.get("/",getRoom);
router.post("/",postRoom);


export default router;


