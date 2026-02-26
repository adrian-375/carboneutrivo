import SectionWrapper from "./SectionWrapper";
import { ShieldAlert, Users, BarChart3, Scale } from "lucide-react";

const risks = [
  { icon: ShieldAlert, title: "Permanence Buffers", desc: "Pooled buffer accounts and insurance mechanisms mitigating reversal risk across portfolios." },
  { icon: Users, title: "Community Safeguards", desc: "FPIC protocols, benefit-sharing agreements, and grievance redressal mechanisms." },
  { icon: BarChart3, title: "Leakage Mitigation", desc: "Activity-shifting and market leakage assessment with conservative baseline approaches." },
  { icon: Scale, title: "Regulatory Compliance", desc: "Alignment with Article 6 frameworks and host-country NDC considerations." },
];

const RiskSection = () => (
  <SectionWrapper id="risk-management---safeguards">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Risk Management & Safeguards</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        Proactive Risk Architecture
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 gap-6">
      {risks.map((r) => (
        <div key={r.title} className="flex gap-5 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
            <r.icon className="text-primary" size={22} />
          </div>
          <div>
            <h3 className="font-display text-lg text-foreground mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default RiskSection;
