import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessImage from "@/assets/business-partnership.jpg";
import { useTranslation } from "react-i18next";

const PartnerBenefits = () => {
  const { t } = useTranslation();
  
  const scrollToForm = () => {
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
  };
  const benefits = [
    {
      icon: "cash.png",
      title: t('partnerBenefits.lowInvestment'),
      description: t('partnerBenefits.fromAmount')
    },
    {
      icon: "margin.png",
      title: t('partnerBenefits.highMargin'),
      description: t('partnerBenefits.upToPercent')
    },
    {
      icon: "income.png",
      title: t('partnerBenefits.quickReturn'),
      description: t('partnerBenefits.timeRange')
    },
    {
      icon: "money.png",
      title: t('partnerBenefits.passiveIncome'),
      description: t('partnerBenefits.alwaysRunning')
    },
    {
      icon: "traning.png",
      title: t('partnerBenefits.marketingSupport'),
      description: t('partnerBenefits.andTraining')
    }
  ];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('partnerBenefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('partnerBenefits.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="coffee-card p-6 text-center hover:scale-105 coffee-transition">
              <div className="text-4xl mb-4">
                <img 
                  src={`/foto-uploads/${benefit.icon}`} 
                  alt={benefit.title} 
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-primary font-medium">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative mx-auto">
            <div className="coffee-card rounded-2xl overflow-hidden">
              <img 
                src="/foto-uploads/84fd9376-0228-4a9c-864c-624b7c2cc252.png"
                alt="KÁVES coffee cup - Tak co? Zajdeme na KÁVES"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Profit highlight */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-warm">
              <div className="text-2xl font-bold">12–48k Kč</div>
              <div className="text-sm opacity-90">{t('partnerBenefits.monthly')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;