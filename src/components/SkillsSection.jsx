import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "C++", level: 75, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "HTML", level: 90, category: "languages" },
  { name: "CSS", level: 90, category: "languages" },

  // Frontend & Frameworks
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 75, category: "frontend" },
  { name: "Flask", level: 75, category: "frontend" },
  { name: "FastAPI", level: 80, category: "frontend" },

  // AI / ML / LLM
  { name: "Machine Learning", level: 85, category: "ai" },
  { name: "Artificial Intelligence", level: 90, category: "ai" },
  { name: "LangChain", level: 85, category: "ai" },
  { name: "RAG Pipelines", level: 85, category: "ai" },
  { name: "Prompt Engineering", level: 90, category: "ai" },
  { name: "LLM Integration", level: 85, category: "ai" },
  { name: "OpenCV", level: 85, category: "ai" },
  { name: "Computer Vision", level: 80, category: "ai" },
  { name: "TensorFlow", level: 75, category: "ai" },
  { name: "PyTorch", level: 75, category: "ai" },
  { name: "SAM", level: 75, category: "ai" },
  { name: "ControlNet", level: 70, category: "ai" },

  // Data & Analytics
  { name: "Pandas", level: 90, category: "data" },
  { name: "NumPy", level: 85, category: "data" },
  { name: "Power BI", level: 85, category: "data" },
  { name: "Tableau", level: 75, category: "data" },
  { name: "Matplotlib", level: 80, category: "data" },
  { name: "Data Visualization", level: 85, category: "data" },
  { name: "Feature Engineering", level: 80, category: "data" },
  { name: "Statistical Analysis", level: 75, category: "data" },

  // Backend & Databases
  { name: "MySQL", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "API Integration", level: 85, category: "backend" },
  { name: "Workflow Automation", level: 80, category: "backend" },

  // Tools & Cloud
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "AWS (EC2, S3)", level: 80, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Jupyter Notebook", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Jira", level: 75, category: "tools" },

  // Core CS Subjects
  { name: "Data Structures & Algorithms", level: 80, category: "core" },
  { name: "DBMS", level: 85, category: "core" },
  { name: "Operating Systems", level: 75, category: "core" },
  { name: "OOPS", level: 85, category: "core" },
  { name: "Software Engineering", level: 80, category: "core" },
  { name: "SDLC", level: 75, category: "core" },
  { name: "Agile Methodologies", level: 80, category: "core" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "ai",
  "data",
  "backend",
  "tools",
  "core",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Expertise
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical Skills &{" "}
            <span className="text-primary">
              Core Competencies
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A blend of software engineering, AI/ML, full-stack
            development, data analytics, and modern development
            tools built through internships and real-world projects.
          </p>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm capitalize transition-all duration-300 border",

                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-secondary/60 border-white/10 text-foreground hover:border-primary/40 hover:bg-secondary"
              )}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredSkills.map((skill, key) => (

            <div
              key={key}
              className="
                bg-card/60 backdrop-blur-lg
                border border-white/10
                p-5 rounded-2xl
                transition-all duration-300
                hover:border-primary/30
                hover:-translate-y-1
                shadow-[0_0_25px_rgba(139,92,246,0.08)]
              "
            >

              {/* Skill Header */}
              <div className="flex justify-between items-center mb-3">

                <h3 className="font-medium text-white">
                  {skill.name}
                </h3>

                <span className="text-sm text-primary font-medium">
                  {skill.level}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/40 h-2 rounded-full overflow-hidden">

                <div
                  className="
                    bg-primary h-2 rounded-full
                    origin-left
                    animate-[grow_1.5s_ease-out]
                  "
                  style={{ width: `${skill.level}%` }}
                />

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};