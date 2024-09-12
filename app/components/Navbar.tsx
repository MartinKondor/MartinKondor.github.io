"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#"
          className={`text-xl font-bold ${
            isScrolled ? "text-green-500" : "text-white"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          Martin Kondor
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
