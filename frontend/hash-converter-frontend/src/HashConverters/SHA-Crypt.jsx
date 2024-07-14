import React from "react";
import HashForm from "./hashForm/HashForm";

function SHACrypt() {
  return (
    <div>
      <HashForm
        hashType="SHA-Crypt"
        hashTitle="SHA-Crypt Hash Converter"
      ></HashForm>
    </div>
  );
}

export default SHACrypt;
