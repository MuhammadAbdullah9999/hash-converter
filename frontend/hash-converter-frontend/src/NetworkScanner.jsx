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
    <div>
      <h1 className="text-2xl mb-4">Network Scanner</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter target"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex items-center mb-4">
        <button
          onClick={handleScan}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Scan"}
        </button>
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
