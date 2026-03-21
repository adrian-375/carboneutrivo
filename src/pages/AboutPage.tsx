import { motion } from "framer-motion";
import { Shield, Users, BarChart3, Target, Leaf, Sprout, Globe, Monitor, Recycle, FlaskConical } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const principles = [
  { icon: Shield, title: "Integrity & Transparency", desc: "Upholding the highest standards of carbon and claims integrity." },
  { icon: Users, title: "Community & Equity", desc: "Ensuring meaningful participation, FPIC, and fair benefit sharing." },
  { icon: BarChart3, title: "Science Based Action", desc: "Grounding decisions in robust data and best practice methodologies." },
  { icon: Target, title: "Long Term Impact", desc: "Designing projects for permanence, resilience, and scalability." },
];

const expertiseItems = [
  "AFOLU & Nature Based Carbon Project Development (VCS, CCB Gold, SD VISta)",
  "Mangrove, Forest & Landscape Restoration",
  "Carbon Accounting, MRV & Digital Monitoring (GIS, Remote Sensing, PMRV)",
  "Community Centric Project Design & FPIC Implementation",
  "Sustainability & Climate Advisory for Institutions and Corporates",
];

const services = [
  { icon: Leaf, title: "Sustainable Agriculture", text: "Expert consultancy in eco friendly farming techniques including crop rotation, agroforestry, organic farming, and conservation tillage to improve soil health, conserve water, and boost biodiversity." },
  { icon: Sprout, title: "Sustainable Forestry", text: "Forest management planning, reforestation, agroforestry, and biodiversity conservation to reduce deforestation, enhance carbon sequestration, and build forest resilience." },
  { icon: Globe, title: "GIS & Remote Sensing", text: "Precise mapping, land monitoring, deforestation tracking, and soil health assessments using advanced geospatial technologies for informed decision making." },
  { icon: Monitor, title: "IT Consultancy for AFOLU", text: "Software development, data management, and GIS integration to streamline workflows, improve data accuracy, and support effective decision making in carbon and land use projects." },
  { icon: Recycle, title: "Plastic Waste & Recycling", text: "Strategic solutions for plastic waste management, recycling technology integration, and circular economy implementation to mitigate pollution." },
  { icon: FlaskConical, title: "Biochar Production", text: "Converting invasive species and agricultural waste into biochar to improve soil fertility, enhance water retention, and sequester carbon for long term climate mitigation." },
];

const AboutPage = () => (
  <div className="pt-32 pb-20 bg-white">
    {/* Hero */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-body tracking-widest uppercase">About Us</span>
        <h1 className="text-4xl md:text-6xl font-display mt-4 mb-8 text-primary">
          Building a Sustainable Future
        </h1>
        <p className="text-lg md:text-xl text-[#1a1a1a] font-body leading-relaxed max-w-3xl mx-auto">
          We are committed to blending technology with environmental expertise, offering end to end solutions
          that drive both business success and global climate action.
        </p>
      </motion.div>
    </section>

    {/* Why Carboneutrivo */}
    <section className="container mx-auto px-4 mb-20">
      <div className="section-divider mb-16" />
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">Why Carboneutrivo?</h2>
          <div className="space-y-4 text-[#1a1a1a] font-body leading-relaxed">
            <p>
              Carboneutrivo offers comprehensive consultancy and project development services focused on advancing
              sustainability and climate action across AFOLU (Agriculture, Forestry, and Other Land Use), nature based
              solutions, waste management, and high integrity carbon markets. We support organizations in designing and
              implementing climate smart, socially responsible, and economically viable solutions that deliver measurable
              environmental and financial outcomes.
            </p>
            <p>
              Our work integrates scientific rigor, structured project management, and robust safeguards to ensure
              long term impact, credibility, and scalability. With a strong emphasis on resilience, innovation, and
              integrity, Carboneutrivo enables clients and partners to participate confidently in global climate and
              sustainability markets.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Core Expertise */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-display text-primary mb-8">Our Core Expertise</h2>
          <div className="space-y-3">
            {expertiseItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-[#1a1a1a] text-sm font-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>

    {/* Guiding Principles */}
    <section className="container mx-auto px-4 mb-20">
      <div className="section-divider mb-16" />
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-primary mb-10">Our Guiding Principles</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-primary/30 transition-colors group">
              <p.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-display text-lg text-primary mb-2">{p.title}</h3>
              <p className="text-[#1a1a1a] text-sm font-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Delivery Framework */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">
            Integrated Carbon Project Delivery Framework
          </h2>
          <p className="text-[#1a1a1a] font-body leading-relaxed">
            Carboneutrivo applies a PMBOK® aligned project management framework integrated with Verra VCS, CCB Gold,
            and SD VISta requirements. This structured approach ensures disciplined planning, risk management, delivery
            assurance, and transparent monitoring across the full project lifecycle — from feasibility and design to
            implementation, verification, and long term stewardship.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Governance Snapshot */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">
            Governance & Integrity Snapshot
          </h2>
          <p className="text-[#1a1a1a] font-body leading-relaxed">
            Carboneutrivo operates under a comprehensive Governance & Integrity Framework aligned with voluntary carbon
            market best practices. This includes clear policies on ethics, anti corruption, FPIC, safeguards, grievance
            redressal, whistleblowing, and strict prevention of double counting. Strong leadership oversight and
            transparent processes ensure accountability, credibility, and trust across all project activities.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Service Areas */}
    <section className="container mx-auto px-4 mb-20">
      <div className="section-divider mb-16" />
      <motion.div {...fadeUp} className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-body tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-display mt-3 text-primary">Our Service Areas</h2>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`flex items-start gap-5 p-6 ${
                i < services.length - 1 ? "border-b border-gray-200" : ""
              } hover:bg-primary/[0.03] transition-colors`}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <s.icon className="text-primary" size={18} />
              </div>
              <div>
                <h3 className="font-display text-lg text-primary mb-1">{s.title}</h3>
                <p className="text-[#1a1a1a] text-sm font-body leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* CCB & SD VISta */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto space-y-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">
            Climate, Community & Biodiversity (CCB)
          </h2>
          <p className="text-[#1a1a1a] font-body leading-relaxed">
            We integrate the CCB methodology into AFOLU projects to ensure they not only mitigate climate change but
            also deliver significant benefits to local communities and biodiversity. The CCB methodology emphasizes
            sustainable land use management practices that address climate change, promote social equity, and protect
            biodiversity through measurable co benefits including community development, conservation, and ecosystem restoration.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">
            Sustainable Development Verified Impact Standard (SD VISta)
          </h2>
          <p className="text-[#1a1a1a] font-body leading-relaxed">
            We integrate SD VISta into AFOLU projects to ensure they contribute to sustainable development goals (SDGs).
            SD VISta provides a framework for verifying social, environmental, and economic impacts — including poverty
            alleviation, gender equality, and local community benefits — ensuring transparency, accountability, and
            meaningful impact across multiple dimensions.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Carbon Project Development */}
    <section className="container mx-auto px-4 pb-10">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">
            Carbon Project Development & Implementation
          </h2>
          <p className="text-[#1a1a1a] font-body leading-relaxed">
            We help organizations navigate carbon offset project design, development, and implementation — ensuring
            alignment with international standards. Our services include carbon footprint assessment, project registration,
            monitoring and verification, and guidance on generating and trading carbon credits. We work with renowned
            registries such as Verra, Gold Standard, International Carbon Registry (ICR), and other globally recognized
            standards, ensuring projects meet best practice compliance requirements.
          </p>
          <p className="text-[#1a1a1a] font-body leading-relaxed mt-4">
            With a holistic approach spanning sustainable agriculture, forestry, waste management, carbon offsetting, and
            technology, Carboneutrivo empowers organizations to reduce their carbon footprint, enhance ecosystem resilience,
            and foster long term economic growth across various sectors.
          </p>
        </div>
      </motion.div>
    </section>
  </div>
);

export default AboutPage;
