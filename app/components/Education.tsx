"use client";
import React from "react";
import { motion } from "framer-motion";

const educations = [
  {
    logo: "/img/edu/pe.jpg",
    title: "Computer Science, MSc",
    company: "University of Pannonia",
    period: "Sep 2024 - Present",
    description:
      "I am attempting to determine whether I can make P equal to NP. If you know the answer, please let me know. :)",
  },
  {
    logo: "/img/edu/pe.jpg",
    title: "Computer Science Engineering, BSc",
    company: "University of Pannonia",
    period: "Sep 2020 - Jan 2024",
    description: `Grade: Excellent with Honors. I attended the Faculty Scientific Student Circle (TDK), where I was awarded 2nd place for my research on "Hungarian fake news detection using neural networks". I was also honored to receive the "Dr. Adrienn Skrop Memorial" and the "PEN - Silver pen" award.`,
  },
];

const EducationItem = ({
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

const Education = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-6 text-green-500"># Education</h2>
      <div className="relative">
        {educations.map((experience, index) => (
          <EducationItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Education;
