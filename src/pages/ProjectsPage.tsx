import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Leaf, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  subtitle: string;
  type: string;
  standard: string;
  area: string;
  partner: string;
  summary: string[];
  objectives: string[];
}

const projects: Project[] = [
  {
    id: "mangrove-nigeria",
    icon: Waves,
    title: "Nigeria Niger Delta Mangrove Restoration & Blue Carbon Project",
    shortTitle: "Nigeria Mangrove",
    subtitle: "Nigeria, Africa",
    type: "Blue Carbon + CCB",
    standard: "VCS+CCB Gold",
    area: "10,000 ha",
    partner: "TRCC",
    summary: [
      "Restores degraded mangrove ecosystems across the Niger Delta",
      "Generates ~8.2M tCO₂e over 40 years",
      "Supports 30,000+ local beneficiaries",
    ],
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
    shortTitle: "Faith Afforestation",
    subtitle: "South India",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "6,000 ha",
    partner: "Carboneutrivo / FRLHT / ConnectGlocal",
    summary: [
      "Faith-driven afforestation across 6,000 ha of degraded lands",
      "Plants native & IUCN Red List threatened species",
      "Creates livelihoods & integrates environmental education",
    ],
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
    shortTitle: "Kenya Mangrove",
    subtitle: "Kenya, Africa",
    type: "AFOLU",
    standard: "VCS+CCB Gold",
    area: "10,000 ha",
    partner: "GBFA & Mazingira Na Jamii Afrika",
    summary: [
      "Rehabilitates degraded mangrove ecosystems in Kenya",
      "Aligns with Kenya's NDCs under Verra VCS & CCB",
      "Community-led governance with 60% revenue share",
    ],
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
    shortTitle: "Agroforestry",
    subtitle: "Karnataka, India",
    type: "ARR",
    standard: "VCS",
    area: "8,500 ha",
    partner: "",
    summary: [
      "Integrates tree cultivation with crops and livestock",
      "Improves soil health and biodiversity",
      "Diversifies farmer income",
    ],
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
    shortTitle: "Bamboo Plantation",
    subtitle: "Shillong, India",
    type: "ARR",
    standard: "VCS",
    area: "3,200 ha",
    partner: "",
    summary: [
      "Bamboo-based agroforestry on erosion-prone terrain",
      "Enhances carbon sequestration capacity",
      "Creates bamboo-based livelihood opportunities",
    ],
    objectives: [
      "Integrate bamboo into agroforestry systems",
      "Enhance carbon sequestration capacity",
      "Prevent soil erosion and improve water retention",
      "Promote biodiversity restoration",
      "Create bamboo-based livelihood opportunities",
    ],
  },
];

const ProjectsPage = () => {
  const { hash } = useLocation();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash) {
      const idx = projects.findIndex((p) => p.id === hash.slice(1));
      if (idx !== -1) {
        setActiveIdx(idx);
        setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
      }
    }
  }, [hash]);

  const handleSelect = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
    if (activeIdx !== idx) {
      setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    }
  };

  const count = projects.length;
  const getPosition = (i: number, radius: number) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
  };

  // Determine what to show in center: hovered project summary or default label
  const centerProject = hoveredIdx !== null ? projects[hoveredIdx] : activeIdx !== null ? projects[activeIdx] : null;

  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-12">
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
            Our ongoing projects integrate science, community participation, and internationally recognized
            methodologies to deliver measurable climate, biodiversity, and socio-economic impact.
          </p>
        </motion.div>
      </section>

      {/* Orbital Navigator */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex justify-center">
          {/* Desktop: circular orbit */}
          <div className="hidden md:block relative" style={{ width: 600, height: 600 }}>
            {/* Orbit rings */}
            <div className="absolute inset-8 rounded-full border border-primary/15" />
            <div className="absolute inset-16 rounded-full border border-primary/10" />

            {/* Center panel — shows summary on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <AnimatePresence mode="wait">
                  {centerProject ? (
                    <motion.div
                      key={centerProject.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-center px-3"
                    >
                      <span className="text-primary font-display text-[11px] leading-tight block mb-1">
                        {centerProject.shortTitle}
                      </span>
                      <ul className="text-[8px] text-muted-foreground font-body leading-tight space-y-0.5 text-left">
                        {centerProject.summary.map((s, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-primary mt-[2px]">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-primary font-display text-sm text-center leading-tight px-2"
                    >
                      Active<br />Projects
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Orbit nodes */}
            {projects.map((p, i) => {
              const pos = getPosition(i, 240);
              const isActive = activeIdx === i;
              const isMangrove = p.id.includes("mangrove");
              // Color-code mangrove projects differently
              const nodeAccent = p.id === "mangrove-nigeria"
                ? "bg-[hsl(var(--chart-1))]"
                : p.id === "mangrove-kenya"
                ? "bg-[hsl(var(--chart-2))]"
                : "";

              return (
                <motion.button
                  key={p.id}
                  onClick={() => handleSelect(i)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" }}
                  className="absolute group"
                  style={{
                    left: `calc(50% + ${pos.x}px - 52px)`,
                    top: `calc(50% + ${pos.y}px - 52px)`,
                  }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-primary/40"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div
                    className={`w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer relative ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                        : "bg-foreground/[0.06] border border-foreground/10 hover:border-primary/40 hover:bg-primary/10 text-foreground"
                    }`}
                  >
                    {/* Country indicator dot for mangrove projects */}
                    {isMangrove && !isActive && (
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${nodeAccent} border-2 border-background`} />
                    )}
                    <p.icon size={18} className={isActive ? "text-primary-foreground" : "text-primary"} />
                    <span className={`text-[9px] font-body font-semibold mt-1.5 text-center leading-tight px-1 ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                      {p.shortTitle}
                    </span>
                    <span className={`text-[8px] font-body mt-0.5 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {p.subtitle}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile: pills */}
          <div className="md:hidden flex flex-wrap justify-center gap-3 px-2">
            {projects.map((p, i) => {
              const isActive = activeIdx === i;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => handleSelect(i)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-foreground/[0.04] border-foreground/10 text-foreground hover:border-primary/30"
                  }`}
                >
                  <p.icon size={16} className={isActive ? "text-primary-foreground" : "text-primary"} />
                  <span className={`text-xs font-body font-medium ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>
                    {p.shortTitle}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {activeIdx === null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-muted-foreground/60 text-sm font-body mt-8"
          >
            Select a project to explore details
          </motion.p>
        )}
      </section>

      {/* Project Detail Panel */}
      <div ref={detailsRef} className="scroll-mt-24">
        <AnimatePresence mode="wait">
          {activeIdx !== null && (
            <motion.section
              key={projects[activeIdx].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="container mx-auto px-4"
            >
              <div className="max-w-4xl mx-auto rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-sm p-8 md:p-12">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {(() => { const Icon = projects[activeIdx].icon; return <Icon className="text-primary" size={26} />; })()}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-display text-primary leading-snug">
                      {projects[activeIdx].title}
                    </h2>
                    <span className="text-sm text-muted-foreground font-body">{projects[activeIdx].subtitle}</span>
                  </div>
                </div>

                {/* Meta badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-body">{projects[activeIdx].type}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground font-body">{projects[activeIdx].standard}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground font-body">{projects[activeIdx].area}</span>
                  {projects[activeIdx].partner && (
                    <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-muted-foreground font-body">Partner: {projects[activeIdx].partner}</span>
                  )}
                </div>

                {/* Description as bullet points */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary font-body mb-4">Key Objectives</h3>
                  <ul className="space-y-3">
                    {projects[activeIdx].objectives.map((obj, j) => (
                      <motion.li
                        key={obj}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + j * 0.06 }}
                        className="text-base md:text-lg text-muted-foreground font-body flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        {obj}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsPage;
