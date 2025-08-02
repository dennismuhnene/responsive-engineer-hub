import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Calendar,
  MapPin,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

  const getIndex = (offset: number) =>
    (currentIndex + offset + projects.length) % projects.length;

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-background text-foreground"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify">
            A showcase of major civil engineering projects I've led and
            contributed to, demonstrating expertise across various
            infrastructure domains.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center relative sm:hidden">
            {/* No arrows on mobile */}
          </div>

          <div className="flex justify-center items-center relative">
            {/* Left Arrow */}
            <Button
              onClick={handlePrev}
              variant="ghost"
              size="icon"
              aria-label="Previous project"
              className="absolute left-0 z-30 w-12 h-12 hidden sm:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex overflow-x-auto sm:overflow-visible no-scrollbar sm:flex-nowrap gap-4 sm:gap-0">
              {[-1, 0, 1].map((offset) => {
                const index = getIndex(offset);
                const isMain = offset === 0;

                return (
                  <motion.div
                    key={index}
                    className={`flex-shrink-0 mx-auto ${
                      isMain ? "z-20" : "z-10 hidden sm:block"
                    }`}
                    animate={{
                      scale: isMain ? 1.1 : 0.9,
                      opacity: isMain ? 1 : 0.3,
                      filter: isMain ? "blur(0px)" : "blur(2px)",
                    }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Card
                      className={`overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mx-2 ${
                        isMain
                          ? "w-[320px] sm:w-[400px]"
                          : "w-[240px] sm:w-[280px]"
                      }`}
                    >
                      <div className="h-[200px] sm:h-[240px] bg-muted relative overflow-hidden">
                        {imageErrors[index] ? (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                              <div className="text-4xl mb-2">🏗️</div>
                              <p className="text-sm">{projects[index].title}</p>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={projects[index].image}
                            alt={projects[index].title}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(index)}
                            loading="lazy"
                          />
                        )}
                        <Badge
                          className={`absolute top-4 right-4 ${
                            projects[index].status === "Completed"
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {projects[index].status}
                        </Badge>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">
                          {projects[index].title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm text-justify">
                          {projects[index].description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4 pb-4">
                        <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{projects[index].timeline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{projects[index].location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <span>{projects[index].budget}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Role: </span>
                            <span className="text-muted-foreground">
                              {projects[index].role}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">
                            Key Features
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1 text-justify">
                            {projects[index].features.map(
                              (feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {feature}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {projects[index].technologies.map(
                              (tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              aria-label="Next project"
              className="absolute right-0 z-30 w-12 h-12 hidden sm:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
