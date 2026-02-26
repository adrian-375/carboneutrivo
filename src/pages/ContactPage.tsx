import PageWrapper from "@/components/PageWrapper";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageWrapper title="Contact Us" subtitle="Ready to develop a high integrity carbon project? Let's discuss how we can help.">
      <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
        <div className="space-y-5">
          {[
            { icon: Phone, text: "+91 8310624214" },
            { icon: MapPin, text: "India" },
          ].map((c) => (
            <div key={c.text} className="flex items-center gap-3 text-muted-foreground font-body text-sm">
              <c.icon className="text-primary" size={18} />
              {c.text}
            </div>
          ))}
          <p className="text-muted-foreground text-xs font-body mt-6">
            Investor discussions and data room access available upon request.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="bg-card border border-primary/30 rounded-xl p-8 text-center">
              <p className="text-primary font-display text-xl">Thank you!</p>
              <p className="text-muted-foreground font-body text-sm mt-2">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "organization", label: "Organization", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="text-sm text-muted-foreground font-body block mb-1.5">{f.label}</label>
                  <input type={f.type} required className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-sm text-muted-foreground font-body block mb-1.5">Message</label>
                <textarea rows={4} required className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
