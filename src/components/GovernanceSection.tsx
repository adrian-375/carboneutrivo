import SectionWrapper from "./SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const items = [
  "VCS (Verified Carbon Standard) compliance",
  "CCB Gold Standard co-benefits validation",
  "SD VISta Sustainable Development verification",
  "Independent third-party auditing",
  "Transparent stakeholder reporting",
  "Anti-fraud & permanence safeguards",
];

const GovernanceSection = () => (
  <SectionWrapper id="governance---integrity">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-primary text-sm font-body tracking-widest uppercase">Governance & Integrity</span>
        <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
          Built on Trust & Transparency
        </h2>
        <p className="text-muted-foreground text-lg font-body leading-relaxed">
          Every project operates under a multi-layered governance framework ensuring environmental integrity, social safeguards, and financial transparency at every stage.
        </p>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
            <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
            <span className="text-foreground text-sm font-body">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default GovernanceSection;
