import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnerBenefits from "@/components/PartnerBenefits";
import HowItWorks from "@/components/HowItWorks";
import ProfitCalculator from "@/components/ProfitCalculator";
import MenuSection from "@/components/MenuSection";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomePopup />
      <Navigation />
      <div className="pt-16">
      <div id="uvod">
        <HeroSection />
      </div>
      <div id="jak-to-funguje">
        <HowItWorks />
      </div>
      <div id="kalkulacka">
        <ProfitCalculator />
      </div>
      <div id="o-nas">
        <AboutSection />
      </div>
      <div id="partnerstvi">
        <PartnerBenefits />
      </div>
      <MenuSection />
      <div id="lokace">
        <LocationsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="kontakt">
        <ContactSection />
      </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;