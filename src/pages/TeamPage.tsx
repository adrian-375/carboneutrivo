import { motion } from "framer-motion";

const teamMembers = [
  { name: "Mr. Adrian Charles", role: "Chief Executive Officer", bio: "Mr. Adrian Charles serves as the Chief Executive Officer of Pavsho Enviro Services. A graduate with distinction in Bachelor of Science in Data Science, he represents a forward looking generation of leadership that integrates analytical capability with strategic innovation. With a strong foundation in data driven decision making and technology enabled solutions, he guides the company toward sustainable growth, global relevance, and structured execution of high integrity carbon initiatives." },
  { name: "Dr. Abhishek M", role: "Chief Sustainability & Carbon Innovation Officer", bio: "Dr. Abhishek M, PhD in Environmental Science, serves as Chief Sustainability & Carbon Innovation Officer at Pavsho Enviro Services. He brings extensive expertise in carbon project design, implementation, business development, and digital monitoring, reporting, and verification systems. His experience spans agriculture and forestry initiatives, including mangrove restoration, Sustainable Agricultural Land Management, Climate, Community & Biodiversity projects, and carbon credit structuring. Dr. Abhishek is experienced with major international registries including Verra, Gold Standard, ICR, Global Carbon Council, ART TREES, Cercarbono, and Plan Vivo, ensuring standards compliance and high quality carbon outcomes." },
  { name: "Ms. Thrupthy Chondama", role: "Senior Manager, Operations (AFOLU)", bio: "Ms. Thrupthy Chondama serves as Senior Manager of Operations (AFOLU). She holds a Master's degree in Forestry and brings strong expertise in forestry, SALM, and ARR project implementation. Her academic foundation and field level execution experience support efficient management of complex land based climate initiatives aligned with recognised carbon standards." },
  { name: "Mr. Srikanth", role: "Lead, Geospatial Intelligence", bio: "Mr. Srikanth leads Geospatial Intelligence and digital monitoring systems at Pavsho Enviro Services. With advanced expertise in Remote Sensing and GIS, he specializes in land use and land cover analysis, baselining, monitoring, and long term verification for AFOLU projects. He integrates geospatial analytics with digital MRV systems to strengthen transparency, accuracy, and accountability across carbon initiatives." },
  { name: "Mr. Steven", role: "Lead, Climate, Community & Biodiversity", bio: "Mr. Steven leads Climate, Community & Biodiversity integration across Pavsho Enviro Services projects. He supports integration of CCB principles into ARR, IFM, REDD/REDD+, grassland protection, mangrove restoration, and SALM initiatives. His expertise ensures measurable environmental and social co benefits while maintaining alignment with international safeguard requirements." },
  { name: "Ms. Shobha R", role: "Human Resources Manager", bio: "Ms. Shobha R serves as Human Resources Manager, bringing over five years of experience in talent management and organizational development. She supports workforce development, operational alignment, and internal governance to ensure a capable and purpose driven team." },
  { name: "Mr. Uday R", role: "Lead, Finance", bio: "Mr. Uday R oversees financial strategy, compliance, and project financial structuring. With expertise in budgeting, financial modeling, and risk oversight, he ensures a stable and transparent financial foundation for long term carbon project delivery." },
];

const TeamPage = () => (
  <div className="pt-32 pb-20 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <span className="text-primary text-sm font-body tracking-widest uppercase">Our Team</span>
        <h1 className="text-3xl md:text-5xl font-display text-primary mb-4 mt-3">Our Team</h1>
        <p className="text-lg text-[#1a1a1a] font-body leading-relaxed">
          We are dedicated to building a sustainable future by combining technological innovation with deep environmental expertise to deliver end to end solutions that support responsible growth and meaningful climate action.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display text-primary mb-4">Our Leadership Team</h2>
            <p className="text-[#1a1a1a] text-base font-body leading-relaxed">
              At CarboNeutrivo, our leadership team brings together vision, scientific expertise, and operational
              excellence. The team combines strengths across environmental science, forestry, carbon project development,
              geospatial intelligence, governance, finance, and organizational leadership to deliver high integrity,
              standards aligned carbon solutions.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {teamMembers.map((m, i) => (
              <div
                key={m.name}
                className={`flex flex-col sm:flex-row items-start gap-5 p-6 md:p-8 hover:bg-primary/[0.03] transition-colors ${
                  i < teamMembers.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display text-lg">
                    {m.name
                      .replace(/^(Mr\.|Ms\.|Dr\.)\s*/, "")
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-[#1a1a1a]">{m.name}</h3>
                  <p className="text-primary text-sm font-body mb-3">{m.role}</p>
                  <p className="text-[#1a1a1a] text-sm md:text-base font-body leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default TeamPage;
