import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Code,
  Wrench,
  Award,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
  }, []);

  // Removed conflicting spacebar handler - inputs should work normally

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Simple Admin Link */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link to="/admin">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            Admin
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
