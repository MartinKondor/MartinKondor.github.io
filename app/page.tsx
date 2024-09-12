"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Education from "./components/Education";

interface MousePosition {
  x: number;
  y: number;
}

interface MouseSpeed {
  speed: number;
  timestamp: number;
}

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [mouseSpeed, setMouseSpeed] = useState<MouseSpeed>({
    speed: 0,
    timestamp: Date.now(),
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - mouseSpeed.timestamp;
      const dx = e.clientX - mousePosition.x;
      const dy = e.clientY - mousePosition.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      setMousePosition({ x: e.clientX, y: e.clientY });
      setMouseSpeed({ speed, timestamp: now });
    },
    [mousePosition, mouseSpeed]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove]);

  const getGradientShape = (): string => {
    const baseSize = 200;
    const sizeVariation = mouseSpeed.speed * 2;
    const size1 = baseSize + sizeVariation;
    const size2 = baseSize - sizeVariation;
    return `${size1}px ${size2}px ${size2}px ${size1}px`;
  };

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden flex flex-col">
      <AnimatedBackground />

      {/* Animated gradient background */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(${getGradientShape()} at ${
            mousePosition.x
          }px ${mousePosition.y}px, rgba(16, 185, 129, 0.3), transparent)`,
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Mouse shadow */}
      <div
        className="fixed w-20 h-20 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)",
          boxShadow: "0 0 20px 10px rgba(16, 185, 129, 0.1)",
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center relative z-20"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="https://avatars.githubusercontent.com/u/25453575?v=4"
            alt="Martin Kondor"
            className="rounded-full w-40 h-40 object-cover border-4 border-green-500"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4"
          whileHover={{ scale: 1.05, color: "#10B981" }}
        >
          Martin Kondor
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl mb-8"
          whileHover={{ scale: 1.05, color: "#10B981" }}
        >
          AI & Full-stack Developer
        </motion.h2>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContent}
        >
          Explore My Work <FaArrowDown className="inline ml-2" />
        </motion.button>
      </motion.section>

      {/* Main content */}
      <main className="container mx-auto px-4 py-10 relative z-20 flex-grow">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-52 mb-52"
        >
          <About />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-52 mb-52"
        >
          <Projects />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-52 mb-52"
        >
          <Experience />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-52 mb-52"
        >
          <Education />
        </motion.section>
      </main>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowUp />
      </motion.button>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 z-50"
        style={{ scaleX: springScrollYProgress, transformOrigin: "0%" }}
      />

      <Footer />
    </div>
  );
};

export default HomePage;
