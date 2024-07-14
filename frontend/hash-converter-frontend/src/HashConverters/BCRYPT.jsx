import React from "react";
import HashForm from "./hashForm/HashForm";

function BCRYPT() {
  return (
    <div>
      <HashForm hashType="BCRYPT" hashTitle="BCRYPT Hash Converter"></HashForm>
    </div>
  );
}

export default BCRYPT;
