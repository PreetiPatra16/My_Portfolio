import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Internships", path: "/internships" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link
          to="/"
          className={cn(
            "text-xl font-bold flex items-center transition-colors duration-300",
            isScrolled ? "text-white" : "text-foreground"
          )}
        >
          <span className="text-glow">Preeti&apos;s</span>
          <span className="ml-1 text-primary">Portfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "transition-colors duration-300 relative group",
                isScrolled
                  ? "text-white/80 hover:text-primary"
                  : "text-foreground/80 hover:text-primary",
                location.pathname === item.path && "text-primary font-medium"
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                  location.pathname === item.path && "scale-x-100"
                )}
              />
            </Link>
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
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-white hover:text-primary transition-colors duration-300",
                  location.pathname === item.path && "text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
