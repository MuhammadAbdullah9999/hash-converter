import React from "react";
import HashForm from "./hashForm/HashForm";

function SHA1Converter() {
  return (
    <div>
      <HashForm
        hashType="SHA1"
        hashTitle="SHA1 Hash Converter"
      ></HashForm>
       
    <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-8 ">Understanding SHA-1</h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
      <p className="text-justify text-gray-600">
        SHA-1 (Secure Hash Algorithm 1) is a cryptographic hash function that takes an input and produces a 160-bit (20-byte) hash value known as a message digest. SHA-1 was designed by the National Security Agency (NSA) and published by the National Institute of Standards and Technology (NIST) as a U.S. Federal Information Processing Standard.
      </p>

      <h2 className="text-2xl font-semibold my-2 text-gray-800">
        How SHA-1 Works
      </h2>
      <p className="text-justify text-gray-600">
        SHA-1 works by processing the input data in blocks of 512 bits. It breaks down the data into chunks, processes each chunk through a series of bitwise operations, logical functions, and modular additions, and produces a fixed 160-bit hash value as the output.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Step-by-Step Process
      </h3>
      <ol className="list-decimal ml-6 text-gray-600">
        <li>
          <strong>Message Padding</strong>: The message is padded to ensure its length is a multiple of 512 bits.
        </li>
        <li>
          <strong>Message Parsing</strong>: The padded message is broken down into 512-bit blocks.
        </li>
        <li>
          <strong>Initialize Hash Values</strong>: Five initial hash values (H0, H1, H2, H3, H4) are set.
        </li>
        <li>
          <strong>Processing Blocks</strong>: Each block is processed through a series of operations including bitwise functions and modular additions.
        </li>
        <li>
          <strong>Output</strong>: The final hash value is generated after processing all blocks.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold my-2 text-gray-800">
        Applications of SHA-1
      </h2>
      <p className="text-justify text-gray-600">
        SHA-1 was widely used in various security applications and protocols, including TLS, SSL, PGP, SSH, IPsec, and digital certificates. Despite being deprecated for most security uses, SHA-1 is still used in some legacy systems.
      </p>

      <h2 className="text-2xl font-semibold my-2 text-gray-800">
        Vulnerabilities of SHA-1
      </h2>
      <p className="text-justify text-gray-600">
        SHA-1 is no longer considered secure against well-funded attackers. In 2005, cryptanalysts discovered weaknesses in the algorithm, leading to the first practical collision attack in 2017. Due to these vulnerabilities, SHA-1 has been replaced by more secure algorithms like SHA-256 and SHA-3.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Collision Attacks
      </h3>
      <p className="text-justify text-gray-600">
        A collision occurs when two different inputs produce the same hash value. In the case of SHA-1, such collisions can be found much faster than the brute-force time of 2^80. This weakness undermines the integrity of SHA-1 as a secure hash function.
      </p>

      <h2 className="text-2xl font-semibold my-2 text-gray-800">
        Transitioning Away from SHA-1
      </h2>
      <p className="text-justify text-gray-600">
        Most modern systems have transitioned away from SHA-1 to more secure hash functions like SHA-256 or SHA-3. The transition is vital for maintaining the integrity and security of data in various applications.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Recommended Hash Functions
      </h3>
      <p className="text-justify text-gray-600">
        As SHA-1 is phased out, organizations are encouraged to use SHA-256 or SHA-3, both of which are considered secure against known cryptographic attacks.
      </p>

      <h2 className="text-2xl font-semibold my-2 text-gray-800">
        Conclusion
      </h2>
      <p className="text-justify text-gray-600">
        SHA-1 was once a cornerstone of cryptographic security, but its vulnerabilities have rendered it obsolete in most security applications. It is crucial to adopt more secure hashing algorithms to protect data against evolving cyber threats.
      </p>

      <h2 className="text-2xl font-semibold my-2 text-gray-800">
        FAQs
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        What is SHA-1?
      </h3>
      <p className="text-justify text-gray-600">
        SHA-1 is a cryptographic hash function that produces a 160-bit hash value. It was widely used for securing data but is now considered insecure.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Why is SHA-1 considered insecure?
      </h3>
      <p className="text-justify text-gray-600">
        SHA-1 is considered insecure due to its susceptibility to collision attacks, where two different inputs can produce the same hash value, compromising the integrity of the data.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        What should be used instead of SHA-1?
      </h3>
      <p className="text-justify text-gray-600">
        Modern cryptographic practices recommend using SHA-256 or SHA-3, which are more secure against current cryptographic attacks.
      </p>
    </div>
    </div>
  );
}

export default SHA1Converter;
