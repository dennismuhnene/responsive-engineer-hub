import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next engineering project or explore new opportunities together
            </p>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;