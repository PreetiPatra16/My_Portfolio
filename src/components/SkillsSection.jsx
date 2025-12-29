import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Languages
  { name: "Python", level: 80, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "Java", level: 60, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "JavaScript", level: 85, category: "languages" },

  // Frontend & Frameworks
  { name: "HTML & CSS", level: 90, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },

  // Backend & Databases
  { name: "Flask", level: 70, category: "backend" },
  { name: "Spring Boot", level: 65, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Data & Analytics
  { name: "Pandas & NumPy", level: 80, category: "data" },
  { name: "Power BI", level: 80, category: "data" },
  { name: "Tableau", level: 70, category: "data" },
  { name: "Matplotlib", level: 75, category: "data" },
  { name: "Jupyter Notebook", level: 85, category: "data" },

  // Tools & Cloud
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "AWS (EC2, S3)", level: 75, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "Linux", level: 70, category: "tools" },

  // Core CS Subjects
  { name: "Data Structures & Algorithms", level: 80, category: "core" },
  { name: "DBMS", level: 80, category: "core" },
  { name: "Operating Systems", level: 75, category: "core" },
  { name: "OOPS", level: 80, category: "core" },
  { name: "Software Engineering", level: 75, category: "core" },
  { name: "Machine Learning", level: 80, category: "core" },
  { name: "Artificial Intelligence", level: 85, category: "core" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "data",
  "tools",
  "core",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           Technical Skills <span className="text-primary">& Core Competencies</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
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
              className="bg-card p-5 rounded-lg shadow-xs card-hover"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
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
