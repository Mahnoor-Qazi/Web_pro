import express from "express";
import { getUser,postUser } from "../controller/user.js";

const router = express.Router();

router.get("/", getUser);
router.get("/", postUser);

export default router;