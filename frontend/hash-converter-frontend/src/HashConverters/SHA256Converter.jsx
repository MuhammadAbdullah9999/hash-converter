import React from "react";
import HashForm from "./hashForm/HashForm";

function SHA256Converter() {
  return (
    <div>
      <HashForm
        hashType="SHA256"
        hashTitle="SHA256 Hash Converter"
      ></HashForm>
       <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8 ">
      <h1 className="text-3xl font-bold text-center mb-8">Understanding SHA-256</h1>

      <h2 id="introduction" className="text-2xl font-semibold text-gray-800 mb-4">
        Introduction
      </h2>
      <p className="text-justify text-gray-600">
        SHA-256 (Secure Hash Algorithm 256-bit) is part of the SHA-2 family of cryptographic hash functions. It produces a 256-bit (32-byte) hash value known as a message digest. SHA-256 was designed by the National Security Agency (NSA) and published by the National Institute of Standards and Technology (NIST) as a U.S. Federal Information Processing Standard.
      </p>

      <h2 id="how-it-works" className="text-2xl font-semibold my-2 text-gray-800">
        How SHA-256 Works
      </h2>
      <p className="text-justify text-gray-600">
        SHA-256 processes the input data in 512-bit blocks. Each block is divided into 16 words of 32 bits each. The algorithm uses these words to update hash values through a series of bitwise operations, logical functions, and modular additions, resulting in a fixed 256-bit hash value.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Step-by-Step Process
      </h3>
      <ol className="list-decimal ml-6 text-gray-600">
        <li>
          <strong>Message Padding</strong>: The message is padded to ensure its length is a multiple of 512 bits. Padding includes a single '1' bit followed by '0' bits, and the length of the original message is appended.
        </li>
        <li>
          <strong>Message Parsing</strong>: The padded message is divided into 512-bit blocks.
        </li>
        <li>
          <strong>Initialize Hash Values</strong>: Eight initial hash values (H0 through H7) are set.
        </li>
        <li>
          <strong>Processing Blocks</strong>: Each block is processed with a series of operations including bitwise functions and modular additions to update the hash values.
        </li>
        <li>
          <strong>Output</strong>: The final 256-bit hash value is generated after processing all blocks.
        </li>
      </ol>

      <h2 id="applications" className="text-2xl font-semibold my-2 text-gray-800">
        Applications of SHA-256
      </h2>
      <p className="text-justify text-gray-600">
        SHA-256 is used in various security applications and protocols, including blockchain technologies, digital signatures, certificate generation, and data integrity verification. Its strong security properties make it suitable for a wide range of applications.
      </p>

      <h2 id="security" className="text-2xl font-semibold my-2 text-gray-800">
        Security of SHA-256
      </h2>
      <p className="text-justify text-gray-600">
        SHA-256 is considered highly secure and resistant to collision attacks. With a 256-bit hash value, the probability of finding two different inputs that produce the same hash (collision) is astronomically low. This makes SHA-256 a robust choice for cryptographic purposes.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Collision Resistance
      </h3>
      <p className="text-justify text-gray-600">
        Collision resistance is a crucial property of SHA-256, meaning that it is computationally infeasible to find two different inputs that hash to the same output. The strength of SHA-256 lies in its ability to provide a unique hash value for different inputs.
      </p>

      <h2 id="transitioning" className="text-2xl font-semibold my-2 text-gray-800">
        Transitioning to SHA-256
      </h2>
      <p className="text-justify text-gray-600">
        Organizations and systems transitioning from older hash functions like SHA-1 to SHA-256 benefit from enhanced security. The transition is essential for maintaining data integrity and security in modern cryptographic applications.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Recommended Practices
      </h3>
      <p className="text-justify text-gray-600">
        When adopting SHA-256, ensure proper implementation practices, such as using secure libraries and algorithms. Regularly update cryptographic systems to address potential vulnerabilities and maintain robust security.
      </p>

      <h2 id="conclusion" className="text-2xl font-semibold my-2 text-gray-800">
        Conclusion
      </h2>
      <p className="text-justify text-gray-600">
        SHA-256 is a powerful and secure cryptographic hash function widely used for various security purposes. Its strong collision resistance and widespread adoption make it a reliable choice for protecting data in today's digital landscape.
      </p>

      <h2 id="faqs" className="text-2xl font-semibold my-2 text-gray-800">
        FAQs
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        What is SHA-256?
      </h3>
      <p className="text-justify text-gray-600">
        SHA-256 is a cryptographic hash function that generates a 256-bit hash value. It is part of the SHA-2 family of algorithms and is used for ensuring data integrity and security.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Why is SHA-256 considered secure?
      </h3>
      <p className="text-justify text-gray-600">
        SHA-256 is considered secure due to its resistance to collision attacks. The large hash value and robust cryptographic properties make it a reliable choice for secure data hashing.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        How does SHA-256 compare to SHA-1?
      </h3>
      <p className="text-justify text-gray-600">
        SHA-256 is more secure than SHA-1 due to its larger hash size and improved cryptographic design. While SHA-1 has known vulnerabilities, SHA-256 provides a higher level of security and is recommended for modern applications.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Further Reading</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li><a href="https://www.nist.gov/publications/detail/sp/800-57-part-1-rev-5" className="text-blue-500 hover:underline">NIST SP 800-57: Recommendation for Key Management</a></li>
          <li><a href="https://en.wikipedia.org/wiki/SHA-2" className="text-blue-500 hover:underline">Wikipedia: SHA-2</a></li>
          <li><a href="https://www.ibm.com/docs/en/zos/2.2.0?topic=functions-secure-hash-algorithm" className="text-blue-500 hover:underline">IBM: Secure Hash Algorithm (SHA)</a></li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default SHA256Converter;
