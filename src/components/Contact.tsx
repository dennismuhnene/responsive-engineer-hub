import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "murithijseph93@gmail.com",
      href: "mailto:murithijseph93@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 702 096 799",
      href: "tel:+254702096799",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joseph-murithi-796682a1",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/dennismuhnene/",
      color: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-background text-foreground"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 float-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your next civil engineering project? Let's connect
            and explore how we can work together to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="float-element bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-500">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                      aria-label={info.label}
                    >
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                          aria-label={`Contact via ${info.label}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="float-element bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-500">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.label}`}
                  >
                    <div
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground">
                        Let's connect
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
