import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // ✅ Broader fix for spacebar being blocked in inputs across environments
  useEffect(() => {
    const allowSpaceInInputs = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if (
        isInput &&
        (e.code === "Space" || e.key === " " || e.keyCode === 32)
      ) {
        e.stopPropagation();
      }
    };

    document.addEventListener("keydown", allowSpaceInInputs, true);
    return () =>
      document.removeEventListener("keydown", allowSpaceInInputs, true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="float-element bg-card/80 backdrop-blur-sm border border-border/50 bg-gradient-secondary">
      <CardContent className="px-4 sm:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                type="text"
                className="rounded-xl border-2 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-xl border-2 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <Input
              name="subject"
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="rounded-xl border-2 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl py-3 text-lg font-semibold bg-gradient-primary hover:scale-105 transition-bounce border-0"
            aria-label="Send Message"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div
                  className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                  aria-label="Loading spinner"
                ></div>
                Sending...
              </div>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
