// routes/summaryRoutes.js

import express from "express";
import { generateSummary } from "../controllers/summaryController.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, generateSummary);

export default router;
