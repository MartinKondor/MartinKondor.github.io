import React, { useMemo } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const generateRandomWaves = (count: number) => {
    const waves = [];
    const colors = ["204, 134, 51", "134, 51, 204", "51, 204, 134"];

    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      waves.push({
        y: Math.random() * 1000,
        duration: Math.random() * 20 + 10, // 10 to 30 seconds
        color: `rgba(${color}, ${Math.random() * 0.15 + 0.02})`,
        amplitude: Math.random() * 100 + 50, // 50 to 150 pixels
      });
    }
    return waves.sort((a, b) => a.y - b.y); // Sort by y to ensure proper layering
  };

  const waves = useMemo(() => generateRandomWaves(20), []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {waves.map((wave, index) => (
          <motion.path
            key={index}
            d={`M0,${wave.y} Q250,${wave.y - wave.amplitude} 500,${
              wave.y
            } T1000,${wave.y}`}
            fill="none"
            stroke={wave.color}
            strokeWidth="2"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ pathLength: 1, pathOffset: 1 }}
            transition={{
              duration: wave.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
