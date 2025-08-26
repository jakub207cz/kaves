import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const stepIcons = [
    <img src="/foto-uploads/formular.png" alt={t('alt.formIcon')} className="w-11 h-11 inline-block align-middle" />,
    <img src="/foto-uploads/talking.png" alt={t('alt.consultationIcon')} className="w-11 h-11 inline-block align-middle" />,
    <img src="/foto-uploads/location.png" alt={t('alt.locationIcon')} className="w-11 h-11 inline-block align-middle" />,
    <img src="/foto-uploads/teaching.png" alt={t('alt.trainingIcon')} className="w-11 h-11 inline-block align-middle" />,
    <img src="/foto-uploads/money.png" alt={t('alt.openingIcon')} className="w-11 h-11 inline-block align-middle" />,
  ];

  const steps = (t('howItWorks.steps', { returnObjects: true }) as any[]).map((step: any, index: number) => ({
    number: (index + 1).toString(),
    title: step.title,
    description: step.description,
    icon: stepIcons[index],
  }));

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Vertical Steps Layout */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-12 bg-primary/50 hidden sm:block" />
              )}
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Step Number */}
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-warm flex-shrink-0 mx-auto sm:mx-0">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                
                {/* Step Content */}
                <Card className="coffee-card p-6 flex-1 w-full animate-fade-in">
                  <div className="text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                      <div className="text-4xl mb-4 sm:mb-0 sm:mt-2">{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-3 text-xl">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="coffee-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('howItWorks.forEveryone.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
              <div className="space-y-3">
                {(t('howItWorks.forEveryone.categories', { returnObjects: true }) as string[]).slice(0, 3).map((item: string, index: number) => (
                  <p key={index} className="text-muted-foreground"><span className="text-primary">✓</span> {item}</p>
                ))}
              </div>
              <div className="space-y-3">
                {(t('howItWorks.forEveryone.categories', { returnObjects: true }) as string[]).slice(3).map((item: string, index: number) => (
                  <p key={index + 3} className="text-muted-foreground"><span className="text-primary">✓</span> {item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="coffee-card p-6 rounded-2xl max-w-xl mx-auto mt-6">
            <h3 className="text-xl font-semibold text-primary mb-4">{t('howItWorks.whatYouGet.title')}</h3>
            <ul className="space-y-2 max-w-lg mx-auto">
              {(t('howItWorks.whatYouGet.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;