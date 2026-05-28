import {
  ArrowDown,
  Github,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";

export const HeroSection = () => {

  return (

    <section
      id="hero"
      className="
        relative min-h-screen
        flex items-center justify-center
        overflow-hidden px-4
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_45%)]
        "
      />

      {/* Purple Glow Orbs */}
      <div
        className="
          absolute top-20 left-20
          w-72 h-72 rounded-full
          bg-primary/10 blur-[120px]
          animate-pulse
        "
      />

      <div
        className="
          absolute bottom-20 right-10
          w-80 h-80 rounded-full
          bg-primary/10 blur-[140px]
          animate-pulse
        "
      />

      {/* Grid Background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(18)].map((_, i) => (

          <div
            key={i}
            className="
              absolute rounded-full
              bg-primary/40 animate-float
            "
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 12}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />

        ))}

      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto relative z-10">

        <div
          className="
            flex flex-col items-center
            justify-center text-center
            min-h-screen
            pt-28 md:pt-36
          "
        >

          {/* Heading */}
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl
              font-black tracking-tight
              leading-[1]
              mb-8
            "
          >

            <span
              className="
                block text-white/70
                opacity-0 animate-fade-in-delay-1
              "
            >
              Hi, I’m
            </span>

            <span
              className="
                block
                text-primary
                drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]
                opacity-0 animate-fade-in-delay-2
              "
            >
              Preeti Chanda Patra
            </span>

          </h1>

          {/* Animated Divider */}
          <div
            className="
              w-28 h-[2px]
              bg-gradient-to-r
              from-transparent
              via-primary/70
              to-transparent
              mb-10
              opacity-0 animate-fade-in-delay-3
            "
          />

          {/* Description */}
          <p
            className="
              text-base md:text-xl
              text-white/50
              max-w-4xl mx-auto
              leading-[2]
              opacity-0 animate-fade-in-delay-4
            "
          >

            Computer Science undergraduate specializing in
            AI & Robotics, passionate about building intelligent,
            scalable, and visually engaging digital experiences.
            From AI-powered systems and computer vision to
            full-stack applications, I enjoy transforming ideas
            into impactful real-world solutions through code,
            creativity, and innovation.

          </p>

          {/* Buttons */}
          <div
            className="
              mt-14 flex flex-col sm:flex-row
              gap-5
              opacity-0 animate-fade-in-delay-5
            "
          >

            <Link
              to="/projects"
              className="
                cosmic-button
                px-8 py-4 text-base
                shadow-[0_0_30px_rgba(139,92,246,0.25)]
                hover:scale-105
                transition-all duration-300
              "
            >
              Explore Projects
            </Link>

            <Link
              to="/contact"
              className="
                px-8 py-4 rounded-full
                border border-white/10
                bg-white/5 backdrop-blur-md
                text-white/75
                hover:border-primary/40
                hover:bg-primary/10
                transition-all duration-300
              "
            >
              Let’s Connect
            </Link>

          </div>

          {/* Social Icons */}
          <div
            className="
              flex items-center gap-5 mt-14
              opacity-0 animate-fade-in-delay-5
            "
          >

            <a
              href="https://github.com/PreetiPatra16"
              target="_blank"
              rel="noreferrer"
              className="
                p-4 rounded-full
                border border-white/10
                bg-white/5 backdrop-blur-md
                hover:border-primary/40
                hover:bg-primary/10
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <Github
                size={20}
                className="text-white/70"
              />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="
                p-4 rounded-full
                border border-white/10
                bg-white/5 backdrop-blur-md
                hover:border-primary/40
                hover:bg-primary/10
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <Linkedin
                size={20}
                className="text-white/70"
              />
            </a>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <Link
        to="/about"
        className="
          absolute bottom-10 left-1/2
          -translate-x-1/2
          flex flex-col items-center
          animate-bounce z-20
        "
      >

        <span className="text-sm text-white/35 mb-3">
          Scroll to Explore
        </span>

        <div
          className="
            p-3 rounded-full
            border border-primary/20
            bg-primary/10 backdrop-blur-md
          "
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>

      </Link>

    </section>
  );
};