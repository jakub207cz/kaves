import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url(/foto-uploads/109fc6b4-ad73-422f-956a-d974d57b7aa0.png)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/50 via-background/70 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-center min-h-screen">
          {/* Centered Content */}
          <div className="max-w-4xl mx-auto space-y-8 p-12 rounded-2xl text-center">
            {/* Small intro text */}
            <p className="text-lg md:text-xl mb-4 font-medium">
              <span className="text-primary">KÁVES </span> 
              <span className="text-foreground">{t('hero.brandIntro')}</span>
            </p>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">{t('hero.titleLine1')}</span><br />
              <span className="text-primary">{t('hero.titleLine2')}</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t('hero.subtitle')}
            </p>

            

            {/* CTA Button */}
            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
                aria-label={t('hero.ctaAriaLabel')}
                onClick={() => {
                  const formSection = document.getElementById('contact-form-section');
                  const firstInput = document.getElementById('first-input');
                  
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  
                  // Small delay to ensure the form is in view before focusing
                  setTimeout(() => {
                    if (firstInput) {
                      firstInput.focus();
                    }
                  }, 500);
                }}
              >
                {t('hero.cta')}
              </Button>
            </div>
            
            {/* Additional info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border">
                <div className="text-xl font-bold text-primary mb-1">250 000 Kč</div>
                <div className="text-xs text-muted-foreground">{t('hero.initialInvestment')}</div>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border">
                <div className="text-xl font-bold text-primary mb-1">70 000 Kč</div>
                <div className="text-xs text-muted-foreground">{t('hero.monthlyProfit')}</div>
              </div>
              
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border">
                <div className="text-xl font-bold text-primary mb-1">12 měsíců</div>
                <div className="text-xs text-muted-foreground">{t('hero.roiTime')}</div>
              </div>
            </div>


          </div>
        </div>

        {/* Benefits - Clean List */}
        <div className="mt-8 md:-mt-55 pb-8">
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary">60%</div>
            <span className="text-foreground">{t('hero.profitability')}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <span className="text-foreground">{t('hero.automaticOperation')}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary">0</div>
            <span className="text-foreground">{t('hero.noEmployees')}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                <path d="M12 18h.01"/>
              </svg>
            </div>
            <span className="text-foreground">{t('hero.mobileBusiness')}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
export default HeroSection;