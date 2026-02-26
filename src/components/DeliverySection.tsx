import SectionWrapper from "./SectionWrapper";

const phases = [
  { phase: "Initiation", items: ["Project charter", "Stakeholder register", "Preliminary feasibility"] },
  { phase: "Planning", items: ["PDD development", "Monitoring plan", "Risk register", "Budget & schedule"] },
  { phase: "Execution", items: ["Field implementation", "Community engagement", "Data collection"] },
  { phase: "Monitoring & Control", items: ["MRV activities", "Quality assurance", "Change management"] },
  { phase: "Closing", items: ["Verification audit", "Credit issuance", "Lessons learned"] },
];

const DeliverySection = () => (
  <SectionWrapper id="project-delivery-framework">
    <div className="max-w-3xl mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Project Delivery Framework</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        PMBOK®-Aligned Delivery
      </h2>
      <p className="text-muted-foreground text-lg font-body">
        Our five-phase framework ensures structured, repeatable delivery with built-in quality gates.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {phases.map((p, i) => (
        <div key={p.phase} className="bg-card border border-border rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-3 right-3 text-4xl font-display text-muted/30">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-display text-base text-primary mb-3">{p.phase}</h3>
          <ul className="space-y-1.5">
            {p.items.map((item) => (
              <li key={item} className="text-muted-foreground text-xs font-body flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default DeliverySection;
