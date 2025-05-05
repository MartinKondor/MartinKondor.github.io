"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/MartinKondor" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/martin-kondor" },
  { icon: FaEnvelope, url: "mailto:martinkondor@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="py-8 mt-auto mb-[-50px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="text-green-500 text-2xl" />
            </motion.a>
          ))}
        </div>
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Martin Kondor. All rights reserved.
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full"
      >
        <motion.path
          fill="#10B981"
          fillOpacity="0.2"
          d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,213.3C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,213.3C672,213,768,203,864,170.7C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,170.7C672,171,768,181,864,165.3C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
          }}
        />
      </svg>
    </footer>
  );
};

export default Footer;
