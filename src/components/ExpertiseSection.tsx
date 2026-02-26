import SectionWrapper from "./SectionWrapper";
import { TreePine, Sprout, Mountain, Waves } from "lucide-react";

const areas = [
  { icon: TreePine, title: "REDD+", desc: "Reducing emissions from deforestation and forest degradation with community benefit integration." },
  { icon: Sprout, title: "ARR", desc: "Afforestation, Reforestation, and Revegetation projects restoring degraded landscapes." },
  { icon: Mountain, title: "IFM", desc: "Improved Forest Management enhancing carbon stocks through sustainable forestry practices." },
  { icon: Waves, title: "Blue Carbon", desc: "Coastal and marine ecosystem conservation including mangroves, seagrass, and tidal marshes." },
];

const ExpertiseSection = () => (
  <SectionWrapper id="our-expertise">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <span className="text-primary text-sm font-body tracking-widest uppercase">Our Expertise</span>
      <h2 className="text-3xl md:text-5xl font-display mt-3 mb-6 text-foreground">
        AFOLU Methodologies
      </h2>
      <p className="text-muted-foreground text-lg font-body">
        Deep specialization across the full spectrum of land-use carbon project types.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {areas.map((a) => (
        <div key={a.title} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors group">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4 group-hover:bg-primary/10 transition-colors">
            <a.icon className="text-primary" size={24} />
          </div>
          <h3 className="font-display text-lg text-foreground mb-2">{a.title}</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed">{a.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExpertiseSection;
