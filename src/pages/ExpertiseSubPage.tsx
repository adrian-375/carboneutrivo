import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";

const subPages: Record<string, { title: string; content: string }> = {
  "wetland-restoration": {
    title: "Wetland Restoration and Conservation",
    content: "We deliver structured wetland restoration and conservation initiatives that strengthen carbon sequestration, water regulation, and biodiversity outcomes, integrating ecological expertise with data driven monitoring to ensure long term environmental resilience.",
  },
  "sustainable-agriculture": {
    title: "Sustainable Agriculture",
    content: "We support climate smart agricultural systems through sustainable land use planning, regenerative practices, and measurable performance frameworks that enhance productivity while reducing environmental impact.",
  },
  "sustainable-forestry": {
    title: "Sustainable Forestry",
    content: "We guide responsible forest management and restoration initiatives designed to increase carbon storage, protect biodiversity, and maintain ecosystem integrity through standards aligned implementation.",
  },
  "climate-community-biodiversity": {
    title: "Climate, Community and Biodiversity",
    content: "By integrating scientific methodologies, recognised standards, and stakeholder engagement processes, we help advance nature positive climate initiatives that deliver measurable environmental and social outcomes.",
  },
  "gis-remote-sensing": {
    title: "GIS & Remote Sensing",
    content: "We apply advanced geospatial technologies for land monitoring, deforestation tracking, and performance verification, enabling transparent, data driven decision making across AFOLU projects.",
  },
  "it-solutions": {
    title: "IT Solutions",
    content: "The company provides technology integration and digital monitoring systems to support transparent implementation, reporting, and long term management of AFOLU carbon initiatives.",
  },
};

const ExpertiseSubPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = subPages[slug || ""];

  if (!page) return <PageWrapper title="Not Found" subtitle="This expertise page does not exist." />;

  return (
    <PageWrapper title={page.title}>
      <p className="text-muted-foreground text-base font-body leading-relaxed max-w-3xl">{page.content}</p>
    </PageWrapper>
  );
};

export default ExpertiseSubPage;
