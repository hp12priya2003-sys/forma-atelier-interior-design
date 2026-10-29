import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioIntroduction from "@/components/StudioIntroduction";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import ProcessSection from "@/components/ProcessSection";
import MaterialsGallery from "@/components/MaterialsGallery";
import WhyForma from "@/components/WhyForma";
import Enquiry from "@/components/Enquiry";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
export default function Home() {
  return <main id="top"><Navbar/><Hero/><StudioIntroduction/><Projects/><Services/><Philosophy/><ProcessSection/><MaterialsGallery/><WhyForma/><Enquiry/><FAQSection/><FinalCTA/><Footer/></main>;
}
