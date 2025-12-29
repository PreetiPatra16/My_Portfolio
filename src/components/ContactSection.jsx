import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Instagram,
} from "lucide-react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_6yyqnnu",      // Service ID
        "template_tf8bq23",     // Template ID
        e.target,
        "83MxScOG7BkcWx7Yd"     // Public Key
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "I'll get back to you soon.",
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        () => {
          toast({
            title: "Failed to send message",
            description: "Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-sm">
          Have a project in mind or want to collaborate? Let’s connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT — FORM */}
          <div
            className="
              bg-black/60
              backdrop-blur-lg
              border border-white/10
              rounded-xl
              p-6
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Send a Message
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:preetipatra.1604@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  preetipatra.1604@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Phone className="text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a
                  href="tel:+918879904024"
                  className="text-muted-foreground hover:text-primary"
                >
                  +91 88799 04024
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="text-primary" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="font-medium mb-3">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/preeti-chanda-patra-b93a8a2b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
