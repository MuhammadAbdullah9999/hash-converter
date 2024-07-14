import React from "react";
import HashForm from "./hashForm/HashForm";

function SHA512Converter() {
  return (
    <div>
      <HashForm
        hashType="SHA512"
        hashTitle="SHA512 Hash Converter"
      ></HashForm>
    </div>
  );
}

export default SHA512Converter;
