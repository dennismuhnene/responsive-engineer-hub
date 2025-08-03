import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";

interface Experience {
  company: string;
  companyUrl: string;
  position: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  schoolUrl: string;
  location: string;
  duration: string;
  details: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: "CGP Consulting Engineers",
      companyUrl: "https://cgp.co.ke/",
      position: "Assistant Civil & Structural Engineer",
      location: "Nairobi, Kenya",
      duration: "June 2022 - Present",
      type: "Full-time",
      description:
        "Contributed to civil and structural engineering design and analysis for warehouse, commercial, and transport infrastructure projects. Supported both design and construction supervision phases, including BIM coordination, detailed design of bridges and culverts, and preparation of as-built documentation.",
      achievements: [
        "Delivered structural and civil design for 4600 SM warehouse project (KES 500M)",
        "Supported structural design of bridges, culverts, and retaining walls for A8 highway project (KES 300M)",
        "Produced detailed BoQs and structural drawings using AutoCAD and Revit",
        "Maintained strict quality control and compliance during on-site supervision and inspections",
        "Participated in client and stakeholder presentations to communicate technical progress",
      ],
      technologies: [
        "AutoCAD",
        "ETABS",
        "Revit",
        "BIM 360",
        "STAAD Pro",
        "Autodesk Robot Structural Analysis",
        "Autodesk Bridge Designer",
        "Excel",
      ],
    },
    {
      company: "Zhonghao Overseas Construction Engineering Company Limited",
      companyUrl: "http://www.zh100.com/",
      position: "Site Engineer",
      location: "Kisumu, Kenya",
      duration: "February 2022 - May 2022",
      type: "Full-time",
      description:
        "Construction of lot 3 Chuka Sewerage Infrastructure for Tana Water Works Development Agency, involving large-scale wastewater systems and treatment facilities.",
      achievements: [
        "Completed construction of 51,338 meters of trunk and secondary sewer lines",
        "Supervised development of Ntuntuni Sewage Treatment Plant with 2,300 m³/day capacity",
        "Ensured adherence to design specifications and construction timelines",
        "Coordinated multiple subcontractors for smooth execution of site activities",
        "Maintained accurate records of daily site activities and addressed non-compliance issues promptly",
      ],
      technologies: ["AutoCAD", "Microsoft Project", "Excel", "Primavera P6"],
    },
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Civil Engineering",
      school: "Dedan Kimathi University of Technology",
      schoolUrl: "https://www.dkut.ac.ke",
      location: "Nyeri, Kenya",
      duration: "2013 - 2017",
      details: [
        "2:2",
        " Structural & Civil Engineering",
        "GPA: 3.0/4.0",
        "Member of Civil Engineering Society",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-6 bg-gradient-secondary"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 float-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify">
            My professional journey in civil engineering, from internships to
            senior-level positions, backed by strong academic foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="float-element hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <Badge
                      variant={
                        exp.type === "Internship" ? "outline" : "default"
                      }
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" aria-label="Company" />
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" aria-label="Duration" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" aria-label="Location" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-justify">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-medium mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground text-justify"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                          aria-label={`Technology: ${tech}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="float-element hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">
                    {edu.degree}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" aria-label="School" />
                      <a
                        href={edu.schoolUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sm hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {edu.school}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" aria-label="Duration" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" aria-label="Location" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {edu.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground text-justify"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
