import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplets, Leaf, TreePine, Users, Satellite, Monitor } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const sections = [
  {
    id: "wetland-restoration",
    icon: Droplets,
    title: "Wetland Restoration & Conservation",
    desc: "We are committed to building a sustainable future through Wetland Restoration and Conservation, integrating advanced technology with ecological expertise to deliver end-to-end solutions that promote both environmental resilience and responsible business growth.",
  },
  {
    id: "sustainable-agriculture",
    icon: Leaf,
    title: "Sustainable Agriculture",
    desc: "We are committed to building a sustainable future by blending technology with environmental expertise, offering end-to-end solutions that drive both business success and global climate action. Our consultancy services in sustainable farming help clients implement climate-smart practices such as agroforestry, crop rotation, and organic farming to enhance productivity while minimising environmental impact.",
  },
  {
    id: "sustainable-forestry",
    icon: TreePine,
    title: "Sustainable Forestry",
    desc: "We specialise in a wide range of sustainable forestry practices aimed at conserving and restoring forest ecosystems for long-term environmental and economic benefits.",
    items: [
      "Afforestation, Reforestation, and Revegetation (ARR)",
      "Agricultural Land Management (ALM)",
      "Improved Forest Management (IFM)",
      "Reduced Emissions from Deforestation and Degradation (REDD)",
      "Avoided Conversion of Grasslands and Shrublands (ACoGS)",
      "Wetlands Restoration and Conservation (WRC)",
    ],
  },
  {
    id: "climate-community-biodiversity",
    icon: Users,
    title: "Climate, Community, and Biodiversity",
    desc: "By integrating science, standards, and stakeholder engagement, we help organisations advance nature-positive climate strategies that stand up to scrutiny and deliver measurable, lasting results.",
  },
  {
    id: "gis-remote-sensing",
    icon: Satellite,
    title: "GIS & Remote Sensing",
    desc: "We are committed to building a sustainable future by blending technology with environmental expertise. Our advanced geospatial technologies enable precise land monitoring, soil health assessments, deforestation tracking, and data analysis to support sustainable land and forest management.",
  },
  {
    id: "it-solutions",
    icon: Monitor,
    title: "IT Solutions",
    desc: "We provide IT consultancy tailored to AFOLU projects, including software development, data management, and GIS integration, streamlining project implementation and monitoring.",
  },
];

const ExpertisePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm font-body tracking-widest uppercase">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-display mt-4 mb-8 text-primary">What We Do</h1>
          <p className="text-lg md:text-xl text-[#1a1a1a] font-body leading-relaxed max-w-3xl mx-auto">
            Carbon Fund Generation & Management: We assist organisations in developing, managing, and monetising carbon
            offset projects, ensuring they meet international carbon standards and generate valuable credits for climate
            impact.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="scroll-mt-32 rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="text-primary" size={22} />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl text-primary mb-3">{s.title}</h2>
                  <p className="text-[#1a1a1a] text-sm font-body leading-relaxed">{s.desc}</p>
                  {s.items && (
                    <ul className="mt-5 space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="text-[#1a1a1a] text-xs font-body flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
