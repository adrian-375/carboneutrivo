import { motion } from "framer-motion";
import { Waves, Leaf, TreePine, MapPin, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  type: string;
  standard: string;
  area: string;
  partner: string;
  objectives: string[];
}

const projects: Project[] = [
  {
    id: "mangrove-nigeria",
    icon: Waves,
    title: "Nigeria Niger Delta Mangrove Restoration & Blue Carbon Project",
    subtitle: "Nigeria, Africa",
    type: "Blue Carbon + CCB",
    standard: "VCS+CCB Gold",
    area: "10,000 ha",
    partner: "TRCC",
    objectives: [
      "Restores degraded mangrove ecosystems across the Niger Delta using native species: Rhizophora racemosa, Avicennia germinans, and Laguncularia racemosa",
      "Generates ~8.2 million tCO₂e over 40 years through biomass and sediment carbon sequestration",
      "Supports 30,000+ local beneficiaries via mangrove-friendly aquaculture, eco-tourism, nursery development, and green jobs",
      "Identifies and protects High Conservation Value (HCV) areas for biodiversity and ecosystem services",
      "Strengthens women and youth Self-Help Groups (SHGs) for income generation and equitable benefit-sharing",
      "Ensures Free, Prior, and Informed Consent (FPIC) and transparent community governance",
    ],
  },
  {
    id: "faith-afforestation-india",
    icon: Leaf,
    title: "Faith-Based Climate Stewardship Initiative: Net Zero through Community-Led Afforestation",
    subtitle: "South India",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "6,000 ha",
    partner: "Carboneutrivo / FRLHT / ConnectGlocal",
    objectives: [
      "Faith-driven afforestation led by the Church of South India across 6,000 ha of degraded and church-owned lands",
      "Plants native and medicinal tree species including IUCN Red List threatened species",
      "Creates livelihoods through nursery development, plantation work, and long-term monitoring",
      "Promotes medicinal plants for improved health outcomes and alternative income",
      "Identifies and protects HCV areas through community participation",
      "Reduces rural migration and improves ecological resilience through a clear theory of change",
      "Integrates environmental education aligned with faith-based principles of creation care",
    ],
  },
  {
    id: "mangrove-kenya",
    icon: Waves,
    title: "Mangrove Restoration Project in Kenya",
    subtitle: "Kenya, Africa",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "10,000 ha",
    partner: "GBFA & Mazingira Na Jamii Afrika",
    objectives: [
      "Rehabilitates degraded mangrove ecosystems using native species: Rhizophora, Avicennia, and Sonneratia",
      "Restores hydrological connectivity and sediment processes for long-term carbon sequestration",
      "Strengthens coastal protection and ecosystem resilience to climate change and sea-level rise",
      "Aligns with Kenya's Nationally Determined Contributions (NDCs) under Verra VCS and CCB standards",
      "Community-led governance with FPIC, transparent benefit-sharing, and 60% revenue share to local partners",
      "Generates livelihoods via restoration employment, aquaculture, fisheries, eco-tourism, and clean energy",
      "Restores native habitats, reconnects fragmented mangrove systems, and enhances species conservation",
    ],
  },
  {
    id: "agroforestry-karnataka",
    icon: TreePine,
    title: "Agroforestry Project",
    subtitle: "Karnataka, India",
    type: "ARR",
    standard: "VCS",
    area: "8,500 ha",
    partner: "",
    objectives: [
      "Promote silvopasture and agro-silviculture systems",
      "Increase carbon sequestration through tree planting",
      "Restore soil structure and reduce erosion",
      "Create diversified income streams for farmers",
      "Enhance long-term agricultural resilience",
    ],
  },
  {
    id: "bamboo-shillong",
    icon: TreePine,
    title: "Native Bamboo Plantation",
    subtitle: "Shillong, India",
    type: "ARR",
    standard: "VCS",
    area: "3,200 ha",
    partner: "",
    objectives: [
      "Integrate bamboo into agroforestry systems",
      "Enhance carbon sequestration capacity",
      "Prevent soil erosion and improve water retention",
      "Promote biodiversity restoration",
      "Create bamboo-based livelihood opportunities",
    ],
  },
];

const ProjectsPage = () => (
  <div className="pt-32 pb-20 bg-white overflow-x-hidden">
    {/* Hero */}
    <section className="container mx-auto px-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-primary text-sm tracking-widest uppercase font-body">Ongoing Projects</span>
        <h1 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-primary">
          Climate & Sustainability Initiatives
        </h1>
        <p className="text-base md:text-lg text-[#1a1a1a] font-body max-w-3xl mx-auto leading-relaxed">
          Our ongoing projects integrate science, community participation, and internationally recognized
          methodologies to deliver measurable climate, biodiversity, and socio-economic impact.
        </p>
      </motion.div>
    </section>

    {/* All Project Cards */}
    <section className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="text-primary" size={26} />
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-display text-primary leading-snug">{p.title}</h2>
                <span className="text-sm text-gray-500 font-body flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {p.subtitle}
                </span>
              </div>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-body">{p.type}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-[#1a1a1a] font-body">{p.standard}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-body">{p.area}</span>
              {p.partner && (
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-body flex items-center gap-1">
                  <Users size={12} /> {p.partner}
                </span>
              )}
            </div>

            {/* Objectives */}
            <h3 className="text-sm uppercase tracking-widest text-primary font-body mb-4">Key Objectives</h3>
            <ul className="space-y-3">
              {p.objectives.map((obj) => (
                <li key={obj} className="text-base md:text-lg text-[#1a1a1a] font-body flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default ProjectsPage;
