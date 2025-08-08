import Experience from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Professional Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My career journey, key roles, and professional achievements in engineering and technology
            </p>
          </div>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;