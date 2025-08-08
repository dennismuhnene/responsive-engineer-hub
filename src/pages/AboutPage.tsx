import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, journey, and what drives my passion for engineering
            </p>
          </div>
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;