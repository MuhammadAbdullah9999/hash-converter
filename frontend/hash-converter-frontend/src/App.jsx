import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import HashAnalyzer from "./HashAnalyzer";
import NetworkScanner from "./NetworkScanner";
import MD5Converter from "./HashConverters/MD5Converter";
import SHA1Converter from "./HashConverters/SHA1Converter";
import SHA256Converter from "./HashConverters/SHA256Converter";
import SHA512Converter from "./HashConverters/SHA512Converter";
import BCRYPT from "./HashConverters/BCRYPT";
import MD5PHPBB from "./HashConverters/MD5 PhP BB";
import MD5Crypt from "./HashConverters/MD5-Crypt";
import Oracle from "./HashConverters/Oracle";
import MySQL from "./HashConverters/MySQL";
import PHPS from "./HashConverters/PHPS";
import SHACrypt from "./HashConverters/SHA-Crypt"
import MD5Wordpress from "./HashConverters/MD5 Wordpress"
import Blogs from "./Blogs/Blogs";
import HowToUseBurpSuite from "./Blogs/BurpSuite/HowToUseBurpSuite";
import OWASPTop10 from "./Blogs/OWASP/owaspTop10";
import './App.css';

import { useState } from "react";

function App() {
  const [mode, setMode] = useState("hash");

  return (
    <Router>
      <div className="flex">
        <div className="">
          <Sidebar setMode={setMode} />
        </div>
        <div className="flex-1 p-4 md:ml-72">
          <Routes>
          <Route path="/" element={<MD5Converter />} />
            <Route path="/md5" element={<MD5Converter />} />
            <Route path="/sha1" element={<SHA1Converter />} />
            <Route path="/sha256" element={<SHA256Converter />} />
            <Route path="/sha512" element={<SHA512Converter />} />
            <Route path="/bcrypt" element={<BCRYPT />} />
            <Route path="/md5phpbb" element={<MD5PHPBB />} />
            <Route path="/md5-crypt" element={<MD5Crypt />} />
            <Route path="/oracle" element={<Oracle />} />
            <Route path="/mysql" element={<MySQL />} />
            <Route path="/phps" element={<PHPS />} />
            <Route path="/sha-crypt" element={<SHACrypt />} />
            <Route path="/md5wordpress" element={<MD5Wordpress />} />
            
            {/* Add routes for other hash converters */}
            <Route path="/analyze" element={<HashAnalyzer />} />
            <Route path="/scan" element={<NetworkScanner />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/How to Use Burp Suite for scanning Websites" element={<HowToUseBurpSuite />} />
            <Route path="/blogs/What is owasp top 10" element={<OWASPTop10 />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
