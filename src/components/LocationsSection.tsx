import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationsSection = () => {
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
  const locations = [
    {
      category: "Vzdělávací instituce",
      icon: "institution.png",
      places: [
        "Střední škola Ostrava",
        "Vysoká škola – Jihočeská univerzita",
        "Studijní centrum PEC Praha"
      ]
    },
    {
      category: "Zdravotnictví",
      icon: "hospital.png",
      places: [
        "Krevní centrum Ostrava",
        "Nemocnice Praha",
        "Poliklinika Brno"
      ]
    },
    {
      category: "Kultura a sport",
      icon: "hause.png",
      places: [
        "Kulturní centrum Frýdlant",
        "Koupaliště u Plzně",
        "Fitness centrum Pardubice"
      ]
    }
  ];

  const testimonials = [
    {
      text: "Skvělé řešení pro naši školu. Studenti si rychle oblíbili kvalitní kávu a my máme pasivní příjem.",
      author: "Ředitel SŠ Ostrava",
      rating: 5
    },
    {
      text: "Instalace proběhla hladce, servis je bezproblémový. Kávovar pracuje spolehlivě už rok.",
      author: "Správce nemocnice",
      rating: 5
    },
    {
      text: "Vynikající káva a skvělá podpora od týmu KÁVES. Doporučujeme všem.",
      author: "Kulturní centrum",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Kde <span className="text-primary">KÁVES</span> funguje
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zákazníci a zaměstnanci už si kávu vychutnávají po celé České republice
          </p>
        </div>

        {/* Locations by Category */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className="coffee-card p-8 text-center hover:scale-105 coffee-transition">
              <div className="mb-6">
                <img 
                  src={`/foto-uploads/${location.icon}`} 
                  alt={location.category}
                  className="w-20 h-20 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-6">{location.category}</h3>
              <div className="space-y-3">
                {location.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="coffee-card p-3 rounded-lg">
                    <span className="text-foreground font-medium">{place}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="coffee-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-foreground font-medium">Aktivních stanic</div>
          </Card>
          <Card className="coffee-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-foreground font-medium">Spokojenost partnerů</div>
          </Card>
          <Card className="coffee-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">10k+</div>
            <div className="text-foreground font-medium">Káv denně</div>
          </Card>
          <Card className="coffee-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">3 roky</div>
            <div className="text-foreground font-medium">Na trhu</div>
          </Card>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Co říkají naši partneři
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="coffee-card p-6 hover:scale-105 coffee-transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-4">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-primary font-semibold">
                  — {testimonial.author}
                </cite>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="coffee-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Chcete být další na seznamu?
            </h3>
            <p className="text-muted-foreground mb-6">
              Připojte se k síti úspěšných partnerů a začněte vydělávat s kávou KÁVES
            </p>
            <Button 
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 coffee-transition shadow-warm"
            >
              Získat nezávaznou nabídku
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;