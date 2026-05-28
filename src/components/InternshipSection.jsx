import { Calendar, MapPin, Briefcase } from "lucide-react";

const internships = [
  {
    id: 1,
    company: "Abbott Healthcare Pvt. Ltd.",
    position: "Software Developer Intern",
    duration: "May 2025 – Jul 2025",
    location: "Mumbai, India",

    points: [
      "Developed reusable UI components for enterprise-scale web applications, improving maintainability and consistency across multiple pages.",

      "Collaborated with QA and backend teams to validate workflows, resolve bugs, and enhance user experience across production systems.",

      "Worked in an agile development environment while contributing to scalable frontend implementations and workflow optimization.",
    ],

    skills: [
      "React",
      "JavaScript",
      "UI Development",
      "Frontend Engineering",
      "Agile Workflow",
    ],
  },

  {
    id: 2,
    company: "Bellurbis Technologies Pvt. Ltd.",
    position: "Data Science Intern",
    duration: "Jul 2025 – Oct 2025",
    location: "Gurugram (Remote)",

    points: [
      "Performed data preprocessing, feature engineering, and analysis using Python, Pandas, and Scikit-learn on real-world datasets.",

      "Built and optimized machine learning models to improve forecasting accuracy and generate actionable business insights.",

      "Created analytical dashboards and reports using Power BI and Matplotlib to support data-driven decision-making.",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Power BI",
      "Data Analytics",
    ],
  },

  {
    id: 3,
    company: "ApMoSys Technologies Pvt. Ltd.",
    position: "AI & ML Intern",
    duration: "Mar 2026 – Present",
    location: "Mumbai, India",

    points: [
      "Developing an AI-powered visual testing agent for automated UI comparison, defect detection, and intelligent report generation.",

      "Building context-aware chatbot workflows using LangChain, LLM APIs, and prompt engineering techniques.",

      "Working with OpenCV, OCR, and AI pipelines to automate testing workflows and reduce manual QA effort.",
    ],

    skills: [
      "OpenCV",
      "LangChain",
      "LLMs",
      "Computer Vision",
      "Python",
      "AI Automation",
    ],
  },
];

export const InternshipSection = () => {
  return (
    <section id="internships" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
            Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Internship <span className="text-primary">Journey</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hands-on experience across software engineering, machine learning,
            AI systems, and enterprise application development through
            impactful internships and real-world projects.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Timeline Line */}
          <div
            className="
              hidden md:block
              absolute left-[20px] top-0 bottom-0
              w-[2px] bg-primary/20
            "
          />

          <div className="space-y-8">

            {internships.map((internship) => (

              <div
                key={internship.id}
                className="
                  relative md:ml-24
                  rounded-2xl p-7
                  bg-black/50 backdrop-blur-xl
                  border border-white/10
                  hover:border-primary/30
                  transition-all duration-300
                  hover:-translate-y-1
                  shadow-[0_0_35px_rgba(139,92,246,0.12)]
                "
              >

                {/* Timeline Icon */}
                <div
                  className="
                    hidden md:flex
                    absolute -left-[84px] top-8
                    items-center justify-center
                    w-10 h-10 rounded-full
                    bg-primary text-white
                    shadow-[0_0_25px_rgba(139,92,246,0.45)]
                  "
                >
                  <Briefcase size={18} />
                </div>

                {/* Header */}
                <div className="mb-5">

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {internship.position}
                      </h3>

                      <p className="text-primary font-medium mt-1">
                        {internship.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/60">

                      <div className="flex items-center gap-2">
                        <Calendar size={15} />
                        {internship.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        {internship.location}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Experience Points */}
                <ul className="space-y-3 mb-6">

                  {internship.points.map((point, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />

                      <span>{point}</span>
                    </li>

                  ))}

                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">

                  {internship.skills.map((skill, index) => (

                    <span
                      key={index}
                      className="
                        px-4 py-1.5 rounded-full text-xs
                        bg-primary/10 text-primary
                        border border-primary/20
                        hover:bg-primary/20
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
};