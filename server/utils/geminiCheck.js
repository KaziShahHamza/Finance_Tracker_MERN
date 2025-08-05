import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// 👇 Generic function to generate content
export async function generateGeminiContent(prompt) {
  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    const output = result.text?.trim();
    return output || "No response";
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "ERROR";
  }
}