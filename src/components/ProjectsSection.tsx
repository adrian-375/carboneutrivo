import SectionWrapper from "./SectionWrapper";
import { MapPin } from "lucide-react";

const projects = [
  { name: "Tropical Reforestation Initiative", location: "Indonesia", type: "ARR", status: "Active", area: "12,000 ha" },
  { name: "Community Forest Conservation", location: "DR Congo", type: "REDD+", status: "Validation", area: "45,000 ha" },
  { name: "Coastal Mangrove Restoration", location: "Myanmar", type: "Blue Carbon", status: "Active", area: "3,200 ha" },
  { name: "Degraded Land Revegetation", location: "India", type: "ARR", status: "Planning", area: "8,500 ha" },
];

const statusColor: Record<string, string> = {
  Active: "bg-primary/20 text-primary",
  Validation: "bg-cream/10 text-cream",
  Planning: "bg-muted text-muted-foreground",
};

const ProjectsSection = () => (
  <SectionWrapper id="ongoing-projects">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Ongoing Projects</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        Active Portfolio
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <div key={p.name} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-lg text-foreground">{p.name}</h3>
            <span className={`text-xs px-2.5 py-1 rounded-full font-body ${statusColor[p.status]}`}>
              {p.status}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1"><MapPin size={14} /> {p.location}</span>
            <span>{p.type}</span>
            <span>{p.area}</span>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
