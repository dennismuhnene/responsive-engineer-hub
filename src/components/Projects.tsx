import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      title: "Commercial High-Rise Building",
      image: "/images/projects/commercial-high-rise.jpg",
      description:
        "Structural design and construction supervision of a 25-story commercial building with mixed-use spaces including offices, retail, and parking facilities.",
      technologies: ["AutoCAD", "ETABS", "Revit", "BIM 360"],
      features: [
        "Seismic-resistant design",
        "LEED Gold certification",
        "Complex foundation system",
        "Advanced MEP coordination",
      ],
      timeline: "18 months",
      location: "Kitengela Town, Nairobi",
      budget: "KES 500M",
      role: "Assistant Structural Engineer",
      status: "Completed",
    },
    {
      title: "Highway Bridge Infrastructure",
      description:
        "Design and construction of a 500-meter prestressed concrete bridge connecting two major highways, including approach roads and drainage systems.",
      image: "/images/projects/highway-bridge.jpg",
      technologies: ["SAP2000", "Civil 3D", "Primavera P6", "GIS"],
      features: [
        "Prestressed concrete design",
        "Seismic isolation system",
        "Environmental impact mitigation",
        "Traffic management during construction",
      ],
      timeline: "24 months",
      location: " Eldoret Southern Bypass",
      budget: "KES 300M",
      role: "Bridge Design Engineer",
      status: "Completed",
    },
    {
      title: "Residential Complex Development",
      description:
        "Master planning and structural design for a 200-unit residential complex with community facilities, green spaces, and sustainable infrastructure.",
      image: "/images/projects/residential-complex.jpg",
      technologies: ["Revit", "ETABS", "AutoCAD", "Microsoft Project"],
      features: [
        "Sustainable design principles",
        "Community-centered planning",
        "Stormwater management",
        "Energy-efficient systems",
      ],
      timeline: "30 months",
      location: "Kilimani Estate",
      budget: "KES 150M",
      role: "Design Lead",
      status: "In Progress",
    },
    {
      title: "Water Treatment Facility",
      description:
        "Design and construction of a modern water treatment plant with capacity for 50,000 residents, including advanced filtration and quality control systems.",
      image: "/images/projects/water-treatment.jpg",
      technologies: ["Civil 3D", "EPANET", "AutoCAD", "Project Management"],
      features: [
        "Advanced treatment processes",
        "Environmental compliance",
        "Remote monitoring systems",
        "Emergency backup systems",
      ],
      timeline: "15 months",
      location: "Kilifi County",
      budget: "KES 200M",
      role: "Assistant Project Manager",
      status: "Completed",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-background text-foreground"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center">
            A showcase of major civil engineering projects I've led and
            contributed to, demonstrating expertise across various
            infrastructure domains.
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-xl overflow-hidden shadow-md bg-muted relative"
          >
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px]">
              {imageErrors[currentIndex] ? (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🏗️</div>
                    <p className="text-sm">{projects[currentIndex].title}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  onError={() => handleImageError(currentIndex)}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover brightness-[0.75] rounded-xl"
                  style={{ imageRendering: "auto" }}
                />
              )}

              <Badge
                className={`absolute top-4 left-4 text-white px-3 py-1 text-sm rounded-full shadow-lg ${
                  projects[currentIndex].status === "Completed"
                    ? "bg-green-600"
                    : "bg-blue-600"
                }`}
              >
                {projects[currentIndex].status}
              </Badge>

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-sm sm:text-base mb-4">
                  {projects[currentIndex].description}
                </p>
                <div className="text-xs sm:text-sm space-y-1">
                  <div>
                    <strong>Timeline:</strong> {projects[currentIndex].timeline}
                  </div>
                  <div>
                    <strong>Location:</strong> {projects[currentIndex].location}
                  </div>
                  <div>
                    <strong>Budget:</strong> {projects[currentIndex].budget}
                  </div>
                  <div>
                    <strong>Role:</strong> {projects[currentIndex].role}
                  </div>
                </div>
              </div>

              <Button
                onClick={handlePrev}
                variant="ghost"
                size="icon"
                aria-label="Previous project"
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background/90 shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </Button>

              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                aria-label="Next project"
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background/90 shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </Button>
            </div>
          </motion.div>

          <div className="text-center text-sm text-muted-foreground mt-4">
            {currentIndex + 1} of {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
