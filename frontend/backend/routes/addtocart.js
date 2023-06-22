import express from "express";
import { postCategory, getCategory ,getDelete } from "../controller/addtocart.js";

const router = express.Router();


router.post("/",postCategory);
router.get("/",getCategory);
router.delete("/:id", getDelete);

export default router;


