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
        { name: "Reinforced Concrete Design & Drafting", level: 95 },
        { name: "Building Codes", level: 85 },
        { name: "Project Management & Construction Supervision", level: 80 },
        { name: "Structural Steel Building Design", level: 75 },
        { name: "Bridge Design", level: 70 },
      ],
    },
    {
      icon: Code,
      title: "Software & Tools",
      skills: [
        { name: "Excel Spreadsheets", level: 90 },
        { name: "Autodesk AutoCAD", level: 85 },
        { name: "Autodesk Revit", level: 80 },
        { name: "Staad Pro", level: 75 },
        { name: "Autodesk Robot Structural Analysis Professional", level: 70 },
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

  const certifications = ["EBK, Graduate Engineer"];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-gradient-tertiary">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 px-2 float-element">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, software
            proficiency and professional competencies in civil engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="float-element hover:shadow-elegant transition-all duration-500 bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <category.icon
                    className="h-6 w-6 text-primary"
                    aria-label={`${category.title} icon`}
                  />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
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
                    <Progress
                      value={skill.level}
                      className="h-2"
                      aria-label={`${skill.name} proficiency ${skill.level}%`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="float-element bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground">
              <Award
                className="h-6 w-6 text-primary"
                aria-label="Certifications icon"
              />
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
