import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import ProfitCalculator from '@/components/ProfitCalculator';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <ProfitCalculator />
      <ContactSection />
    </main>
  );
}
