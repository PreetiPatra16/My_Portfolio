import {
  Briefcase,
  Code,
  User,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import resumePDF from "../assets/Resume_PreetiChandaPatra.pdf";
import myPhoto from "../assets/my_photo.jpg";

export const AboutSection = () => {

  return (

    <section
      id="about"
      className="
        relative min-h-screen
        flex items-center
        pt-24 pb-24 px-4
        overflow-hidden
        scroll-mt-24
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.07),transparent_60%)]
        "
      />

      {/* Soft Glow Orbs */}
      <div
        className="
          absolute top-10 left-10
          w-64 h-64 rounded-full
          bg-primary/10 blur-[120px]
        "
      />

      <div
        className="
          absolute bottom-10 right-10
          w-72 h-72 rounded-full
          bg-primary/10 blur-[140px]
        "
      />

      <div
        className="
          container mx-auto
          max-w-6xl relative z-10
          flex flex-col justify-center
        "
      >

        {/* Heading */}
        <div
          className="
            text-center mb-14
            opacity-0 animate-fade-in
          "
        >

          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-primary/20
              bg-primary/5 backdrop-blur-md
              text-primary text-sm mb-5
            "
          >

            <Sparkles size={15} />

            About Me

          </div>

          <h2
            className="
              text-4xl md:text-5xl
              font-black tracking-tight
              mb-5 leading-tight
            "
          >

            Building Intelligent{" "}

            <span className="text-primary">
              Digital Experiences
            </span>

          </h2>

          <p
            className="
              text-white/50
              max-w-2xl mx-auto
              leading-[1.9]
              text-base md:text-lg
            "
          >

            Passionate about AI-driven applications,
            scalable software systems, and creating
            meaningful digital experiences through
            innovation and modern development.

          </p>

        </div>

        {/* Main Layout */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-12 items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* Main Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-black/40 backdrop-blur-2xl
                p-7 md:p-8
                transition-all duration-500
                hover:border-primary/30
                hover:shadow-[0_0_40px_rgba(139,92,246,0.10)]
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0 opacity-0
                  hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_60%)]
                "
              />

              <div className="relative z-10">

                <p
                  className="
                    text-primary text-xs
                    uppercase tracking-[0.25em]
                    mb-5
                  "
                >
                  Computer Science Undergraduate
                </p>

                <h3
                  className="
                    text-2xl md:text-3xl
                    font-bold leading-[1.3]
                    mb-5
                  "
                >

                  Combining AI, creativity,
                  and modern development
                  to build impactful solutions.

                </h3>

                <p
                  className="
                    text-white/60
                    leading-[1.9]
                    text-sm md:text-base
                    mb-5
                  "
                >

                  I’m{" "}

                  <span className="text-primary">
                    Preeti Chanda Patra
                  </span>

                  , a Computer Science undergraduate
                  passionate about creating intelligent
                  and user-focused digital experiences.

                </p>

                <p
                  className="
                    text-white/50
                    leading-[1.9]
                    text-sm md:text-base
                  "
                >

                  My interests span across AI/ML,
                  computer vision, LLM applications,
                  full-stack development, and software
                  engineering. I enjoy transforming
                  ideas into scalable and meaningful
                  real-world products.

                </p>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="
                  cosmic-button
                  px-7 py-3
                  text-sm
                  shadow-[0_0_25px_rgba(139,92,246,0.22)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Get In Touch
              </Link>

              <a
                href={resumePDF}
                download="Preeti_Chanda_Patra_Resume.pdf"
                className="
                  px-7 py-3 rounded-full
                  border border-white/10
                  bg-white/5 backdrop-blur-md
                  text-white/75 text-sm
                  hover:border-primary/40
                  hover:bg-primary/10
                  transition-all duration-300
                "
              >
                Download CV
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative flex justify-center
              items-center
              mt-6 lg:mt-0
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                w-[280px] h-[280px]
                rounded-full
                bg-primary/10 blur-[80px]
              "
            />

            {/* Fixed Rotating Ring */}
            <div
              className="
                absolute
                w-[320px] h-[320px]
                rounded-full
                border border-primary/20
                border-dashed
                animate-spin
              "
              style={{ animationDuration: "18s" }}
            />

            {/* Secondary Ring */}
            <div
              className="
                absolute
                w-[350px] h-[350px]
                rounded-full
                border border-primary/10
              "
            />

            {/* Main Image */}
            <div
              className="
                relative
                w-64 h-64 md:w-[290px] md:h-[290px]
                rounded-full p-[5px]
                bg-gradient-to-tr
                from-primary via-primary/60 to-primary/20
                shadow-[0_0_60px_rgba(139,92,246,0.18)]
              "
            >

              <div
                className="
                  w-full h-full
                  rounded-full
                  bg-background
                  p-2 overflow-hidden
                "
              >

                <img
                  src={myPhoto}
                  alt="Preeti Chanda Patra"
                  className="
                    w-full h-full
                    rounded-full
                    object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />

              </div>

            </div>

            {/* Floating Card */}
            <div
              className="
                absolute bottom-4 -right-2
                rounded-2xl
                border border-white/10
                bg-black/60 backdrop-blur-xl
                px-4 py-3
                animate-float
              "
            >

              <div className="flex items-center gap-3">

                <Code
                  className="text-primary"
                  size={18}
                />

                <div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Cards */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-5 mt-16
          "
        >

          {[
            {
              icon: <Code className="text-primary" />,
              title: "Development",
              text: "Building scalable applications with modern technologies and clean architecture.",
            },

            {
              icon: <User className="text-primary" />,
              title: "User Experience",
              text: "Designing intuitive and visually engaging digital interfaces.",
            },

            {
              icon: <Briefcase className="text-primary" />,
              title: "Real-World Projects",
              text: "Applying AI and software engineering to practical solutions.",
            },
          ].map((card, index) => (

            <div
              key={index}
              className="
                group relative overflow-hidden
                rounded-[24px]
                border border-white/10
                bg-black/40 backdrop-blur-2xl
                p-6
                transition-all duration-500
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-[0_0_35px_rgba(139,92,246,0.10)]
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_60%)]
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    w-12 h-12 rounded-xl
                    flex items-center justify-center
                    bg-primary/10 border border-primary/20
                    mb-4
                  "
                >
                  {card.icon}
                </div>

                <h4 className="text-lg font-semibold mb-3">
                  {card.title}
                </h4>

                <p
                  className="
                    text-white/50
                    leading-[1.8]
                    text-sm
                  "
                >
                  {card.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};