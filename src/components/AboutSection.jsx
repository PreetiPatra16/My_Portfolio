import { Briefcase, Code, User } from "lucide-react";
import { Link } from "react-router-dom";
import resumePDF from "../assets/Resume_PreetiChandaPatra.pdf";
import myPhoto from "../assets/my_photo.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">

          {/* Left Content */}
          <div className="space-y-5 max-w-xl">
            <h3 className="text-2xl font-semibold">
              Learning, Building, and Growing Through Code
            </h3>

            <p className="text-muted-foreground">
              Hi, I’m <strong>Preeti Chanda Patra</strong>, a Computer Science
              undergraduate with a curiosity for technology and a passion for
              creating clean, reliable, and user-focused applications.
            </p>

            <p className="text-muted-foreground">
              I enjoy transforming ideas into practical projects, exploring new
              tools, and strengthening problem-solving skills through hands-on
              experience. Driven by continuous learning and meaningful impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Link to="/contact" className="cosmic-button">
                Get In Touch
              </Link>

              <a
                href={resumePDF}
                download="Preeti_Chanda_Patra_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary 
                           hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-[320px] md:h-[320px] rounded-full 
                            p-[5px] bg-gradient-to-tr from-primary/70 to-primary/30">
              <div className="w-full h-full rounded-full bg-background p-2">
                <img
                  src={myPhoto}
                  alt="Preeti Chanda Patra"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="rounded-xl p-4 
                          bg-black/55 backdrop-blur-xl 
                          border border-white/15
                          shadow-[0_0_35px_rgba(139,92,246,0.18)]
                          card-hover">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-white/10">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  Development Focus
                </h4>
                <p className="text-sm text-white/70">
                  Writing clean, maintainable code using modern tools.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-4 
                          bg-black/55 backdrop-blur-xl 
                          border border-white/15
                          shadow-[0_0_35px_rgba(139,92,246,0.18)]
                          card-hover">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-white/10">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  User-First Mindset
                </h4>
                <p className="text-sm text-white/70">
                  Designing intuitive and usable digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-4 
                          bg-black/55 backdrop-blur-xl 
                          border border-white/15
                          shadow-[0_0_35px_rgba(139,92,246,0.18)]
                          card-hover">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-white/10">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  Hands-On Experience
                </h4>
                <p className="text-sm text-white/70">
                  Learning through projects, internships, and teamwork.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
