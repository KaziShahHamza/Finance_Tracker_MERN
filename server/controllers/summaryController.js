// controllers/summaryController.js

import Finance from "../models/Finance.js";
import { summaryPrompt } from "../utils/summaryPrompt.js";
import { generateGeminiContent } from "../utils/geminiCheck.js";

export const generateSummary = async (req, res) => {
  try {
    const userId = req.user;

    const financeData = await Finance.find({ user: userId });

    if (!financeData || financeData.length === 0) {
      return res.status(404).json({ message: "No finance data found" });
    }

    const prompt = summaryPrompt(financeData);
    const summary = await generateGeminiContent(prompt);

    res.status(200).json({ summary });
  } catch (err) {
    console.error("Summary error:", err);
    res.status(500).json({ message: "Error generating summary" });
  }
};
