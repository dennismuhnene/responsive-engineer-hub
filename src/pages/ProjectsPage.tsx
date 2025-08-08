import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of engineering projects showcasing innovation, technical expertise, and problem-solving capabilities
            </p>
          </div>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;