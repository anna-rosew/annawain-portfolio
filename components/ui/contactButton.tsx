"use client";
import React from "react";
import { Button } from "./button";

const contactButton = () => {
  const copyEmail = () => {
    const emailAddress = "annarosewain9@gmail.com";

    const tempInput = document.createElement("input");
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    const button = document.getElementById("copyEmailButton");
    if (button) {
      button.innerHTML = `Copied ${emailAddress} to clipboard`;
    }
  };
  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        className="contact"
        id="copyEmailButton"
        onClick={copyEmail}
      >
        CONTACT ME
      </Button>
    </div>
  );
};

export default contactButton;
