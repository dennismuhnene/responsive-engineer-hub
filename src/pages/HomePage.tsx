import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Hero from "@/components/Hero";

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    // For home page, we can keep internal scrolling or redirect to specific pages
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero scrollToSection={scrollToSection} />
      
      {/* Quick Navigation Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Explore My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/about"
              className="group p-6 bg-card rounded-xl hover:shadow-lg transition-smooth border border-border hover:border-primary/50"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">About Me</h3>
              <p className="text-muted-foreground text-sm">Learn about my background and journey</p>
            </Link>
            
            <Link 
              to="/skills"
              className="group p-6 bg-card rounded-xl hover:shadow-lg transition-smooth border border-border hover:border-primary/50"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">Skills</h3>
              <p className="text-muted-foreground text-sm">My technical expertise and tools</p>
            </Link>
            
            <Link 
              to="/projects"
              className="group p-6 bg-card rounded-xl hover:shadow-lg transition-smooth border border-border hover:border-primary/50"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">Projects</h3>
              <p className="text-muted-foreground text-sm">Showcase of my work and achievements</p>
            </Link>
            
            <Link 
              to="/contact"
              className="group p-6 bg-card rounded-xl hover:shadow-lg transition-smooth border border-border hover:border-primary/50"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">Contact</h3>
              <p className="text-muted-foreground text-sm">Get in touch for opportunities</p>
            </Link>
          </div>
          
          {/* Admin Access */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <Link 
              to="/admin"
              className="inline-flex items-center px-6 py-3 bg-muted/50 hover:bg-muted rounded-lg text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Shield className="mr-2 h-4 w-4" />
              Admin Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
