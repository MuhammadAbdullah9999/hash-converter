import React from "react";
import HashForm from "./hashForm/HashForm";

function SHA1Converter() {
  return (
    <div>
      <HashForm
        hashType="SHA1"
        hashTitle="SHA1 Hash Converter"
      ></HashForm>
    </div>
  );
}

export default SHA1Converter;
