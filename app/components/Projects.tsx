"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    image: "/img/projects/fn.png",
    title: "Efficient Fake News Detection Models",
    description:
      "Developed innovative models for detecting fake news in Hungarian and multilingual contexts, showcasing a commitment to combating misinformation.",
    technologies: ["Python", "NLP", "Machine Learning"],
  },
  {
    image: "/img/projects/standup.png",
    title: "Generative AI Workflow Service",
    description:
      "Contributed to a patent-pending project for matching generative AI workflows to customers, demonstrating innovation in AI applications.",
    technologies: ["AI", "Python", "Backend Development"],
  },
  {
    image: "/img/projects/movie-rec.png",
    title: "Movie Recommender",
    description:
      "Engineered a sophisticated movie recommendation engine that analyzes user preferences to suggest personalized film choices based on individual viewing history and taste profiles.",
    technologies: ["AI", "Recommender Systems", "Frontend Development"],
  },
];

const ProjectCard = ({
  project,
}: {
  project: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
  };
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="w-full h-80 [perspective:1000px]"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        <div className="absolute w-full h-full bg-gray-800 rounded-lg p-6 [backface-visibility:hidden]">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded mb-4"
          />
        </div>
        <div className="absolute w-full h-full bg-green-600 rounded-lg p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-green-700 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-6 text-green-500"># Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ y }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
