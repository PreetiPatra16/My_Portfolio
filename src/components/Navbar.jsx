import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Internships", href: "#internships" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className={cn(
            "text-xl font-bold flex items-center transition-colors duration-300",
            isScrolled ? "text-white" : "text-foreground"
          )}
        >
          <span className="text-glow">Preeti&apos;s</span>
          <span className="ml-1 text-primary">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "transition-colors duration-300",
                isScrolled
                  ? "text-white/80 hover:text-primary"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 z-50 transition-colors duration-300",
            isScrolled ? "text-white" : "text-foreground"
          )}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            "bg-black/80 backdrop-blur-xl",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
