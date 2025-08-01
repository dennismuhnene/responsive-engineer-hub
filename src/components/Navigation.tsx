import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({
  isDark,
  toggleTheme,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Desktop & Mobile Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] z-50 backdrop-blur-xl rounded-xl transition-all duration-500
          ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          bg-[rgba(111,82,48,0.6)] border border-[rgba(255,255,255,0.1)] 
          shadow-[0_0_20px_rgba(255,200,150,0.25)] 
          animate-border-glow`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-bounce"
              onClick={() => scrollToSection("hero")}
            >
              Joseph Muriithi
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="animated-underline text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.label}
                </button>
              ))}

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full float-element border-2"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="absolute top-20 right-4 w-64 rounded-2xl p-6 animate-slide-in-right 
            bg-[rgba(111,82,48,0.6)] backdrop-blur-xl shadow-lg border border-[rgba(255,255,255,0.1)]"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-foreground">Menu</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-secondary/20 transition-smooth text-foreground hover:text-primary font-medium"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
