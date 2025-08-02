
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImageUpload from './ProfileImageUpload';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [profileImage, setProfileImage] = useState<string>('');

  // Load profile image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (imageUrl: string) => {
    setProfileImage(imageUrl);
  };
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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-accent">
      <div className="container mx-auto text-center animate-fade-in">
        <div className="mb-8">
          {/* Profile Image with Upload */}
          <div className="mb-6">
            <ProfileImageUpload 
              currentImage={profileImage}
              onImageChange={handleImageChange}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in-up">
            Joseph Muriithi, G.Eng.,
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mt-2 mb-6 animate-slide-in-left">
            Structural Design • Infrastructure Development • Project Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-in-right">
            Passionate about creating sustainable infrastructure solutions with over 5 years of experience 
            in structural design, construction management, and engineering consultancy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="float-element px-8 py-3 text-lg font-semibold rounded-full bg-gradient-primary hover:scale-105 transition-bounce border-0"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleDownloadCV}
            className="float-element px-8 py-3 text-lg font-semibold rounded-full border-2 border-primary hover:scale-105 transition-bounce"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-12 animate-slide-in-left">
          <a 
            href="https://github.com" 
            className="p-3 rounded-full bg-secondary/20 text-foreground hover:text-primary hover:bg-secondary/40 transition-all duration-300 float-element"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            className="p-3 rounded-full bg-secondary/20 text-foreground hover:text-primary hover:bg-secondary/40 transition-all duration-300 float-element"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:josephmuriithi@engineer.com" 
            className="p-3 rounded-full bg-secondary/20 text-foreground hover:text-primary hover:bg-secondary/40 transition-all duration-300 float-element"
            aria-label="Email Contact"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-float text-muted-foreground hover:text-primary transition-smooth p-2 rounded-full hover:bg-secondary/20"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
