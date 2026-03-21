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
    id: "afolu-png",
    icon: TreePine,
    title: "AFOLU Projects, Madang Province, PNG",
    subtitle: "Madang Province, Papua New Guinea",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "200,000+ ha",
    partner: "Mousa Forest Jaru Landowners Association",
    objectives: [
      "Collaboration with the Madang Provincial Government and local landowners for comprehensive climate-positive interventions",
      "Afforestation, Reforestation, and Revegetation (ARR) projects across degraded landscapes",
      "Mangrove Restoration and Blue Carbon Development for coastal ecosystem recovery",
      "Improved Forest Management (IFM) to enhance carbon stocks and forest integrity",
      "REDD+ aligned Forest Conservation Initiatives to reduce emissions from deforestation",
      "Sustainable Development Goals (SDGs) certifications for verified social and environmental impact",
      "Climate, Community & Biodiversity (CCB Gold) Certifications ensuring co-benefits across all project activities",
    ],
  },
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
    id: "afforestation-karnataka",
    icon: TreePine,
    title: "Developing Long-Term Carbon Assets through Afforestation in Karnataka",
    subtitle: "Multiple Districts of Karnataka, India",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "6,000 ha",
    partner: "Vedic Green Solutions",
    objectives: [
      "Builds high-integrity, long-term carbon assets through afforestation on smallholder lands in Karnataka",
      "Integrates fruit-bearing tree systems for combined ecological and economic benefit",
      "40-year project horizon ensuring permanence and long-term carbon sequestration",
      "55% carbon revenue share for participating farmers promoting equitable benefit distribution",
      "Registration planned under Verra VM0047 and CCB for strong climate, community, and biodiversity outcomes",
    ],
  },
  {
    id: "amritvan-india",
    icon: Leaf,
    title: "Project AMRITVAN: Restoring India's Medicinal Biodiversity for Climate, Health, and Livelihoods",
    subtitle: "Multiple Districts of Karnataka and North Eastern States of India",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "5,000 ha",
    partner: "ConnectGlocal Social Service Pvt Ltd & FRLHT",
    objectives: [
      "Pro-poor, community-led nature-based initiative focused on cultivating Rare, Endangered, and Threatened (RET) medicinal trees and shrubs",
      "Links community-based restoration with structured access to medicinal and herbal markets",
      "Integrates afforestation, biodiversity conservation, education, and primary health linkages",
      "Identifies and protects High Conservation Value (HCV) areas for biodiversity conservation",
      "Creates long-term green jobs and sustainable rural livelihoods",
      "60% revenue share for communities and local partners ensuring equitable benefit distribution",
    ],
  },
  {
    id: "bamboo-kerala",
    icon: TreePine,
    title: "Kerala Bamboo Restoration Initiative: A Nature-Based Climate & Livelihood Investment Project",
    subtitle: "Kerala, India",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "5,000 ha",
    partner: "Kerala Forest Research Institute",
    objectives: [
      "Community-centered landscape restoration through native bamboo-based restoration of degraded lands",
      "Enhances carbon sequestration while protecting High Conservation Value (HCV) areas and ecosystem integrity",
      "Restores native species, habitat connectivity, and ecological functions for biodiversity conservation",
      "Creates structured green jobs including nursery development, plantation activities, and sustainable bamboo management",
      "Theory of Change links ecosystem restoration with inclusive economic opportunities for community participation",
      "Establishes a scalable model for high-integrity nature-based investments in India",
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
];

const ProjectsPage = () => (
  <div className="pt-32 pb-20 overflow-x-hidden">
    {/* Hero */}
    <section className="container mx-auto px-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-primary text-sm tracking-widest uppercase font-body">Ongoing Projects</span>
        <h1 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-foreground">
          Climate & Sustainability Initiatives
        </h1>
        <p className="text-base md:text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
          Our ongoing projects integrate science, community participation, and internationally recognized methodologies
          to deliver measurable climate, biodiversity, and socio-economic impact.
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
            className="rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-sm p-8 md:p-12"
          >
            {/* Header */}
            <div className="flex items-start gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="text-primary" size={26} />
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-display text-primary leading-snug">{p.title}</h2>
                <span className="text-sm text-muted-foreground font-body flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {p.subtitle}
                </span>
              </div>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-body">{p.type}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground font-body">
                {p.standard}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground font-body">
                {p.area}
              </span>
              {p.partner && (
                <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground font-body flex items-center gap-1">
                  <Users size={12} /> {p.partner}
                </span>
              )}
            </div>

            {/* Objectives */}
            <h3 className="text-sm uppercase tracking-widest text-primary font-body mb-4">Key Objectives</h3>
            <ul className="space-y-3">
              {p.objectives.map((obj) => (
                <li key={obj} className="text-base md:text-lg text-muted-foreground font-body flex items-start gap-3">
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
