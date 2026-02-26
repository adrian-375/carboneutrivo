import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, TreePine, Satellite, Monitor, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import agricultureImg from "@/assets/service-agriculture.jpg";
import forestryImg from "@/assets/service-forestry.jpg";
import gisImg from "@/assets/service-gis.jpg";
import itImg from "@/assets/service-it.jpg";

const services = [
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    desc: "Expert consultancy in environmentally responsible and economically viable farming practices.",
    img: agricultureImg,
    link: "/expertise#sustainable-agriculture",
  },
  {
    icon: TreePine,
    title: "Forestry",
    desc: "Sustainable forestry management, conservation and long term ecosystem benefits.",
    img: forestryImg,
    link: "/expertise#sustainable-forestry",
  },
  {
    icon: Satellite,
    title: "GIS & Remote Sensing",
    desc: "Advanced geospatial technologies for sustainable agriculture and forestry monitoring.",
    img: gisImg,
    link: "/expertise#gis-remote-sensing",
  },
  {
    icon: Monitor,
    title: "IT Services",
    desc: "Technology solutions for AFOLU project implementation, monitoring and data management.",
    img: itImg,
    link: "/expertise#it-solutions",
  },
];

const scrollToContent = () => {
  document.getElementById("earth-friendly")?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => (
  <div className="overflow-x-hidden">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="Lush forest canopy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />

      <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/60 glow-dot hidden md:block" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-primary/40 glow-dot hidden md:block" />
      <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-primary/50 glow-dot hidden md:block" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="hero-title text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-display leading-[0.85] tracking-tight"
        >
          <span className="hero-text-blend">Carbo</span>
          <span className="hero-text-accent">Neutrivo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 text-lg md:text-xl text-foreground/80 font-body leading-relaxed max-w-3xl mx-auto"
        >
          High Integrity AFOLU Carbon Projects aligned with VCS, CCB Gold & SD VISta
          delivered through a PMBOK® aligned framework.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-4 text-base md:text-lg text-primary font-body font-medium tracking-wide"
        >
          Structured Climate Solutions with Verified Methodologies and Governance.
        </motion.p>
      </div>

      {/* 3D scroll arrow */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="relative w-14 h-14 flex items-center justify-center">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors duration-500 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]" />
          {/* Inner gradient disc */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-b from-primary/20 to-primary/5 backdrop-blur-sm" />
          {/* Arrow with bounce */}
          <ChevronDown className="relative text-primary animate-bounce" size={26} strokeWidth={2.5} />
        </div>
      </motion.button>
    </section>

    {/* Governance tagline */}
    <section className="py-16 md:py-20">
      <div className="section-divider mb-16" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="text-base md:text-lg text-muted-foreground font-body tracking-wide max-w-4xl mx-auto">
          Robust governance, safeguards, FPIC, dMRV, and double counting prevention embedded across all projects.
        </p>
      </motion.div>
    </section>

    {/* Earth-friendly box */}
    <section id="earth-friendly" className="pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 flex justify-center"
      >
        <div className="max-w-2xl w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-sm p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">
            Earth friendly!
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed">
            Carboneutrivo is a forward thinking company that specializes in two key areas: IT based consulting services
            and AFOLU (Agriculture, Forestry, and Other Land Use) carbon project development. Our mission is to help
            organizations and communities embrace sustainability through innovative technology and effective
            environmental initiatives.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Services — horizontal table layout */}
    <section className="pb-24 md:pb-32">
      <div className="section-divider mb-20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-body tracking-widest uppercase">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-display mt-3 text-foreground">Our Services</h2>
        </div>

        {/* Table-style rows */}
        <div className="max-w-6xl mx-auto border border-border rounded-xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={s.link}
                className={`group flex flex-col md:flex-row items-stretch hover:bg-primary/[0.04] transition-colors duration-300 ${
                  i < services.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Image thumbnail */}
                <div className="md:w-44 h-36 md:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 md:w-64 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="text-primary" size={18} />
                  </div>
                  <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1 flex items-center px-4 sm:px-6 pb-4 sm:pb-5 md:py-5">
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center pr-6">
                  <ChevronDown className="text-muted-foreground/40 group-hover:text-primary -rotate-90 transition-colors" size={20} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  </div>
);

export default Index;
