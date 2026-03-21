import { motion } from "framer-motion";
import riskFrameworkImg from "@/assets/risk-framework.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const governanceItems = [
  {
    title: "Code of Ethics & Business Conduct",
    desc: "Carboneutrivo is committed to the highest standards of integrity, transparency, and accountability in all business activities. This policy guides ethical decision-making, legal compliance, conflict-of-interest management, and responsible conduct across all carbon project operations.",
  },
  {
    title: "Anti-Bribery & Anti-Corruption Policy",
    desc: "Carboneutrivo maintains zero tolerance for bribery, corruption, and unethical influence in any form. Robust controls ensure compliance with international anti-corruption laws and Verra integrity requirements across employees, partners, and third parties.",
  },
  {
    title: "Anti-Child Labour Policy",
    desc: "Carboneutrivo strictly prohibits child labour and upholds international labour standards, including ILO conventions. All project activities ensure lawful employment practices, age verification, and corrective actions to protect children's rights and welfare.",
  },
  {
    title: "Anti-Sexual Harassment Policy",
    desc: "Carboneutrivo is committed to a safe, respectful, and inclusive working environment free from harassment and discrimination. The policy provides confidential reporting mechanisms, zero retaliation, and firm corrective actions for any violation.",
  },
  {
    title: "Health, Safety & Welfare Policy",
    desc: "Carboneutrivo prioritises the health, safety, and well-being of all workers and project participants. Proactive risk management, incident reporting, and continuous improvement ensure safe and dignified working conditions across all project sites.",
  },
];

const integrityItems = [
  {
    title: "Indigenous Peoples & FPIC Policy",
    desc: "Carboneutrivo respects the rights, cultures, and livelihoods of Indigenous Peoples in line with UNDRIP, ILO 169, and CCB Gold v3.1. Free, Prior, and Informed Consent (FPIC) is obtained and maintained for all project activities affecting Indigenous communities.",
  },
  {
    title: "Environmental & Social Safeguards Policy",
    desc: "Carboneutrivo integrates environmental protection and social responsibility into all project design and implementation. The policy ensures biodiversity conservation, climate resilience, community well-being, and compliance with international safeguard standards.",
  },
  {
    title: "Grievance Redressal Policy",
    desc: "Carboneutrivo provides accessible, transparent, and culturally appropriate grievance mechanisms for all stakeholders. Grievances are addressed fairly, confidentially, and without retaliation, with corrective and preventive actions where required.",
  },
  {
    title: "Whistleblower Policy",
    desc: "Carboneutrivo encourages the reporting of unethical, illegal, or improper conduct through secure and confidential channels. Whistleblowers are protected from retaliation, and all reports are investigated impartially and promptly.",
  },
  {
    title: "Double Counting Prevention Policy",
    desc: "Carboneutrivo ensures that all emission reductions and removals are issued, transferred, and claimed only once. Strong registry controls, transparent disclosures, and internal audits prevent double counting and uphold carbon market integrity.",
  },
];

const riskItems = [
  {
    title: "1. Additionality & Baseline Risk",
    risk: "Overstated baselines or non-additional activities",
    mitigations: [
      "Conservative baseline setting using approved AFOLU methodologies",
      "Demonstration of financial, legal, and practice-based additionality",
      "Independent technical review prior to validation",
    ],
  },
  {
    title: "2. Permanence & Reversal Risk",
    risk: "Carbon stock loss due to fire, pests, disease, land-use change, or climate events",
    mitigations: [
      "Long-term project design and land-use planning",
      "Reversal risk assessment and buffer contributions as per standard requirements",
      "Active monitoring, adaptive management, and contingency measures",
    ],
  },
  {
    title: "3. Leakage Risk",
    risk: "Displacement of emissions outside the project boundary",
    mitigations: [
      "Jurisdictional and landscape-level assessments where applicable",
      "Community-based interventions to address underlying drivers of deforestation or degradation",
      "Leakage deduction and conservative accounting where required",
    ],
  },
  {
    title: "4. Measurement, Reporting & Verification (MRV) Risk",
    risk: "Inaccurate carbon accounting or data integrity issues",
    mitigations: [
      "Use of approved MRV methodologies and digital monitoring tools",
      "Remote sensing, field measurements, and QA/QC procedures",
      "Independent third-party validation and verification",
    ],
  },
  {
    title: "5. Environmental & Biodiversity Risk",
    risk: "Negative impacts on ecosystems or native species",
    mitigations: [
      "Environmental risk screening and biodiversity safeguards",
      "Preference for native species and ecosystem-based approaches",
      "Ongoing monitoring to ensure net positive environmental outcomes",
    ],
  },
  {
    title: "6. Social, Land Tenure & Community Risk",
    risk: "Conflicts over land rights, lack of community consent, or inequitable benefit sharing",
    mitigations: [
      "Clear land tenure due diligence",
      "Free, Prior and Informed Consent (FPIC) processes",
      "Transparent benefit-sharing mechanisms",
      "Grievance redress systems aligned with international safeguards",
    ],
  },
  {
    title: "7. Regulatory & Host Country Risk",
    risk: "Policy changes, authorisation uncertainty, or double claiming",
    mitigations: [
      "Early engagement with host country authorities",
      "Alignment with national climate strategies and Article 6 considerations",
      "Clear avoidance of double counting through transparent accounting and claims guidance",
    ],
  },
  {
    title: "8. Reputational & Integrity Risk",
    risk: "Greenwashing concerns or market credibility issues",
    mitigations: [
      "Full alignment with integrity benchmarks and disclosure expectations",
      "Conservative crediting assumptions",
      "Transparent public documentation and reporting",
    ],
  },
];

const PolicyCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-gray-300 bg-white/40 shadow-md backdrop-blur-sm px-6 py-5">
    <h3 className="font-display text-base text-black mb-2">{title}</h3>
    <p className="text-black text-sm font-body leading-relaxed">{desc}</p>
  </div>
);

const GovernancePage = () => (
  <div className="pt-32 pb-20 bg-gray-50 text-black">
    {/* Hero */}
    <section className="container mx-auto px-4 mb-20">
      <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-body tracking-widest uppercase">Governance & Integrity</span>
        <h1 className="text-4xl md:text-6xl font-display mt-4 mb-8 text-primary">
          Governance, Integrity & Risk Management
        </h1>
        <p className="text-black text-lg font-body leading-relaxed max-w-3xl mx-auto">
          Carboneutrivo is guided by a comprehensive governance and integrity framework aligned with Voluntary Carbon
          Markets — ensuring ethical business conduct, transparency, respect for human rights, and robust environmental
          and social safeguards across all carbon project activities.
        </p>
      </motion.div>
    </section>

    <div className="container mx-auto px-4 max-w-4xl space-y-16">
      {/* Section 1: Governance & Ethical Conduct */}
      <motion.div {...fadeUp}>
        <h2 className="text-3xl font-display text-primary mb-6">Governance & Ethical Conduct</h2>
        <div className="space-y-3">
          {governanceItems.map((item) => (
            <PolicyCard key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>
      </motion.div>

      {/* Section 2: Integrity & Safeguards */}
      <motion.div {...fadeUp}>
        <h2 className="text-3xl font-display text-primary mb-6">Integrity & Safeguards</h2>
        <div className="space-y-3">
          {integrityItems.map((item) => (
            <PolicyCard key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>
      </motion.div>

      {/* Section 3: Risk Management Framework */}
      <motion.div {...fadeUp}>
        <h2 className="text-3xl font-display text-primary mb-3">Risk Management Framework</h2>
        <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-lg mb-6">
          <img src={riskFrameworkImg} alt="AFOLU Risk Management & Mitigation Framework" className="w-full h-auto" />
        </div>
        <p className="text-black text-sm font-body leading-relaxed mb-6">
          Carboneutrivo applies a differentiated risk management approach across AFOLU project types, recognising that
          each intervention carries distinct ecological, social, and delivery risks. Our framework is aligned with
          Verra, ICVCM, CCB Standards, and SD VISta.
        </p>
        <div className="space-y-3">
          {riskItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-300 bg-white/40 shadow-md backdrop-blur-sm px-6 py-5"
            >
              <h3 className="font-display text-base text-black mb-3">{item.title}</h3>
              <p className="text-black text-sm font-body mb-3">
                <span className="font-medium">Risk:</span> {item.risk}
              </p>
              <p className="text-black text-sm font-medium font-body mb-2">Mitigation:</p>
              <ul className="space-y-1.5">
                {item.mitigations.map((m) => (
                  <li key={m} className="text-black text-sm font-body flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs font-body mt-6">
          Risk management is embedded within Carboneutrivo's Governance & Integrity framework, with defined oversight
          mechanisms, periodic risk reviews, and escalation protocols.
        </p>
      </motion.div>

      {/* Carbon Integrity & Claims Statement */}
      <motion.div {...fadeUp}>
        <div className="rounded-2xl border border-gray-300 bg-white/40 shadow-md backdrop-blur-sm p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">Carbon Integrity & Claims Statement</h2>
          <div className="space-y-4 text-black text-sm font-body leading-relaxed">
            <p>
              Carboneutrivo is committed to the highest standards of environmental integrity, transparency, and
              accountability in the development and delivery of carbon credits. All emission reductions and removals are
              designed, implemented, validated, verified, issued, transferred, and retired in accordance with recognised
              voluntary carbon market standards and integrity principles.
            </p>
            <p>
              Carboneutrivo maintains robust systems and controls to prevent double counting, double issuance, and
              double claiming. Each carbon credit is uniquely identified and tracked through approved registries and is
              claimed only once. Where applicable, the status of corresponding adjustments or national authorisations is
              transparently disclosed.
            </p>
            <p>
              Environmental and social safeguards are integral to all project activities. Carboneutrivo respects human
              rights, Indigenous Peoples' rights, Free, Prior and Informed Consent (FPIC), labour standards, health and
              safety requirements, and ethical business conduct across all operations and partnerships.
            </p>
            <p>
              All climate, carbon, and impact-related claims made by Carboneutrivo are based on verified outcomes and
              conservative assumptions, and are communicated responsibly to avoid overstatement or misrepresentation.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-300 text-xs text-gray-500">
              <p>Approved by: Chief Executive Officer</p>
              <p>Approved on: 01 June 2025</p>
              <p className="mt-2">
                This statement is reviewed periodically to remain aligned with evolving international standards,
                regulatory frameworks, and market integrity expectations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default GovernancePage;
