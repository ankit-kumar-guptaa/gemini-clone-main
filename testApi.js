import axios from "axios";

const apiKey = "AIzaSyDMDGhdPKBTMyWtJtEOvyQ8j4JfC9J5xZE"; // Your API Key
const apiUrl = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText"; // Correct endpoint for text generation

async function testApi() {
  try {
    const prompt = "Hello, how are you?";

    const response = await axios.post(
      apiUrl,
      {
        prompt: {
          text: prompt, // Your input prompt
        },
        temperature: 0.7,
        candidateCount: 1,
        maxOutputTokens: 256,
        topP: 0.8,
        topK: 40,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`, // Add API key to Authorization
        },
      }
    );

    console.log("API Response:", response.data.candidates[0].output);
  } catch (error) {
    console.error("Error during API Test:", error.response?.data || error.message);
  }
}

testApi();
