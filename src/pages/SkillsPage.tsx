import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical skills, tools, and technologies I work with to deliver exceptional engineering solutions
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;