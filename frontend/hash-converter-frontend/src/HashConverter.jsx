import React, { useState } from 'react';
import axios from 'axios';

const HashConverter = () => {
  const [inputText, setInputText] = useState('');
  const [hashType, setHashType] = useState('MD5');
  const [outputText, setOutputText] = useState('');
  const [isHashing, setIsHashing] = useState(true);

  const handleConvert = async () => {
    const endpoint = isHashing ? '/hash' : '/unhash';
    const response = await axios.post(`http://localhost:5000${endpoint}`, {
      inputText,
      hashType
    });
    console.log(response);
    setOutputText(response.data.outputText);
  };

  return (
    <div>
      <h1>Hash Converter</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text or hash"
      />
      <select value={hashType} onChange={(e) => setHashType(e.target.value)}>
        <option value="MD5">MD5</option>
        <option value="SHA1">SHA1</option>
        <option value="SHA256">SHA256</option>
        <option value="SHA512">SHA512</option>
        <option value="MySQL">MySQL</option>
        <option value="MD5-Wordpress">MD5 WordPress</option>
        <option value="MD5-phpBB">MD5 phpBB</option>
        <option value="BCRYPT">BCRYPT</option>
        <option value="MD5-Crypt">MD5-Crypt</option>
        <option value="Oracle">Oracle</option>
        <option value="SHA-Crypt">SHA-Crypt</option>
        <option value="PHPS">PHPS</option>
      </select>
      <button onClick={() => setIsHashing(true)}>Hash</button>
      <button onClick={() => setIsHashing(false)}>Unhash</button>
      <button onClick={handleConvert}>Convert</button>
      <textarea
        value={outputText}
        readOnly
        placeholder="Output will appear here"
      />
    </div>
  );
};

export default HashConverter;
