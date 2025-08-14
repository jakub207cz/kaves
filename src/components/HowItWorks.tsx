import { Card } from "@/components/ui/card";

import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: '1',
      title: 'Kontaktujte nás',
      description: 'Vyplňte kontaktní formulář nebo nám zavolejte. Rádi vás seznámíme s naší nabídkou.',
      icon: <img src="/foto-uploads/formular.png" alt="Formulář" className="w-11 h-11 inline-block align-middle" />,
    },
    {
      number: '2',
      title: 'Konzultace',
      description: 'Domluvíme si osobní schůzku, kde vám představíme podrobnosti.',
      icon: <img src="/foto-uploads/talking.png" alt="Konzultace" className="w-11 h-11 inline-block align-middle" />,
    },
    {
      number: '3',
      title: 'Výběr lokality',
      description: 'Pomůžeme vám vybrat vhodnou lokalitu pro vaši kavárnu.',
      icon: <img src="/foto-uploads/location.png" alt="Výběr lokality" className="w-11 h-11 inline-block align-middle" />,
    },
    {
      number: '4',
      title: 'Zaškolení a příprava',
      description: 'Provedeme vás školením a přípravou na provoz kavárny.',
      icon: <img src="/foto-uploads/teaching.png" alt="Zaškolení a příprava" className="w-11 h-11 inline-block align-middle" />,
    },
    {
      number: '5',
      title: 'Otevření kavárny',
      description: 'Slavnostní otevření vaší nové kavárny s naší podporou.',
      icon: <img src="/foto-uploads/money.png" alt="Otevření kavárny" className="w-11 h-11 inline-block align-middle" />,
    },
  ];

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
            Jak to <span className="text-primary">funguje</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Spusťte svůj byznys za 30 dní s plnou podporou ve všech etapách! Všechny kroky máme detailně promyšlené, vyřešené a připravené k okamžitému spuštění.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 transform -translate-y-1/2" />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 shadow-warm">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  
                  {/* Step Card */}
                  <Card className="coffee-card p-6 text-center h-48 flex flex-col justify-center">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-1 h-16 bg-primary/50" />
              )}
              
              <div className="flex items-start space-x-6">
                {/* Step Number */}
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-warm flex-shrink-0">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                
                {/* Step Content */}
                <Card className="coffee-card p-6 flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
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
              Podnikání pro každého
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
              <div className="space-y-3">
                <p className="text-muted-foreground"><span className="text-primary">✓</span> Pro začínající podnikatele</p>
                <p className="text-muted-foreground"><span className="text-primary">✓</span> Pro ženy na mateřské dovolené</p>
                <p className="text-muted-foreground"><span className="text-primary">✓</span> Pro expaty nebo imigranty</p>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground"><span className="text-primary">✓</span> Pro manažery</p>
                <p className="text-muted-foreground"><span className="text-primary">✓</span> Pro podnikatele</p>
                <p className="text-muted-foreground"><span className="text-primary">✓</span> Pro každého, kdo má zájem o další stabilní příjem</p>
              </div>
            </div>
          </div>
          <div className="coffee-card p-6 rounded-2xl max-w-xl mx-auto mt-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Co získáte?</h3>
            <ul className="space-y-2 max-w-lg mx-auto">
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Samoobslužný kávovar s prémiovým vzhledem</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Českou kvalitní kávu z pražírny</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Zabudovanou vodní nádrž s filtrem</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Možnost plateb kartou / mobilem</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Nízkou spotřebu elektřiny (15 kWh/měs)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Kompletní servis a čištění</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;