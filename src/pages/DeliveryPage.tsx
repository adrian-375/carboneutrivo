import { motion } from "framer-motion";
import deliveryFrameworkImg from "@/assets/delivery-framework.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const phases = [
  { title: "Project Origination & Feasibility", desc: "Baseline assessments, risk screening, stakeholder mapping, and safeguard planning." },
  { title: "Design & Standards Alignment", desc: "Carbon accounting design, biodiversity and community co benefit integration, and methodology alignment." },
  { title: "Implementation & Community Engagement", desc: "Restoration activities, livelihood support initiatives, FPIC maintenance, and local capacity building." },
  { title: "Monitoring, Reporting & Verification", desc: "Technology enabled MRV using satellite imagery, GIS systems, field measurements, and structured data management." },
  { title: "Issuance & Long Term Stewardship", desc: "Registry coordination, transparent claims management, ongoing monitoring, and adaptive project management." },
];

const defines = [
  { num: "1", title: "Structured Phase Based Delivery", desc: "Projects are implemented across clearly defined lifecycle phases, including initiation, design, implementation, monitoring, and long term stewardship. Defined controls ensure risk management, quality assurance, stakeholder engagement, and compliance are maintained throughout." },
  { num: "2", title: "Alignment with International Carbon Standards", desc: "Carbon, community, and biodiversity requirements are embedded from the outset to ensure alignment with Verra VCS methodologies, CCB Gold safeguards, and SD VISta sustainable development outcomes. This integrated approach strengthens validation, verification, and long term market credibility." },
  { num: "3", title: "Governance Embedded Execution", desc: "Governance mechanisms are integrated into project implementation, including Free, Prior and Informed Consent, environmental and social safeguards, grievance and whistleblower mechanisms, anti corruption controls, and double counting prevention systems." },
];

const investorPoints = [
  "Reduced delivery and compliance risk through structured execution",
  "Higher validation and verification confidence",
  "Clear accountability and decision making pathways",
  "Scalable model for long term nature based assets",
  "Strong alignment with voluntary carbon market integrity expectations",
];

const DeliveryPage = () => (
  <div className="pt-32 pb-20 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <span className="text-primary text-sm font-body tracking-widest uppercase">Project Delivery</span>
        <h1 className="text-3xl md:text-5xl font-display text-primary mb-4 mt-3">Project Delivery Framework</h1>
        <p className="text-lg text-[#1a1a1a] font-body leading-relaxed">
          Pavsho Enviro Services applies an integrated carbon project delivery framework aligned with internationally recognised standards, including Verra requirements. The framework ensures disciplined execution, strong governance, and full alignment with voluntary carbon market integrity expectations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src={deliveryFrameworkImg} alt="Integrated Carbon Project Delivery Framework" className="w-full h-auto" />
          </div>

          <p className="text-[#1a1a1a] text-sm font-body leading-relaxed">
            Governance, Free Prior and Informed Consent, environmental and social safeguards, grievance mechanisms, anti corruption controls, and double counting prevention are embedded across the entire project lifecycle to enable transparent, accountable, and high integrity carbon outcomes.
          </p>

          {/* Overview */}
          <div>
            <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">Integrated Carbon Project Delivery Framework</h2>
            <h3 className="text-xl font-display text-primary mb-3">Overview</h3>
            <p className="text-[#1a1a1a] text-sm font-body leading-relaxed">
              The Integrated Carbon Project Delivery Framework brings together structured project management practices and internationally recognised carbon standards to deliver high integrity, scalable AFOLU carbon projects. Each project is designed to be technically robust, socially responsible, environmentally sound, and investment ready from early feasibility through long term monitoring and credit issuance.
            </p>
          </div>

          {/* What Defines */}
          <div>
            <h3 className="text-xl font-display text-primary mb-6">What Defines the Framework</h3>
            <div className="space-y-6">
              {defines.map((d) => (
                <div key={d.num} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-gray-200 flex items-center justify-center">
                    <span className="text-primary font-body font-semibold text-sm">{d.num}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base text-[#1a1a1a] mb-1">{d.title}</h4>
                    <p className="text-[#1a1a1a] text-xs font-body leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle */}
          <div>
            <h3 className="text-xl font-display text-primary mb-6">Lifecycle Coverage</h3>
            <p className="text-[#1a1a1a] text-sm font-body mb-6">The framework governs the full carbon project lifecycle:</p>
            <div className="space-y-4">
              {phases.map((p) => (
                <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h4 className="font-display text-sm text-primary mb-1">{p.title}</h4>
                  <p className="text-[#1a1a1a] text-xs font-body leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investors */}
          <div>
            <h3 className="text-xl font-display text-primary mb-4">Why It Matters to Investors & Partners</h3>
            <ul className="space-y-2">
              {investorPoints.map((point) => (
                <li key={point} className="text-[#1a1a1a] text-sm font-body flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div className="bg-white border border-primary/20 rounded-xl p-8 text-center shadow-sm">
            <p className="font-display text-xl text-primary mb-3">Built for Scale. Governed for Integrity. Designed for Impact.</p>
            <p className="text-[#1a1a1a] text-sm font-body leading-relaxed max-w-2xl mx-auto">
              The Integrated Carbon Project Delivery Framework ensures that every project delivers measurable climate benefits, meaningful community outcomes, and verifiable biodiversity impact while meeting the expectations of investors, registries, auditors, and stakeholders.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default DeliveryPage;
