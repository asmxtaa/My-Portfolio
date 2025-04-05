"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import AnimatedCursor from "./components/AnimatedCursor"; // custom cursor

const socialLinks = [
  { icon: Github, href: "https://github.com/asmxtaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/asmita-mandal-b680b627a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mandalasmita2024@gmail.com", label: "Email" },
];

const projects = [
  {
    title: "BeatsFinds - Song Genre Classifier",
    description: "Developed a machine learning model achieving 68% accuracy in genre prediction, implementing efficient pre-processing pipelines for feature engineering.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Data Processing"],
    githubUrl: "https://github.com/asmxtaa/DAA_song_genre",
  },
  {
    title: "NASA Astronomy Website",
    description: "Created a dynamic website to display Mars weather and asteroid data, optimizing data-fetching performance by 30%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    technologies: ["JavaScript", "NASA API", "React", "Data Visualization"],
    githubUrl: "https://github.com/asmxtaa/Nasa-web-project",
  },
  {
    title: "Netflix Data Analysis Dashboard",
    description: "Developed an interactive Power BI dashboard analyzing Netflix content, creating visual reports on genre distribution, release trends, and user engagement patterns.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0",
    technologies: ["Power BI", "SQL", "Data Analysis", "Business Intelligence"],
    githubUrl: "https://github.com/asmxtaa/Netflix-Analysis",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <AnimatedCursor />

      {/* Hero Section */}
      <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Asmita Mandal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Greetings! I build stunning web interfaces ✨
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center md:justify-start gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg ring-4 ring-primary hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/asmita.jpg"
            alt="Asmita Mandal"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View All Projects
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
