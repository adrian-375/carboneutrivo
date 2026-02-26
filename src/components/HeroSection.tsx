import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Lush forest canopy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 hero-overlay" />

    {/* Decorative molecule dots */}
    <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary/60 glow-dot hidden md:block" />
    <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-primary/40 glow-dot hidden md:block" />
    <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-primary/50 glow-dot hidden md:block" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-body mb-8"
      >
        Structured Climate Solutions
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="hero-title text-7xl md:text-[9rem] lg:text-[11rem] font-display leading-[0.85] mb-8 tracking-tight"
      >
        <span className="hero-text-blend">Carbo</span>
        <span className="hero-text-accent">Neutrivo</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-body"
      >
        High-Integrity AFOLU Carbon Projects aligned with VCS, CCB Gold & SD VISta — delivered through a PMBOK®-aligned framework.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { num: "15+", label: "Carbon Projects" },
            { num: "500K+", label: "Tonnes CO₂ Offset" },
            { num: "12", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display text-foreground">{stat.num}</div>
              <div className="text-sm text-muted-foreground mt-1 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#our-approach">
        <ArrowDown className="text-muted-foreground animate-bounce" size={24} />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
