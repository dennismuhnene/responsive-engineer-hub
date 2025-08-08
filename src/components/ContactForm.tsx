import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_k4s54f7", // Hardcoded Service ID
        "template_pvrqk6f", // Hardcoded Template ID
        formRef.current!,
        "UekgSgCEBJiN5GtFy" // Hardcoded Public Key
      );

      console.log("EmailJS Success:", result.text);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      formRef.current?.reset();
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "text" in error &&
        typeof (error as Record<string, unknown>).text === "string"
      ) {
        errorMessage = (error as Record<string, unknown>).text as string;
      }

      console.error("EmailJS Error (full):", error);

      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="float-element bg-card/80 backdrop-blur-sm border border-border/50 bg-gradient-secondary">
      <CardContent className="px-4 sm:px-8 py-8">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          autoComplete="off"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
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
                required
                className="rounded-xl border-2 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <Input
              name="title"
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              required
              className="rounded-xl border-2 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              required
              rows={5}
              className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Hidden field for 'time' variable required in EmailJS template */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

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
