import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const projects = [
  {
    title: "Securities Exchange Platform",
    description:
      "Enhanced integration and data exchange capabilities, implementing robust solutions for secure financial transactions and real-time data processing.",
    tech: ["WebMethods", "Integration"],
    link: "https://adx.ae",
    linkLabel: "Live Demo"
  },
  {
    title: "Phonebook",
    description:
      "A phonebook app with Django REST framework, supporting user registration, login, contact management, spam marking, email notifications, and PDF downloads.",
    tech: ["Django", "REST API"],
    link: "https://github.com/yourusername/phonebook",
    linkLabel: "GitHub"
  },
  {
    title: "Arduino CLI Docker",
    description:
      "A CLI tool to compile Arduino code on the cloud, eliminating the need for a physical Arduino board, enabling remote development and testing.",
    tech: ["Arduino", "CLI"],
    link: "https://github.com/yourusername/arduino-cli",
    linkLabel: "GitHub"
  },
  {
    title: "City Management System",
    description:
      "A complaint management and resolution dashboard for a smart city, developed during an Infosys internship. Built using REST, Spring Boot, JWT, MySQL, and Angular.",
    tech: ["Spring Boot", "Angular", "MySQL"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            <Code2 className="w-8 h-8 text-red-500" />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-red-500/50 rounded-full text-sm text-white hover:bg-red-400/50 transition-colors duration-200"
                  >
                    {project.linkLabel}
                  </a>
                )}
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-red-500/50 rounded-full text-sm text-white hover:bg-red-400/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
