import SectionWrapper from "./SectionWrapper";

const steps = [
  { num: "01", title: "Feasibility & Baseline", desc: "Comprehensive land-use assessment, stakeholder mapping, and baseline carbon stock analysis." },
  { num: "02", title: "Project Design", desc: "Methodology selection aligned with VCS/CCB requirements and customized monitoring plans." },
  { num: "03", title: "Validation", desc: "Third-party validation by accredited VVBs ensuring conformance with chosen standards." },
  { num: "04", title: "Implementation", desc: "Community-centered execution with adaptive management and continuous safeguard monitoring." },
  { num: "05", title: "Verification & Issuance", desc: "Periodic verification, credit issuance, and transparent reporting to stakeholders." },
];

const ApproachSection = () => (
  <SectionWrapper id="our-approach">
    <div className="max-w-3xl mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Our Approach</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        End-to-End Project Lifecycle
      </h2>
      <p className="text-muted-foreground text-lg font-body">
        A structured, phased approach from feasibility to credit issuance — built on PMBOK® principles for predictable, high-quality delivery.
      </p>
    </div>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

      <div className="space-y-8">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-6 md:gap-10 items-start">
            <div className="flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-secondary border border-border flex items-center justify-center relative z-10">
              <span className="text-primary font-body font-semibold text-sm md:text-base">{s.num}</span>
            </div>
            <div className="pt-1 md:pt-3">
              <h3 className="font-display text-xl text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ApproachSection;
