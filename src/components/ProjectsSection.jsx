import { useState } from "react";
import {
  X,
  Sparkles,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export const ProjectsSection = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const softwareProjects = [

    {
      title: "AI-Powered Visual Testing Agent",
      year: "2026",

      tech: [
        "Python",
        "OpenCV",
        "SAM",
        "ControlNet",
        "LangChain",
        "LLMs",
      ],

      description:
        "AI-powered visual testing system for automated UI comparison and intelligent defect detection.",

      points: [
        "Integrated SAM for precise UI segmentation and ControlNet workflows for enhanced visual understanding.",

        "Built OCR and LLM-powered pipelines to detect layout inconsistencies and visual regressions automatically.",

        "Generated intelligent QA reports to reduce manual testing effort.",
      ],
    },

    {
      title: "LangChain-Based AI Chatbot with RAG",
      year: "2026",

      tech: [
        "Python",
        "LangChain",
        "Gemini API",
        "FAISS",
      ],

      description:
        "Context-aware AI chatbot using Retrieval-Augmented Generation.",

      points: [
        "Built vector embedding and retrieval pipelines.",

        "Implemented conversational memory and prompt engineering.",

        "Improved response quality using RAG workflows.",
      ],
    },

    {
      title: "AI Video Sort Generator",
      year: "2025",

      tech: [
        "Next.js",
        "React",
        "Neon",
        "AI",
      ],

      description:
        "AI-powered video categorization and sorting platform.",

      points: [
        "Automated video classification workflows.",

        "Integrated scalable metadata storage systems.",

        "Optimized frontend rendering and responsiveness.",
      ],
    },

    {
      title: "Personal Portfolio Website",
      year: "2026",

      tech: [
        "React",
        "TailwindCSS",
        "Framer Motion",
      ],

      description:
        "Modern animated developer portfolio with glassmorphism UI.",

      points: [
        "Built responsive layouts and animated interactions.",

        "Designed recruiter-focused UI/UX experience.",

        "Implemented modern design systems and transitions.",
      ],
    },

    {
      title: "Banking Data Analytics Project",
      year: "2025",

      tech: [
        "MySQL",
        "Power BI",
        "Analytics",
      ],

      description:
        "Large-scale banking analytics and fraud detection system.",

      points: [
        "Processed 100k+ records for analytical insights.",

        "Created KPI dashboards and reporting systems.",

        "Improved visualization and operational tracking.",
      ],
    },

    {
      title: "Car Rental Website",
      year: "2024",

      tech: [
        "React",
        "Node.js",
        "MongoDB",
      ],

      description:
        "Full-stack vehicle booking and rental platform.",

      points: [
        "Implemented authentication and booking systems.",

        "Integrated Stripe payment workflows.",

        "Built responsive admin management dashboards.",
      ],
    },
  ];

  const hardwareProjects = [

    {
      title: "Smart Safety Helmet",
      year: "2023",

      tech: [
        "Arduino",
        "MQ-2",
        "MPU6050",
      ],

      description:
        "IoT-enabled smart helmet for accident and gas detection.",

      points: [
        "Integrated gas and motion sensors for safety monitoring.",

        "Built automated emergency alert workflows.",

        "Improved real-time environmental hazard detection.",
      ],
    },

    {
      title: "Automated Test Tube Holder",
      year: "2023",

      tech: [
        "Arduino",
        "IR Sensors",
      ],

      description:
        "Automated laboratory test tube handling prototype.",

      points: [
        "Built sensor-driven automated positioning system.",

        "Reduced manual intervention in laboratory workflows.",

        "Focused on low-cost and safety-oriented automation.",
      ],
    },
  ];

  return (

    <section
      id="projects"
      className="py-28 px-4 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_60%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-primary uppercase tracking-[0.25em] text-sm font-medium mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Interactive showcase of AI systems, software
            applications, and hardware projects built through
            experimentation and real-world problem solving.
          </p>

        </div>

        {/* SOFTWARE PROJECTS */}
        <div className="mb-24">

          <div className="flex items-center gap-3 mb-10">

            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
              <Sparkles className="text-primary" size={22} />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Software & AI Projects
            </h3>

          </div>

          {/* Floating Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {softwareProjects.map((project, index) => (

              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className="
                  group relative text-left
                  rounded-[32px]
                  overflow-hidden
                  border border-white/10
                  bg-black/40 backdrop-blur-2xl
                  p-7 min-h-[260px]
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-primary/40
                  hover:shadow-[0_0_60px_rgba(139,92,246,0.18)]
                "
              >

                {/* Glow Effect */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_65%)]
                  "
                />

                {/* Floating Number */}
                <div
                  className="
                    absolute top-5 right-5
                    text-5xl font-bold
                    text-white/5
                  "
                >
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="relative z-10">

                  <span
                    className="
                      px-3 py-1 rounded-full
                      text-xs font-medium
                      bg-primary/10 text-primary
                      border border-primary/20
                    "
                  >
                    {project.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-5 mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium">

                    Explore Project

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

        {/* HARDWARE PROJECTS */}
        <div>

          <div className="flex items-center gap-3 mb-10">

            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
              <Cpu className="text-primary" size={22} />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Hardware Projects
            </h3>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {hardwareProjects.map((project, index) => (

              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className="
                  group relative text-left
                  rounded-[32px]
                  overflow-hidden
                  border border-white/10
                  bg-black/40 backdrop-blur-2xl
                  p-7 min-h-[240px]
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-primary/40
                  hover:shadow-[0_0_60px_rgba(139,92,246,0.18)]
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_65%)]
                  "
                />

                <div className="relative z-10">

                  <span
                    className="
                      px-3 py-1 rounded-full
                      text-xs font-medium
                      bg-primary/10 text-primary
                      border border-primary/20
                    "
                  >
                    {project.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-5 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-sm font-medium">

                    Explore Project

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

        {/* POPUP MODAL */}
        {selectedProject && (

          <div
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/70 backdrop-blur-md
              px-4
              animate-in fade-in duration-300
            "
          >

            <div
              className="
                relative w-full max-w-2xl
                rounded-[36px]
                border border-primary/20
                bg-[#09090f]/95
                backdrop-blur-2xl
                p-8 md:p-10
                shadow-[0_0_80px_rgba(139,92,246,0.2)]
                animate-in zoom-in-95 duration-300
              "
            >

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  absolute top-5 right-5
                  p-2 rounded-full
                  bg-white/5 hover:bg-white/10
                  transition-colors
                "
              >
                <X size={18} className="text-white/70" />
              </button>

              {/* Year */}
              <span
                className="
                  px-4 py-1.5 rounded-full
                  text-xs font-medium
                  bg-primary/10 text-primary
                  border border-primary/20
                "
              >
                {selectedProject.year}
              </span>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-5">
                {selectedProject.title}
              </h2>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">

                {selectedProject.tech.map((item, idx) => (

                  <span
                    key={idx}
                    className="
                      px-4 py-1.5 rounded-full
                      text-sm
                      bg-white/5
                      border border-white/10
                      text-white/70
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Points */}
              <ul className="space-y-5">

                {selectedProject.points.map((point, idx) => (

                  <li
                    key={idx}
                    className="
                      flex items-start gap-4
                      text-white/75 leading-relaxed
                    "
                  >

                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primary shrink-0" />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        )}

      </div>
    </section>
  );
};