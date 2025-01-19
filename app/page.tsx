import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";
import Roadmap from "./SectionZRoadmap";


export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      
      <SectionTechnologyStack />
      <SectionMyLatestProject />
      {/* <Roadmap/> */}
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </div>
  )
}
