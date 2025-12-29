export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Video Sort Generator",
      year: "2025",
      tech: "Next.js, React, TailwindCSS, AI, Clerk, Neon",
      points: [
        "Engineered an AI-powered video sorting platform that classified 200+ videos, reducing manual effort by 65%.",
        "Integrated Clerk authentication and Neon serverless PostgreSQL backend, supporting 10k+ metadata queries.",
        "Optimized frontend rendering using React and TailwindCSS, improving user experience scores by 40%.",
      ],
    },
    {
      title: "End-to-End Data Analytics Project — Banking Domain",
      year: "2025",
      tech: "MySQL, Power BI",
      points: [
        "Developed a data analytics pipeline processing 100k+ records for trend and fraud detection.",
        "Performed data cleaning, transformation, and visualization to improve reporting accuracy by 30%.",
        "Designed interactive dashboards tracking 8+ KPIs including LDR, churn rate, and customer segmentation.",
      ],
    },
    {
      title: "Smart Safety Helmet & Automated Test Tube Holder",
      year: "2023",
      tech: "Arduino, MQ-2, MPU6050, IR Sensors",
      points: [
        "Built an IoT-enabled safety system improving lab safety by 50% using real-time sensor monitoring.",
        "Integrated gas, motion, and impact detection with emergency alerts triggered within 2 seconds.",
        "Prototyped a low-cost solution achieving 95% accuracy in environmental hazard detection.",
      ],
    },
    {
      title: "Car Rental Website",
      year: "2024",
      tech: "React, Node.js, MongoDB, Stripe API",
      points: [
        "Developed a full-stack car rental platform with real-time vehicle availability and booking.",
        "Integrated Stripe API for secure payments and MongoDB for fleet and booking management.",
        "Implemented user authentication and an admin dashboard for booking control.",
      ],
    },
    {
      title: "AI Chatbot",
      year: "2024",
      tech: "Python, OpenAI API, Flask, React",
      points: [
        "Built an AI-powered chatbot using OpenAI GPT models to answer queries from custom knowledge bases.",
        "Developed a Flask backend to handle API requests and manage conversation state.",
        "Created a responsive React frontend with chat history and typing indicators.",
      ],
    },
    {
      title: "Todo List Application",
      year: "2024",
      tech: "React, LocalStorage",
      points: [
        "Created a persistent todo application with drag-and-drop reordering and category filtering.",
        "Utilized LocalStorage to retain user data across sessions without a backend.",
        "Designed a clean, minimalist UI with dark mode support.",
      ],
    },
    {
      title: "Chat Application",
      year: "2024",
      tech: "React, Socket.io, Node.js",
      points: [
        "Implemented real-time messaging using Socket.io for low-latency communication.",
        "Supported group chats, file sharing, and online status indicators.",
        "Designed a responsive UI with message history and typing indicators.",
      ],
    },
    {
      title: "Vendor Performance Data Quality Dashboard",
      year: "2025",
      tech: "SQL, Python, Power BI",
      points: [
        "Built a vendor performance dashboard consolidating data from 5+ sources.",
        "Automated Python-driven data quality checks, improving data accuracy by 25%.",
        "Identified 12% underperforming vendors, supporting strategic procurement decisions.",
      ],
    },
    {
      title: "AI-Powered Portfolio Optimizer",
      year: "2025",
      tech: "Python, Reinforcement Learning",
      points: [
        "Developed RL-based portfolio allocation models using volatility and risk indicators.",
        "Backtested strategies using yfinance, achieving 8–12% higher risk-adjusted returns.",
        "Built a modular ML pipeline with automated hyperparameter tuning and retraining.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A selection of academic, personal, and industry-oriented projects
          demonstrating hands-on experience in software development, data
          analytics, and AI-driven systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 bg-black/60 backdrop-blur-md p-5 hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-3 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-primary">{project.year}</p>
                <p className="text-sm text-white/60 mt-1">
                  <span className="font-medium">Tech:</span> {project.tech}
                </p>
              </div>

              {/* BULLETS — LEFT-CENTERED */}
              <div className="max-w-xl mx-auto">
                <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-white/70 text-left">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
