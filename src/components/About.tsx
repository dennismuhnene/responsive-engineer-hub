
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: User, title: "3+ Years Experience", desc: "Civil Engineering & Construction" },
    { icon: GraduationCap, title: "Bachelor's Degree", desc: "Structural Engineering" },
    { icon: Award, title: "Graduate Engineer", desc: "EBK Graduate Engineer" },
    { icon: MapPin, title: "Projects", desc: "Diverse Infrastructure Experience" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated civil engineer with expertise in structural design, infrastructure development, 
            and sustainable construction practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate civil engineer with over 3 years of experience in designing and 
                implementing infrastructure projects. My expertise spans across structural analysis, 
                construction management, and sustainable engineering solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Throughout my career, I have worked on diverse projects ranging from residential 
                buildings to large-scale infrastructure developments. I specialize in using advanced 
                CAD software, structural analysis tools, and project management methodologies to 
                deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My commitment to sustainable engineering practices and innovative problem-solving 
                has earned me recognition in the industry and successful project completions worth 
                over KES 50 million in total value.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Structural Design</Badge>
              <Badge variant="secondary">AutoCAD</Badge>
              <Badge variant="secondary">Project Management</Badge>
              <Badge variant="secondary">Construction Supervision</Badge>
              <Badge variant="secondary">Building Codes</Badge>
              <Badge variant="secondary">Sustainability</Badge>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
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
