import React from "react";

import HashForm from "./hashForm/HashForm";

function MD5Converter() {
  
  return (
    <div>
    <HashForm hashType='MD5' hashTitle='MD5 Hash Converter'></HashForm>
      
      <div className="pb-4">
        <div className="flex flex-col gap-4 shadow-2xl rounded-lg p-8 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              How MD5 Works: A Complete Guide
            </h1>
            <p>
              MD5 Hash: Message Digest 5 hash is a standard cryptographic
              encryption algorithm that produces a fixed-size output (128-bits),
              which is typically rendered as hexadecimal number to make it
              easier for humans. As seen in the example above, it can take an
              input of up to 2^{64} bits and produce a unique digital
              fingerprint that has various applications for security. It also
              has been stated as totally unsafe way back in the 1990s so even if
              it was widely supported.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              MD5 Encryption Algorithm History and development
            </h1>
            <p>
              MD5 was created in 1991 as a replacement for the MD4 algorithm,
              which also generated 128-bit hash values but became immediately
              flawed from security perspectives. In contrast, MD5 tried to
              provide a more secure alternative. However, in 1996, the
              algorithm’s collision vulnerabilities emerged, showing that two
              separate inputs could demonstrate the same hash value. The new
              findings reinforced in 2004 determined that MD5 should not be used
              for many cryptographic applications, as it is not a
              collision-resistant design.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              MD5 Encryption Applications and Limitations
            </h1>
            <p>
              While MD5 is considered to be cryptographically broken, its
              partial use in various non-critical functions continue this
              popularity. To this day, many webmasters still unsuspecting of the
              weaknesses within MD5 continue to use it for various purposes.
              Here is a simple example that illustrates using different MD5
              outputs for various inputs. Password:
              dc647eb65e6711e155375218212b3964 - password:
              5f4dcc3b5aa765d61d8327deb882cf99
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Why MD5 Cannot Be Decrypted</h1>
            <p>
              MD5 (Message-Digest algorithm 5) is a widely-used cryptographic
              hash function producing a 128-bit hash value which can be treated
              as an actual detection for the original input. This property makes
              it very handy to hash the passwords securely, as one can not get a
              password back from its hash. Upon each login, the password entered
              by a user is hashed and checked against an existing hash.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">How to "Decrypt" MD5 Hashes</h1>
            <p>
              The phrase "decrypt MD5" is not quite accurate, as hashing works
              in only one direction. Instead, when reversing the MD5 hash to
              find the original input content it means comparing your hashed
              value against one of a big list (precomputed database) that
              contains such kind hashes with their corresponding inputs. These
              databases are massive (containing the precomputed hashes of
              billions of probable passwords) but once created, a quick lookup
              in most cases will bring you an answer immediately. If it is
              present in their records, then tools/services like, Hashcat and
              Cedian etc will help to find the original input.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Better Algorithms and Salting</h1>
            <p>
              Due to the vulnerabilities of MD5, it is important that you
              supplement security: Salting: Preappend each password with a
              unique, random sequence (salt) makes pre-computed hash database
              attacks unviable. As an example, if we salt the MD5 hash of
              "Password" with: plaintext Salt: 4*;df-A4+#1q:eD7 Composite:
              4*;df-A4+#1q:eD7dc647eb65e6711e155375218212b3964 Hash:
              7ff41d989745f57784e50d3e1630490a As a user logs in, the input
              password they pass is salted and then padded into hash as well -
              this resulting hashes are compared. Peppering: Something you do in
              addition to salting; a pepper is an additional static, secret
              string that exists for all users and remains unchanged. Using
              faster Algorithms: Even the likes of Bcrypt,Argon2 and PBKDF2 are
              designed to be computationally expensive, which explains Borgars's
              unjustifiable claim. These also include automatic salting to the
              algorithms.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">MD5 Encrypt Online Services</h1>
            <p>
              You can use one of many available tools online to encrypt your
              input into MD5 hash. Online tools for checksum/MD5 encryptionThese
              are useful if you only want to do one-time quick checks and/or
              doing simple applications as they can not be inserted directly
              from the server due to security errors. But for the more security
              wise there are highly recommended to go with a stronger hashing
              algorithms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MD5Converter;
