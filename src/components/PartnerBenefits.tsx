import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessImage from "@/assets/business-partnership.jpg";

const PartnerBenefits = () => {
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
      title: "Nízká investice",
      description: "od 180 000 Kč"
    },
    {
      icon: "margin.png",
      title: "Vysoká marže",
      description: "až 80 % z ceny kávy"
    },
    {
      icon: "income.png",
      title: "Rychlá návratnost",
      description: "2–6 měsíců"
    },
    {
      icon: "money.png",
      title: "Pasivní příjem",
      description: "kávovar běží nonstop"
    },
    {
      icon: "traning.png",
      title: "Podpora marketingu",
      description: "a školení"
    }
  ];

  const cooperationModels = [
    {
      title: "Nákup kávovaru",
      description: "Investice od 180 000 Kč, 100% zisku pro vás",
      highlight: true
    },
    {
      title: "Pronájem",
      description: "Bez počáteční investice, měsíční platba",
      highlight: false
    },
    {
      title: "Sdílení zisku",
      description: "Minimum investice, sdílený výnos",
      highlight: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Staňte se partnerem – <span className="text-primary">vydělávejte s kávou bez starostí</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Připojte se k síti úspěšných partnerů KÁVES a začněte vydělávat s prémiovou kávou
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
          {/* Cooperation Models */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Možnosti spolupráce:
            </h3>
            <div className="space-y-4">
              {cooperationModels.map((model, index) => (
                <Card 
                  key={index} 
                  className={`p-6 coffee-transition hover:scale-105 ${
                    model.highlight 
                      ? 'coffee-card ring-2 ring-primary coffee-glow' 
                      : 'coffee-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-2">
                        {model.title}
                        {model.highlight && <span className="text-primary ml-2">⭐ Doporučeno</span>}
                      </h4>
                      <p className="text-muted-foreground">{model.description}</p>
                    </div>
                    {model.highlight && (
                      <div className="text-primary font-bold text-2xl">→</div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full md:w-auto"
                onClick={scrollToForm}
              >
                Chci se stát partnerem
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
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
              <div className="text-sm opacity-90">měsíčně</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;