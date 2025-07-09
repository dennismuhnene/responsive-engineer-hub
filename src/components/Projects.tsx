
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, MapPin, DollarSign } from 'lucide-react';

const Projects = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };
  const projects = [
    {
      title: "Commercial High-Rise Building",
      image: "/images/projects/commercial-high-rise.jpg",
      description: "Structural design and construction supervision of a 25-story commercial building with mixed-use spaces including offices, retail, and parking facilities.",
      technologies: ["AutoCAD", "ETABS", "Revit", "BIM 360"],
      features: [
        "Seismic-resistant design",
        "LEED Gold certification",
        "Complex foundation system",
        "Advanced MEP coordination"
      ],
      timeline: "18 months",
      location: "Downtown Metro",
      budget: "$25M",
      role: "Lead Structural Engineer",
      status: "Completed"
    },
    {
      title: "Highway Bridge Infrastructure",
      description: "Design and construction of a 500-meter prestressed concrete bridge connecting two major highways, including approach roads and drainage systems.",
      image: "/images/projects/highway-bridge.jpg",
      technologies: ["SAP2000", "Civil 3D", "Primavera P6", "GIS"],
      features: [
        "Prestressed concrete design",
        "Seismic isolation system",
        "Environmental impact mitigation",
        "Traffic management during construction"
      ],
      timeline: "24 months",
      location: "State Highway 101",
      budget: "$15M",
      role: "Project Manager",
      status: "Completed"
    },
    {
      title: "Residential Complex Development",
      description: "Master planning and structural design for a 200-unit residential complex with community facilities, green spaces, and sustainable infrastructure.",
      image: "/images/projects/residential-complex.jpg",
      technologies: ["Revit", "SketchUp", "AutoCAD", "Microsoft Project"],
      features: [
        "Sustainable design principles",
        "Community-centered planning",
        "Stormwater management",
        "Energy-efficient systems"
      ],
      timeline: "30 months",
      location: "Suburban Development",
      budget: "$40M",
      role: "Design Lead",
      status: "In Progress"
    },
    {
      title: "Water Treatment Facility",
      description: "Design and construction of a modern water treatment plant with capacity for 50,000 residents, including advanced filtration and quality control systems.",
      image: "/images/projects/water-treatment.jpg",
      technologies: ["Civil 3D", "EPANET", "AutoCAD", "Project Management"],
      features: [
        "Advanced treatment processes",
        "Environmental compliance",
        "Remote monitoring systems",
        "Emergency backup systems"
      ],
      timeline: "15 months",
      location: "Municipal District",
      budget: "$12M",
      role: "Technical Consultant",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of major civil engineering projects I've led and contributed to, 
            demonstrating expertise across various infrastructure domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                {imageErrors[index] ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">🏗️</div>
                      <p className="text-sm">{project.title}</p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(index)}
                  />
                )}
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Role: </span>
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
