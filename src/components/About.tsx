import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Award, MapPin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "3+ Years Experience",
      desc: "Civil Engineering-  Design & Construction",
      aria: "Experience icon",
    },
    {
      icon: GraduationCap,
      title: "Bachelor of Science",
      desc: "Civil Engineering",
      aria: "Education icon",
    },
    {
      icon: Award,
      title: "Graduate Engineer",
      desc: "EBK Graduate Engineer",
      aria: "Award icon",
    },
    {
      icon: MapPin,
      title: "Projects",
      desc: "Diverse Infrastructure Experience",
      aria: "Location icon",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-justify">
            Dedicated civil engineer with expertise in structural design,
            infrastructure development, and sustainable construction practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed text-justify">
                I am a passionate civil engineer with over 3 years of experience
                in designing and implementing infrastructure projects. My
                expertise spans across structural analysis, construction
                management, and sustainable engineering solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Throughout my career, I have worked on diverse projects ranging
                from residential buildings to large-scale infrastructure
                developments. I specialize in using advanced CAD software,
                structural analysis tools, and project management methodologies
                to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                My commitment to sustainable engineering practices and
                innovative problem-solving has earned me recognition in the
                industry and successful project completions worth over KES 50
                million in total value.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                aria-label="Skill: Structural Design"
              >
                Structural Design
              </Badge>
              <Badge
                className="bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-colors"
                aria-label="Skill: AutoCAD"
              >
                AutoCAD
              </Badge>
              <Badge
                className="bg-accent/20 text-accent-foreground border border-accent/30 hover:bg-accent/30 transition-colors"
                aria-label="Skill: Project Management"
              >
                Project Management
              </Badge>
              <Badge
                className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                aria-label="Skill: Construction Supervision"
              >
                Construction Supervision
              </Badge>
              <Badge
                className="bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-colors"
                aria-label="Skill: Building Codes"
              >
                Building Codes
              </Badge>
              <Badge
                className="bg-accent/20 text-accent-foreground border border-accent/30 hover:bg-accent/30 transition-colors"
                aria-label="Skill: Sustainability"
              >
                Sustainability
              </Badge>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="float-element bg-card/80 backdrop-blur-sm border border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center"
                    aria-label={item.aria}
                  >
                    <item.icon
                      className="h-8 w-8 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
