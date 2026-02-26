import SectionWrapper from "./SectionWrapper";

const team = [
  { name: "Dr. Ananya Mehta", role: "Founder & CEO", bio: "15+ years in forestry carbon markets and UNFCCC negotiations." },
  { name: "James Kariuki", role: "Head of Project Development", bio: "Former Verra technical reviewer with expertise in REDD+ methodologies." },
  { name: "Dr. Clara Fontaine", role: "Chief Science Officer", bio: "Remote sensing specialist and lead author on MRV best practices." },
  { name: "Ravi Shankar", role: "Governance & Compliance", bio: "Legal expert in international carbon markets and Article 6 frameworks." },
];

const TeamSection = () => (
  <SectionWrapper id="our-team">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Our Team</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        Leadership
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((t) => (
        <div key={t.name} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors">
          <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
            <span className="text-primary font-display text-xl">
              {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
          </div>
          <h3 className="font-display text-base text-foreground">{t.name}</h3>
          <p className="text-primary text-xs font-body mt-1 mb-3">{t.role}</p>
          <p className="text-muted-foreground text-xs font-body leading-relaxed">{t.bio}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TeamSection;
