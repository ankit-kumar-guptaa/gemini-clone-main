import React, { useState } from "react";
import run from "../config/gemini.js"; 

const PromptInput = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }
    const result = await run(prompt);
    setResponse(result);
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt here"
      />
      <button onClick={handleSend}>Send</button>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default PromptInput;
