import React from "react";
import logo from "../assets/react.svg";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`w-full flex items-center justify-between px-6 py-3 shadow-md ${
        theme === "dark"
          ? "bg-[#23232a] text-gray-100"
          : "bg-blue-700 text-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold tracking-wide">
          URL Performance Analyzer
        </span>
      </div>
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${
          theme === "dark"
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-blue-800 hover:bg-blue-600"
        } transition-colors`}
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? (
          // Moon icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </svg>
        ) : (
          // Sun icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M6.34 6.34l-.71-.71"
            />
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth={2}
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
