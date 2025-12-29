import { Calendar, MapPin } from "lucide-react";

const internships = [
  {
    id: 1,
    company: "Abbott Healthcare Pvt. Ltd.",
    position: "Intern Software Developer",
    duration: "May 2025 – Jul 2025",
    location: "Mumbai",
    points: [
      "Worked with Adobe Experience Manager (AEM) on enterprise web applications, focusing on reusable components and structured content authoring.",
      "Collaborated with development, QA, and content teams to ensure component consistency and smooth page-level integrations.",
      "Contributed to scalable and maintainable UI components used across multiple enterprise pages.",
    ],
    skills: [
      "Adobe Experience Manager (AEM)",
      "Reusable Components",
      "Content Authoring",
      "Enterprise Web Applications",
    ],
  },
  {
    id: 2,
    company: "Bellurbis Technologies Pvt. Ltd.",
    position: "Data Science Intern",
    duration: "Jul 2025 – Oct 2025",
    location: "Gurugram (Remote)",
    points: [
      "Performed data preprocessing and feature engineering using Python, Pandas, and NumPy on real-world datasets.",
      "Built and fine-tuned predictive machine learning models to improve forecasting accuracy and insights.",
      "Created interactive dashboards and visual reports using Power BI and Matplotlib for stakeholders.",
    ],
    skills: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Power BI",
      "Data Visualization",
    ],
  },
];

export const InternshipSection = () => {
  return (
    <section id="internships" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Internship <span className="text-primary">Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-sm">
          Industry experience gained through hands-on internships, contributing
          to real-world software and data-driven projects.
        </p>

        <div className="space-y-6">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="
                relative rounded-xl p-6
                bg-black/70 backdrop-blur-xl
                border border-white/10
                transition-all duration-300
              "
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-primary border-4 border-background" />

              <div className="ml-6">

                {/* Header */}
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {internship.position}
                  </h3>

                  {/* 🔑 FIXED COLOR LOGIC */}
                  <p className="font-medium text-sm text-white dark:text-primary">
                    {internship.company}
                  </p>

                  <div className="flex justify-center gap-6 text-xs text-white/60 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {internship.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {internship.location}
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc pl-4 space-y-1 text-sm text-white/80 mb-4 text-left">
                  {internship.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {internship.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 text-xs rounded-full
                        border
                        text-white dark:text-primary
                        border-white/30 dark:border-primary/40
                        bg-white/10 dark:bg-primary/15
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
