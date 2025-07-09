
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const handleDownloadCV = () => {
    // Check for PDF first, then DOCX
    const cvFiles = ['/downloads/cv.pdf', '/downloads/cv.docx'];
    
    cvFiles.forEach(async (filePath) => {
      try {
        const response = await fetch(filePath, { method: 'HEAD' });
        if (response.ok) {
          // Create download link
          const link = document.createElement('a');
          link.href = filePath;
          link.download = filePath.split('/').pop() || 'cv';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Open PDF in new tab for viewing
          if (filePath.endsWith('.pdf')) {
            window.open(filePath, '_blank');
          }
          return;
        }
      } catch (error) {
        console.log(`CV file not found: ${filePath}`);
      }
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-6xl font-bold text-primary-foreground">
            CE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Civil Engineer
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Structural Design • Infrastructure Development • Project Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about creating sustainable infrastructure solutions with over 5 years of experience 
            in structural design, construction management, and engineering consultancy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="hover:scale-105 transition-transform duration-200"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleDownloadCV}
            className="hover:scale-105 transition-transform duration-200"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com" 
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:contact@engineer.com" 
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="Email Contact"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
