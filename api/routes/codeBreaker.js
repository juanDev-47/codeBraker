import express from "express";
import codeBreakerController from "../controllers/codeBreakerController.js";

const router = express.Router();


router.get("/codeBreaker", codeBreakerController.playCodeBreaker);

router.post("/codeBreaker", codeBreakerController.playCodeBreaker);

router.get("/", codeBreakerController.healthCheck);

export default router;