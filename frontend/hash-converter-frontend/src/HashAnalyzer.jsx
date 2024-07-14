import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function HashAnalyzer() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/analyze`, {
        inputText,
      });
      setOutputText(response.data.outputText.join(", "));
    } catch (error) {
      console.error("Error:", error);
      setOutputText("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Hash Analyzer</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter hash"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex items-center mb-4">
        <button
          onClick={handleAnalyze}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Analyze"}
        </button>
      </div>
      <textarea
        value={outputText}
        readOnly
        placeholder="Output will appear here"
        className="w-full p-2 mt-4 border border-gray-300 rounded"
      />
    </div>
  );
}

export default HashAnalyzer;
