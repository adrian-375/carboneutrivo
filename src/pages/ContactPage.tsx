import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <span className="text-primary text-sm font-body tracking-widest uppercase">Contact</span>
          <h1 className="text-3xl md:text-5xl font-display text-primary mb-4 mt-3">Contact Us</h1>
          <p className="text-lg text-[#1a1a1a] font-body leading-relaxed">
            Ready to develop a high integrity carbon project? Let's discuss how we can help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[#1a1a1a] font-body text-sm">
                <Phone className="text-primary" size={18} />
                +91 8310624214
              </div>
              <div className="flex items-center gap-3 text-[#1a1a1a] font-body text-sm">
                <MapPin className="text-primary" size={18} />
                WeWork Embassy One, Hebbal, Bangalore
              </div>
              <p className="text-gray-500 text-xs font-body mt-6">
                Investor discussions and data room access available upon request.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="bg-white border border-primary/30 rounded-xl p-8 text-center shadow-sm">
                  <p className="text-primary font-display text-xl">Thank you!</p>
                  <p className="text-[#1a1a1a] font-body text-sm mt-2">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  {[
                    { name: "name", label: "Full Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "organization", label: "Organization", type: "text" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="text-sm text-gray-500 font-body block mb-1.5">{f.label}</label>
                      <input type={f.type} required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1a1a1a] text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm text-gray-500 font-body block mb-1.5">Message</label>
                    <textarea rows={4} required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1a1a1a] text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
