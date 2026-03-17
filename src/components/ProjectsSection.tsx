import SectionWrapper from "./SectionWrapper";
import { MapPin, Users } from "lucide-react";

const projects = [
  {
    name: "Nigeria Niger Delta Mangrove Restoration & Blue Carbon Project",
    location: "Nigeria, Africa",
    type: "Blue Carbon + CCB",
    standard: "VCS+CCB Gold",
    area: "10,000 ha",
    partner: "TRCC",
  },
  {
    name: "Faith-Based Climate Stewardship Initiative: Net Zero through Community-Led Afforestation",
    location: "South India",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "6,000 ha",
    partner: "Carboneutrivo / FRLHT / ConnectGlocal",
  },
  {
    name: "Mangrove Restoration Project in Kenya",
    location: "Kenya, Africa",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "10,000 ha",
    partner: "GBFA & Mazingira Na Jamii Afrika",
  },
  {
    name: "Agroforestry Project — Karnataka",
    location: "Karnataka, India",
    type: "ARR",
    standard: "VCS",
    area: "8,500 ha",
    partner: "",
  },
  {
    name: "Native Bamboo Plantation — Shillong",
    location: "Shillong, India",
    type: "ARR",
    standard: "VCS",
    area: "3,200 ha",
    partner: "",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="ongoing-projects">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Ongoing Projects</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        Active Portfolio
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
          <div className="flex items-start justify-between mb-3 gap-2">
            <h3 className="font-display text-base text-foreground leading-snug">{p.name}</h3>
            <span className="text-[10px] px-2.5 py-1 rounded-full font-body bg-primary/20 text-primary whitespace-nowrap flex-shrink-0">
              {p.type}
            </span>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1"><MapPin size={14} /> {p.location}</span>
            <span>{p.standard}</span>
            <span>{p.area}</span>
          </div>
          {p.partner && (
            <div className="mt-2 text-xs text-muted-foreground font-body flex items-center gap-1">
              <Users size={12} /> {p.partner}
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
