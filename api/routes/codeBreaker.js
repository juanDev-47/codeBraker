import express from "express";
import codeBreakerController from "../controllers/codeBreakerController.js";

const router = express.Router();


router.get("/", codeBreakerController.playCodeBreaker);


export default router;