import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Award, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Wrench,
      title: "Technical Skills",
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "Revit", level: 85 },
        { name: "SAP2000", level: 80 },
        { name: "ETABS", level: 75 },
        { name: "Civil 3D", level: 70 },
      ],
    },
    {
      icon: Code,
      title: "Software & Tools",
      skills: [
        { name: "Microsoft Project", level: 90 },
        { name: "Primavera P6", level: 85 },
        { name: "SketchUp", level: 80 },
        { name: "GIS Software", level: 75 },
        { name: "BIM 360", level: 70 },
      ],
    },
    {
      icon: Award,
      title: "Core Competencies",
      skills: [
        { name: "Structural Analysis", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "Construction Supervision", level: 85 },
        { name: "Quality Control", level: 90 },
        { name: "Cost Estimation", level: 80 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Client Communication", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 88 },
      ],
    },
  ];

  const certifications = [
    "Professional Engineer (PE) License",
    "Project Management Professional (PMP)",
    "LEED Green Associate",
    "OSHA 30-Hour Construction Safety",
    "AutoCAD Certified Professional",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, software
            proficiency, and professional competencies in civil engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 bg-card"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground">
              <Award className="h-6 w-6 text-primary" />
              Certifications & Licenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-foreground"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
