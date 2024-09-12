"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const skills = [
  "AI",
  "Machine Learning",
  "Full-stack Development",
  "Python",
  "JavaScript/TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Docker",
];

const About = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-6 text-green-400"># About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            As a Software Engineer with a strong background in AI and Full-stack
            development, I&apos;m driven by the challenge of solving complex
            problems and creating innovative solutions.
          </p>
          <TypeAnimation
            sequence={[
              "My journey in tech has been marked by a constant pursuit of knowledge and a commitment to pushing the boundaries of what's possible.",
              1000,
            ]}
            wrapper="p"
            speed={70}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
            className="text-green-300"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#4ADE80",
                  color: "#1F2937",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
