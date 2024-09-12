"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const experiences = [
  {
    logo: "/img/company/peak.png",
    title: "AI & Full-stack Developer",
    company: "Peak Financial Services",
    period: "Apr 2024 - Present",
    description:
      "Participating in the development of innovative Fintech solutions and AI capabilities.",
  },
  {
    logo: "/img/company/zensetup.png",
    title: "Full-stack Developer",
    company: "Zensetup Lacontrol Kft.",
    period: "Feb 2024 - Apr 2023",
    description:
      "Developed and implemented diverse software solutions including control systems, PLCs, HMIs, desktop applications, REST APIs, web applications, and an in-house ERP system, demonstrating versatility across multiple programming languages and frameworks.",
  },
  {
    logo: "/img/company/standup.avif",
    title: "ML & Backend Engineer",
    company: "StandupAI (Growth Engine Inc.)",
    period: "Aug 2022 - Nov 2023",
    description:
      "Developed and implemented ML models and recommender systems, contributing to a patent-pending solution.",
  },
  {
    logo: "/img/company/ie.png",
    title: "Embedded Developer",
    company: "IndustrieElektrik GmbH",
    period: "Jun 2018 - Aug 2020, Jun 2022 - Aug 2022",
    description:
      "Designed and developed embedded systems, showcasing versatility across different tech stacks.",
  },
];

const ExperienceItem = ({
  experience,
}: {
  experience: {
    logo: string;
    title: string;
    company: string;
    period: string;
    description: string;
  };
}) => {
  return (
    <motion.div
      className="mb-8 flex"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={
          "flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center m-2 border-2 border-gray-500"
        }
      >
        <motion.img
          src={experience.logo}
          alt={experience.company}
          className="w-12 h-12 rounded-full"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="ml-4 flex-grow pb-8 border-l-2 border-gray-500 pl-4 relative">
        <motion.h3
          className="text-xl font-bold"
          whileHover={{ color: "#10B981", x: 5 }}
        >
          {experience.title}
        </motion.h3>
        <p className="text-green-500">{experience.company}</p>
        <p className="text-sm text-gray-400">{experience.period}</p>
        <p className="mt-2">{experience.description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-6 text-green-500"># Experience</h2>
      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
