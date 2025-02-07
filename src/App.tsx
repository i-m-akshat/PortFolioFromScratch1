import React, { useEffect, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/cards";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import {
  GithubLogo,
  LinkedinLogo,
  FileText,
  Briefcase,
  Buildings,
  User,
  Code,
  Wrench,
  EnvelopeSimple,
  Moon,
} from "@phosphor-icons/react";
import ContactForm from "./components/ContactForm";

function App() {
  const projects = [
    {
      title: "Securities Exchange Platform",
      description:
        "As a WebMethods Developer, I focused on enhancing integration and data exchange capabilities. Implemented robust solutions for secure financial transactions and real-time data processing.",
      link: "https://adx.ae",
    },
    {
      title: "Phonebook",
      description:
        "Created a phonebook with Django REST framework, featuring user registration, login, contact management (add, list, search), spam marking, email notifications, and PDF downloads.",
      link: "https://github.com/LuC-9/truecaller-clone",
    },
    {
      title: "Arduino CLI Docker",
      description:
        "A CLI tool to compile Arduino codes on the cloud without need of an Arduino board. Enables remote development and testing of Arduino projects with cloud-based compilation.",
      link: "https://github.com/LuC-9/Arduino-cli-docker",
    },
    {
      title: "City Management System",
      description:
        "A complaint management and resolution dashboard for a smart city utilising REST, Spring, JWT, MySQL and Angular. Developed during internship under Infosys.",
      link: "#",
    },
  ];
  const experiences = [
    {
      title: "Engineer",
      company: "Nagarro",
      period: "01/2024 – Present",
      location: "Gurugram, India",
      description: [
        "Developed and optimized 250+ APIs for seamless system integration",
        "Delivered scalable backend solutions to enhance performance and reliability",
        "Collaborated with teams to ensure efficient data flow across platforms",
      ],
    },
    {
      title: "Associate Engineer",
      company: "Nagarro",
      period: "07/2022 – 12/2023",
      location: "Gurugram, India",
      description: [
        "Developed expertise in Java and Spring Boot for backend development",
        "Managed codebases using Git and version control systems",
        "Worked with backend technologies, including Node.js, to build and integrate applications",
      ],
    },
    {
      title: "Systems Engineer Intern",
      company: "Infosys",
      period: "02/2022 – 05/2022",
      location: "Mysore, India",
      description: [
        "Developed a system for managing complaints across city departments with role-based access",
        "Implemented solution for Police, Healthcare, Education, and Transport departments",
        "Tech stack: Java, Spring Boot, Maven, Angular 10, REST APIs, MySQL, Git",
      ],
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, [updateCursorPosition]);

  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.getElementById("hero-image");
      const navImage = document.getElementById("nav-image");
      const scrollPosition = window.scrollY;
      const heroImageRect = heroImage?.getBoundingClientRect();
      const navImageRect = navImage?.getBoundingClientRect();

      if (heroImageRect && navImageRect) {
        const progress = Math.min(Math.max(scrollPosition / 300, 0), 1);
        setIsScrolled(progress > 0.1);

        // Calculate positions
        const startX = heroImageRect.left + heroImageRect.width / 2;
        const startY = heroImageRect.top + heroImageRect.height / 2;
        const endX = navImageRect.left + navImageRect.width / 2;
        const endY = navImageRect.top + navImageRect.height / 2;

        // Use cubic-bezier easing for smoother animation
        const easeProgress = progress * (2 - progress); // Ease out quad

        // Calculate current position with easing
        const currentX = startX + (endX - startX) * easeProgress;
        const currentY = startY + (endY - startY) * easeProgress;
        const scale = 1 - 0.7 * easeProgress; // Scale from 1 to 0.3

        heroImage.style.transition =
          "transform 0.1s ease-out, opacity 0.1s ease-out";
        heroImage.style.transform = `translate(${currentX - startX}px, ${currentY - startY}px) scale(${scale})`;
        heroImage.style.opacity = `${1 - easeProgress}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up", "opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-5");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      element.classList.add("opacity-0", "translate-y-5");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <Toaster position="top-right" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50 px-6 py-3 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img
            id="nav-image"
            src="/profile.jpg"
            alt="Profile"
            className={`w-10 h-10 rounded-full transition-all duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hover:text-red-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo className="w-5 h-5 hover:text-red-500 hover:scale-110 transition-all duration-200" />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo className="w-5 h-5 hover:text-red-500 hover:scale-110 transition-all duration-200" />
              </a>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
                <Moon className="w-5 h-5" />
              </button>
              <a
                href="/Mishra_Aarsh.pdf"
                className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 animate-fade-in">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              id="hero-image"
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full absolute top-0 left-0 transition-all duration-300 ease-in-out object-cover"
              style={{ transformOrigin: "center center" }}
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Aarsh Mishra</h1>
          <p className="text-xl text-gray-400 mb-8">Software Engineer</p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 hover:scale-105 transition-all duration-200"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/5" data-scroll-section>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 className="text-4xl font-bold mb-12 text-center">
              About Me
            </motion.h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                    <p className="text-muted-foreground">
                      I am a passionate Full Stack Developer with expertise in
                      modern web technologies. My journey in tech began with a
                      curiosity for creating impactful digital experiences, and
                      has evolved into a professional career building robust
                      applications.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
                    <p className="text-muted-foreground">
                      I specialize in building full-stack web applications using
                      modern technologies like React, Node.js, and TypeScript.
                      I'm passionate about creating clean, efficient, and
                      user-friendly solutions that solve real-world problems.
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20" data-scroll-section>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="bg-primary/10 p-6 rounded-full w-fit mx-auto mb-12"
          >
            <Building2 className="w-12 h-12 text-primary" />
          </motion.div>
          <div className="grid gap-8 max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="group hover:shadow-xl hover:scale-105 hover:bg-primary/5 transition-all duration-300 transform-gpu">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-full bg-primary/10 text-primary"
                      >
                        <Building2 className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex justify-between items-center">
                          <p className="text-muted-foreground">
                            {experience.company}
                          </p>
                          <p className="text-muted-foreground text-right">
                            {experience.period} • {experience.location}
                          </p>
                        </div>
                        <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                          {experience.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Education Section*/}
      <section className="py-20 bg-accent/5" data-scroll-section>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="bg-primary/10 p-6 rounded-full w-fit mx-auto mb-12"
          >
            <GraduationCap className="w-12 h-12 text-primary" />
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group hover:shadow-xl hover:scale-105 hover:bg-primary/5 transition-all duration-300 transform-gpu">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-full bg-primary/10 text-primary"
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        Bachelor of Technology
                      </h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg text-muted-foreground">
                            Computer Science and Engineering
                          </p>
                          <p className="text-muted-foreground">
                            PSIT College of Engineering
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground">
                            July 2018 - July 2022
                          </p>
                          <p className="text-muted-foreground">Kanpur, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-accent/5" data-scroll-section>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="h-full"
              >
                <Card className="flex flex-col h-full hover:shadow-xl hover:scale-105 hover:bg-primary/5 transition-all duration-300 transform-gpu min-h-[250px] justify-between">
                  <CardHeader>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <Button variant="outline" asChild className="w-fit">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll flex items-center justify-center gap-4">
            <Wrench
              size={40}
              weight="duotone"
              className="text-red-500 animate-pulse"
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-red-500" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  React
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Vue.js
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-red-500" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Express
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="bg-[#1a0f0f] p-8 rounded-lg shadow-xl hover-scale animate-on-scroll">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-red-500" />
                Other
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Git
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  Docker
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  AWS
                </span>
                <span className="px-3 py-1 bg-red-900/50 rounded-full text-sm hover:bg-red-800/50 transition-colors duration-200">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a0404]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll">
            Get in Touch
          </h2>
          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0404] py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aarsh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
