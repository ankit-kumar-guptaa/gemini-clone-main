import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

if (!apiKey) {
  console.error("API Key not loaded. Check .env file and restart the server.");
} else {
  console.log("API Key Loaded:", apiKey); // Debug
}

const genAI = new GoogleGenerativeAI({ apiKey });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    console.log("Prompt Received:", prompt);

    const chatSession = await genAI.startChat({
      model: "models/gemini-2",
      history: [],
      generationConfig,
    });

    console.log("Chat Session Initialized:", chatSession);

    const response = await chatSession.sendMessage(prompt);
    console.log("AI Response:", response);

    return response.candidates[0].content || "No response received.";
  } catch (error) {
    console.error("Error in API call:", error.message);
    return "Error occurred during AI processing.";
  }
}

export default run;
