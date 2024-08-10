import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function NetworkScanner() {
  const [inputText, setInputText] = useState("");
  const [scanResults, setScanResults] = useState(null);
  const [hostname, setHostname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      const cleanedInput = inputText.replace(/^https?:\/\//, "");
      setHostname(cleanedInput);
      const response = await axios.post(`http://localhost:5000/scan`, {
        target: cleanedInput,
      });
      const { ip, scanData } = response.data;
      setScanResults({ ip, scanData });
    } catch (error) {
      console.error("Error:", error);
      setHostname("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${loading ? "pointer-events-none" : ""}`}>
      <div className="text-center my-20">
        <h1 className="text-2xl mb-4 font-bold">Network Scanner</h1>
        <div className="flex justify-center gap-8 mt-12">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
            className="w-[40%] h-40 shadow-lg p-2 border border-gray-300 rounded-xl"
          />
        </div>
        <div className="flex justify-center items-center my-8 gap-4">
          <button
            onClick={handleScan}
            className={`flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-3xl ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-green-600 active:bg-green-700"}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <CircularProgress size={20} color="inherit" />
                Scanning...
              </>
            ) : (
              "Scan Network"
            )}
          </button>
        </div>
      </div>
      {scanResults && (
        <div>
          <h2 className="text-xl mb-4">Scan Results for {hostname}</h2>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">IP</th>
                <th className="border p-2 text-left">Hostname</th>
                <th className="border p-2 text-left">State</th>
              </tr>
            </thead>
            <tbody>
              {scanResults.scanData.map((host, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="border p-2">{host.ip}</td>
                  <td className="border p-2">{hostname}</td>
                  <td className="border p-2">{host.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Port</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Service</th>
              </tr>
            </thead>
            <tbody>
              {scanResults.scanData.map((host) =>
                host.open_ports.map((port, portIndex) => (
                  <tr key={portIndex} className="even:bg-gray-100">
                    <td className="border p-2">{port.port}</td>
                    <td className="border p-2">{port.state}</td>
                    <td className="border p-2">{port.name}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
     
    </div>
  );
}

export default NetworkScanner;
