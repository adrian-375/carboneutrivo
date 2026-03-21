import { motion } from "framer-motion";
import { Shield, FlaskConical, Scale, Users, DollarSign, Eye, TrendingUp } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const pillars = [
  {
    num: "01",
    icon: Shield,
    title: "Environmental Integrity",
    desc: "Integrity is non-negotiable. Carboneutrivo ensures every carbon credit represents a real, additional, measurable, and permanent climate benefit. Our projects are developed using conservative baselines, robust additionality assessments, and long-term permanence safeguards aligned with internationally recognised standards.",
  },
  {
    num: "02",
    icon: FlaskConical,
    title: "Scientific & Technical Excellence",
    desc: "Our solutions are science-led and data-driven. Carboneutrivo applies rigorous MRV systems, peer-reviewed methodologies, field measurements, and uncertainty management to deliver defensible and auditable climate outcomes across AFOLU, blue carbon, and nature-based solutions.",
  },
  {
    num: "03",
    icon: Scale,
    title: "Regulatory & Standard Compliance",
    desc: "We operate with full compliance to global voluntary carbon standards, national regulations, and emerging international frameworks. All projects are designed to be audit-ready, transparent, and resilient to regulatory evolution.",
  },
  {
    num: "04",
    icon: Users,
    title: "Community & Stakeholder Trust",
    desc: "Communities are central to our projects. Through Free, Prior and Informed Consent (FPIC), equitable benefit sharing, and long-term partnerships, Carboneutrivo ensures social acceptance, permanence, and shared value creation.",
  },
  {
    num: "05",
    icon: DollarSign,
    title: "Financial Discipline & Commercial Viability",
    desc: "We structure projects with conservative emission reduction estimates, transparent cost models, and realistic revenue assumptions. This ensures long-term financial sustainability while maintaining environmental integrity.",
  },
  {
    num: "06",
    icon: Eye,
    title: "Transparency & Ethical Governance",
    desc: "Trust underpins everything we do. Carboneutrivo maintains clear carbon ownership, traceable claims, strong governance frameworks, and ethical business practices across all operations.",
  },
  {
    num: "07",
    icon: TrendingUp,
    title: "Long-Term Climate Impact & Innovation",
    desc: "Our projects are designed for 20–40 year horizons. We integrate innovation, digital MRV, and adaptive management to enhance climate resilience, ecosystem restoration, and long-term impact.",
  },
];

const ApproachPage = () => (
  <div className="pt-32 pb-20 bg-white">
    {/* Hero */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-body tracking-widest uppercase">Our Approach</span>
        <h1 className="text-4xl md:text-6xl font-display mt-4 mb-8 text-primary">
          Building High-Integrity Climate Solutions for the Long Term
        </h1>
        <p className="text-lg md:text-xl text-[#1a1a1a] font-body leading-relaxed max-w-3xl mx-auto">
          At Carboneutrivo, we believe carbon markets must deliver real climate impact, lasting community value, and
          credible returns for investors. Our work is guided by seven core pillars that define how we design, implement,
          and scale high-integrity carbon projects globally.
        </p>
      </motion.div>
    </section>

    {/* Pillars */}
    <section className="container mx-auto px-4 mb-20">
      <div className="section-divider mb-16" />
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-primary mb-12 text-center">
          Core Pillars of Carboneutrivo
        </h2>
        <div className="space-y-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <p.icon className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-primary/50 text-xs font-body font-semibold tracking-widest">{p.num}</span>
                    <h3 className="font-display text-xl text-primary">{p.title}</h3>
                  </div>
                  <p className="text-[#1a1a1a] text-sm font-body leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Commitment */}
    <section className="container mx-auto px-4 pb-10">
      <motion.div {...fadeUp} className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">Our Commitment</h2>
          <p className="text-[#1a1a1a] font-body leading-relaxed">
            Carboneutrivo does not merely generate carbon credits. We build credible, science-backed climate assets that
            deliver lasting environmental, social, and economic value.
          </p>
        </div>
      </motion.div>
    </section>
  </div>
);

export default ApproachPage;
