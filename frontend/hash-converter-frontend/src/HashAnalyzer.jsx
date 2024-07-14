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
     <div className="text-center my-20">
      <h1 className="text-2xl mb-4 font-bold">Hash Analyzer</h1>
      <div className="flex justify-center gap-8 mt-12">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text"
          className="w-[40%] h-40 shadow-lg p-2 border border-gray-300 rounded-xl"
        />
        <div className="w-[40%] h-40 shadow-lg p-2 border border-gray-300 rounded-xl flex items-center justify-center">
          {loading ? (
            <CircularProgress />
          ) : (
            <textarea
              value={outputText}
              readOnly
              placeholder="Output will appear here"
              className="w-full h-full border-none outline-none resize-none"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center my-8 gap-4">
        <button
          onClick={handleAnalyze}
          className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-3xl"
          disabled={loading}
        >
          Analyze
        </button>
      </div>
    </div>
     
    </div>
  );
}

export default HashAnalyzer;
