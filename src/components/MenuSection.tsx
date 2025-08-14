import { Card } from "@/components/ui/card";

const MenuSection = () => {
  const drinks = [
    { name: "Espresso", icon: "espresso.png", description: "Intenzivní chut' černé kávy" },
    { name: "Cappuccino", icon: "coffee.png", description: "Klasická kombinace kávy a mléka" },
    { name: "Flat White", icon: "coffee.png", description: "Silná káva s jemným mlékem" },
    { name: "Latte", icon: "coffee.png", description: "Mírná káva s množstvím mléka" },
    { name: "Dvojité espresso", icon: "espresso.png", description: "Extra silné espresso" },
    { name: "Mocha káva", icon: "mocha.png", description: "Káva s čokoládou" },
    { name: "Horká čokoláda", icon: "hotchocolate.png", description: "Luxusní horká čokoláda" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nabídka <span className="text-primary">nápojů</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Každý nápoj je připraven z čerstvě mleté kávy, kvalitního mléka a volitelných sirupů
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {drinks.map((drink, index) => (
            <Card key={index} className="coffee-card p-6 text-center hover:scale-105 coffee-transition group">
              <div className="mb-4 group-hover:scale-110 coffee-transition">
                <img 
                  src={`/foto-uploads/${drink.icon}`} 
                  alt={drink.name}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {drink.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {drink.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="mt-16 text-center">
          <Card className="coffee-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Kvalita na prvním místě
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="mb-4">
                  <img src="/foto-uploads/grains.png" alt="Kávová zrna" className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Vlastní pražírna</h4>
                <p className="text-muted-foreground text-sm">Čerstvě pražená zrna každý týden</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img src="/foto-uploads/milk.png" alt="Mléko" className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Kvalitní mléko</h4>
                <p className="text-muted-foreground text-sm">Pouze prémiové čerstvé mléko</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img src="/foto-uploads/machine.png" alt="Kávovar" className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Automatická příprava</h4>
                <p className="text-muted-foreground text-sm">Konzistentní kvalita každé kávy</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;