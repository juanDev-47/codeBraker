import express from "express";
import codeBreakerController from "../controllers/codeBreakerController.js";

const router = express.Router();


router.get("/", codeBreakerController.playCodeBreaker);

router.post("/", codeBreakerController.playCodeBreaker);

router.get("/health", codeBreakerController.healthCheck);

export default router;