import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CGP Engineering Consultants",
      position: "Assistant Civil & Structural Engineer",
      location: "Nairobi, Kenya",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      description:
        "Assisted in leading structural design projects and managing a team of engineering technicians on large-scale infrastructure developments.",
      achievements: [
        "Led design of KES 200M commercial high-rise project",
        "Implemented BIM workflows reducing design time by 30%",
        "Managed team of 8 engieers and technicans across multiple projects",
        "Achieved 100% on-time project delivery record",
      ],
      technologies: ["AutoCAD", "Revit", "ETABS", "SAP2000", "BIM 360"],
    },
    {
      company: "Infrastructure Solutions Group",
      position: "Assistant Civil Engineer",
      location: "Ngong Road, Nairobi",
      duration: "Jun 2020 - Dec 2021",
      type: "Full-time",
      description:
        "Specialized in transportation infrastructure projects including highway design and bridge construction supervision.",
      achievements: [
        "Designed 3 major highway bridge projects",
        "Reduced construction costs by 15% through value engineering",
        "Obtained Professional Engineer (PE) license",
        "Led quality assurance for KES 300M bridge project",
      ],
      technologies: ["Civil 3D", "SAP2000", "Primavera P6", "MicroStation"],
    },
    {
      company: "Urban Development Associates",
      position: "Junior Civil Engineer",
      location: "Nairobi, Kenya",
      duration: "Aug 2019 - May 2020",
      type: "Full-time",
      description:
        "Focused on residential and commercial building design, site development, and construction document preparation.",
      achievements: [
        "Completed structural analysis for 15+ residential projects",
        "Assisted in obtaining LEED certification for 3 projects",
        "Prepared detailed construction drawings and specifications",
        "Collaborated with architects and MEP engineers",
      ],
      technologies: ["AutoCAD", "Revit", "SketchUp", "Microsoft Project"],
    },
    {
      company: "Nyeri County Infrastructure Department",
      position: "Engineering Intern",
      location: "Nyeri, Kenya",
      duration: "Jun 2018 - Aug 2018",
      type: "Internship",
      description:
        "Supported county infrastructure projects and assisted with environmental impact assessments.",
      achievements: [
        "Conducted site surveys for 10+ municipal projects",
        "Assisted in preparing environmental impact reports",
        "Created GIS maps for city planning initiatives",
        "Participated in community stakeholder meetings",
      ],
      technologies: [
        "GIS Software",
        "AutoCAD",
        "Excel",
        "Field Survey Equipment",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Structural Engineering",
      school: "Univeristy of Nairobi",
      location: "Nairobi, Kenya",
      duration: "2017 - 2019",
      details: [
        "Specialization in Earthquake Engineering",
        "Thesis: Advanced Seismic Analysis Methods",
        "GPA: 3.8/4.0",
        "Graduate Research Assistant",
      ],
    },
    {
      degree: "Bachelor of Science in Civil Engineering",
      school: "Dedan Kimathi University of Technology",
      location: "Nyeri, Kenya",
      duration: "2013 - 2017",
      details: [
        "Magna Cum Laude",
        "Minor in Construction Management",
        "GPA: 3.7/4.0",
        "President of Civil Engineering Society",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in civil engineering, from internships to
            medium-level positions, backed by strong academic foundation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
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
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
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
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">
                    {edu.degree}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium text-sm">{edu.school}</span>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
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
                        className="flex items-center gap-2 text-sm text-muted-foreground"
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
