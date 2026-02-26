import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, Leaf, Recycle, Waves } from "lucide-react";

const projects = [
  {
    id: "mangrove-nigeria",
    icon: Waves,
    title: "Mangrove Restoration",
    subtitle: "Nigeria",
    overview:
      "A blue carbon restoration initiative focused on rehabilitating degraded mangrove ecosystems under Verra's VM0033 methodology, enhancing coastal resilience, biodiversity, and community livelihoods.",
    location: "Coastal and estuarine landscapes vulnerable to erosion, pollution, and hydrological disruption.",
    objectives: [
      "Restore degraded wetlands through native mangrove planting",
      "Increase carbon sequestration under VM0033",
      "Enhance biodiversity and control invasive species",
      "Strengthen sustainable livelihood opportunities",
      "Improve coastal climate resilience",
    ],
  },
  {
    id: "sustainable-agriculture-south",
    icon: Leaf,
    title: "Sustainable Agriculture",
    subtitle: "Karnataka & Tamil Nadu",
    overview:
      "An agroforestry-based climate-smart agriculture project registered under Verra VM0042, promoting soil restoration, biodiversity enhancement, and carbon sequestration.",
    location: "Agricultural regions across Karnataka and Tamil Nadu facing climate variability and soil degradation.",
    objectives: [
      "Introduce agroforestry systems for smallholder farmers",
      "Increase carbon sequestration through tree integration",
      "Improve soil fertility and water retention",
      "Enhance biodiversity and ecosystem services",
      "Strengthen farmer climate resilience",
    ],
  },
  {
    id: "agroforestry-karnataka",
    icon: TreePine,
    title: "Agroforestry Project",
    subtitle: "Karnataka",
    overview:
      "A climate mitigation initiative integrating tree cultivation with crops and livestock to improve soil health, biodiversity, and farmer income diversification.",
    location: "Multiple agro-ecological zones across Karnataka vulnerable to climate variability.",
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
    subtitle: "Shillong",
    overview:
      "A bamboo-based agroforestry initiative designed to mitigate climate change, restore degraded landscapes, and create sustainable economic opportunities.",
    location: "Hilly and erosion-prone regions of Shillong and surrounding areas.",
    objectives: [
      "Integrate bamboo into agroforestry systems",
      "Enhance carbon sequestration capacity",
      "Prevent soil erosion and improve water retention",
      "Promote biodiversity restoration",
      "Create bamboo-based livelihood opportunities",
    ],
  },
  {
    id: "plastic-recycling-west-bengal",
    icon: Recycle,
    title: "Plastic Waste & Recycling",
    subtitle: "West Bengal",
    overview:
      "A circular economy initiative reducing plastic pollution through structured collection, recycling, and upcycling systems.",
    location: "Urban and peri-urban regions with high plastic waste generation.",
    objectives: [
      "Establish structured plastic waste collection systems",
      "Improve recycling and upcycling rates",
      "Promote segregation at source",
      "Create green employment opportunities",
      "Reduce environmental plastic pollution",
    ],
  },
];

const ProjectsPage = () => {
  const { hash } = useLocation();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
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

  // Calculate position for each node on the orbit
  const count = projects.length;
  const getPosition = (i: number, radius: number) => {
    const angle = (i / count) * 2 * Math.PI - Math.PI / 2; // start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

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
          <div className="hidden md:block relative" style={{ width: 520, height: 520 }}>
            {/* Orbit ring */}
            <div className="absolute inset-8 rounded-full border border-primary/15" />
            <div className="absolute inset-16 rounded-full border border-primary/10" />

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                <span className="text-primary font-display text-sm text-center leading-tight px-2">
                  Active<br />Projects
                </span>
              </div>
            </div>

            {/* Orbit nodes */}
            {projects.map((p, i) => {
              const pos = getPosition(i, 210);
              const isActive = activeIdx === i;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => handleSelect(i)}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, type: "spring" }}
                  className="absolute group"
                  style={{
                    left: `calc(50% + ${pos.x}px - 48px)`,
                    top: `calc(50% + ${pos.y}px - 48px)`,
                  }}
                >
                  {/* Pulse ring when active */}
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-primary/40"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <div
                    className={`w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                        : "bg-foreground/[0.06] border border-foreground/10 hover:border-primary/40 hover:bg-primary/10 text-foreground"
                    }`}
                  >
                    <p.icon size={20} className={isActive ? "text-primary-foreground" : "text-primary"} />
                    <span className={`text-[10px] font-body font-medium mt-1.5 text-center leading-tight px-1 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}>
                      {p.title}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile: horizontal scrollable pills */}
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
                    {p.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Hint text */}
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
                    <h2 className="text-2xl md:text-4xl font-display text-primary">
                      {projects[activeIdx].title}
                    </h2>
                    <span className="text-sm text-muted-foreground font-body">{projects[activeIdx].subtitle}</span>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-widest text-primary font-body mb-3">Overview</h3>
                  <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed">
                    {projects[activeIdx].overview}
                  </p>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-widest text-primary font-body mb-3">Location</h3>
                  <p className="text-base text-muted-foreground font-body leading-relaxed">
                    {projects[activeIdx].location}
                  </p>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-primary font-body mb-4">Key Objectives</h3>
                  <ul className="space-y-3">
                    {projects[activeIdx].objectives.map((obj, j) => (
                      <motion.li
                        key={obj}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + j * 0.06 }}
                        className="text-base text-muted-foreground font-body flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
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
