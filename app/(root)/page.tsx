import Banner from "@/components/banner";
import Services from "@/components/services";
import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <CtaSection />
      <Contact />
    </>
  );
}
