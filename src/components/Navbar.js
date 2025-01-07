import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-primary">Abhimanyu Raj</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/about" className="hover:text-secondary">About</Link>
          <Link to="/projects" className="hover:text-secondary">Projects</Link>
          <Link to="/contact" className="hover:text-secondary">Contact</Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
