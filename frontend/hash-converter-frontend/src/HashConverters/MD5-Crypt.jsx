import React from "react";
import HashForm from "./hashForm/HashForm";

function MD5Crypt() {
  return (
    <div>
      <HashForm
        hashType="MD5-Crypt"
        hashTitle="MD5-Crypt Hash Converter"
      ></HashForm>
    </div>
  );
}

export default MD5Crypt;
