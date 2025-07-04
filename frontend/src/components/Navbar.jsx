import React from "react";
import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold tracking-wide">
          URL Performance Analyzer
        </span>
      </div>
      {/* Add nav links here if needed */}
    </nav>
  );
};

export default Navbar;
