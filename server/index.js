// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import financeRoutes from "./routes/financeRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/finance", financeRoutes);
app.use("/api/summary", summaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
