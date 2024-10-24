const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);