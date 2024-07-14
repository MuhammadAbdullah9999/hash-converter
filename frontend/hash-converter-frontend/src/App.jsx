import React, { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [inputText, setInputText] = useState('');
  const [hashType, setHashType] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('hash'); // 'hash', 'analyze', or 'scan'
  const [scanResults, setScanResults] = useState(null);
  const [hostname, setHostname] = useState(''); // New state to store hostname

  const handleHash = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/hash`, {
        inputText,
        hashType,
      });
      setOutputText(response.data.outputText);
    } catch (error) {
      console.error('Error:', error);
      setOutputText('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUnhash = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/unhash`, {
        inputText,
        hashType,
      });
      setOutputText(response.data.outputText);
    } catch (error) {
      console.error('Error:', error);
      setOutputText('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/analyze`, {
        inputText,
      });
      setOutputText(response.data.outputText.join(', '));
    } catch (error) {
      console.error('Error:', error);
      setOutputText('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleScan = async () => {
    setLoading(true);
    try {
      // Remove the protocol if it exists
      const cleanedInput = inputText.replace(/^https?:\/\//, '');
      setHostname(cleanedInput); // Set hostname to user input without protocol
      const response = await axios.post(`http://localhost:5000/scan`, {
        target: cleanedInput,
      });
      const { ip, scanData } = response.data;
      setScanResults({ ip, scanData });
    } catch (error) {
      console.error('Error:', error);
      setOutputText('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setHashType={setHashType} setMode={setMode} />
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl mb-4">
          {mode === 'hash'
            ? hashType
              ? `${hashType} Converter`
              : 'Hash Converter'
            : mode === 'analyze'
            ? 'Hash Analyzer'
            : 'Network Scanner'}
        </h1>
        <>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text, hash, or target"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="flex items-center mb-4">
            {mode === 'hash' ? (
              <>
                <button
                  onClick={handleHash}
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Encrypt'}
                </button>
                <button
                  onClick={handleUnhash}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Decrypt'}
                </button>
              </>
            ) : mode === 'analyze' ? (
              <button
                onClick={handleAnalyze}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Analyze'}
              </button>
            ) : (
              <button
                onClick={handleScan}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Scan'}
              </button>
            )}
          </div>
          {mode !== 'scan' ? (
            <textarea
              value={outputText}
              readOnly
              placeholder="Output will appear here"
              className="w-full p-2 mt-4 border border-gray-300 rounded"
            />
          ) : (
            scanResults && (
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
            )
          )}
        </>
      </div>
    </div>
  );
}

export default App;
