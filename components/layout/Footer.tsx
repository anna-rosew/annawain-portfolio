import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-center">
        <h4 className="text-lg">
          This site was coded by <strong>Anna-Rose Wain</strong> and is{" "}
          <a
            href="https://github.com/anna-rosew/anna-rose-wain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            open-sourced on GitHub
          </a>{" "}
          | 2024
        </h4>
      </div>
    </div>
  );
};

export default Footer;
