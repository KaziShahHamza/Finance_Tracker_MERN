import express from "express";
import { signup, login, getUser } from "../controllers/authController.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = express.Router();

// api/auth
router.post("/signup", signup);
router.post("/login", login);
router.get("/user", requireAuth, getUser);

export default router;
