import SectionWrapper from "./SectionWrapper";
import { Leaf, Target, Shield } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Ecological Integrity", desc: "Projects rooted in verified AFOLU methodologies that deliver measurable environmental outcomes." },
  { icon: Target, title: "Measurable Impact", desc: "Rigorous MRV frameworks ensuring transparent, quantifiable carbon sequestration results." },
  { icon: Shield, title: "Governance First", desc: "PMBOK®-aligned project management with institutional-grade compliance and oversight." },
];

const AboutSection = () => (
  <SectionWrapper id="about-us">
    <div className="max-w-3xl">
      <span className="text-primary text-sm font-body tracking-widest uppercase">About Us</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        Advancing Climate Action Through Integrity
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed font-body">
        CARBONEUTRIVO is a climate solutions company specializing in high-integrity AFOLU carbon projects. We combine deep technical expertise with rigorous governance to develop projects aligned with the world's most stringent certification standards — VCS, CCB Gold, and SD VISta.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-14">
      {pillars.map((p) => (
        <div key={p.title} className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors group">
          <p.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-display text-xl text-foreground mb-2">{p.title}</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AboutSection;
