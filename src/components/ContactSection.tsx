import SectionWrapper from "./SectionWrapper";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SectionWrapper id="contact-us">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <span className="text-primary text-sm font-body tracking-widest uppercase">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
            Start a Conversation
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-10">
            Ready to develop a high-integrity carbon project? Let's discuss how we can help.
          </p>

          <div className="space-y-5">
            {[
              { icon: Mail, text: "info@carboneutrivo.com" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MapPin, text: "Geneva, Switzerland" },
            ].map((c) => (
              <div key={c.text} className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <c.icon className="text-primary" size={18} />
                {c.text}
              </div>
            ))}
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="bg-card border border-primary/30 rounded-xl p-8 text-center">
              <p className="text-primary font-display text-xl">Thank you!</p>
              <p className="text-muted-foreground font-body text-sm mt-2">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "organization", label: "Organization", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="text-sm text-muted-foreground font-body block mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm text-muted-foreground font-body block mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
