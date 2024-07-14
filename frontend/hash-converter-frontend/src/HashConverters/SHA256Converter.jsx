import React from "react";
import HashForm from "./hashForm/HashForm";

function SHA256Converter() {
  return (
    <div>
      <HashForm
        hashType="SHA256"
        hashTitle="SHA256 Hash Converter"
      ></HashForm>
    </div>
  );
}

export default SHA256Converter;
