import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-4 flex items-center justify-center mt-auto shadow-inner">
      <span className="text-sm">
        © {new Date().getFullYear()} | Developed by
        <a
          href="https://github.com/Nabin2060/URL-Performance-Analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-blue-400 hover:underline"
        >
          Nabin Adhikari
        </a>
      </span>
    </footer>
  );
};

export default Footer;
