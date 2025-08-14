import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProfitCalculator = () => {
  const [dailyCoffees, setDailyCoffees] = useState([80]);
  const [coffeePrice, setCoffeePrice] = useState([50]);
  
  const monthlyCosts = 2050; // Kč
  const coffeeCost = 14.15; // Kč náklady na jednu kávu (káva, mléko, cukr)
  
  const dailyProfit = (coffeePrice[0] - coffeeCost) * dailyCoffees[0];
  const monthlyProfit = dailyProfit * 31 - monthlyCosts;
  const investment = 202029; // Kč
  const paybackMonths = Math.round(investment / monthlyProfit * 10) / 10;

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Spočítejte si, kolik <span className="text-primary">vyděláte</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interaktivní kalkulačka vám ukáže reálný výnos z vaší kávové stanice KÁVES
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="coffee-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Input */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Nastavte parametry:
                  </h3>
                  
                    <div className="space-y-6">
                      <div>
                        <label className="block text-foreground font-medium mb-4">
                          Průměrný počet káv denně: <span className="text-primary font-bold">{dailyCoffees[0]}</span>
                        </label>
                        <Slider
                          value={dailyCoffees}
                          onValueChange={setDailyCoffees}
                          min={13}
                          max={140}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-2">
                          <span>13 káv</span>
                          <span>140 káv</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-foreground font-medium mb-4">
                          Prodejní cena kávy: <span className="text-primary font-bold">{coffeePrice[0]} Kč</span>
                        </label>
                        <Slider
                          value={coffeePrice}
                          onValueChange={setCoffeePrice}
                          min={14.16}
                          max={140}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-2">
                          <span>14,15 Kč</span>
                          <span>140 Kč</span>
                        </div>
                      </div>

                       <div className="coffee-card p-4 rounded-lg">
                         <div className="text-primary font-semibold">Provozní náklady</div>
                         <div className="text-2xl font-bold text-foreground">{monthlyCosts.toLocaleString()} Kč/měs</div>
                       </div>
                    </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Váš výnos:
                </h3>

                <div className="space-y-4">
                  <div className="bg-gradient-coffee p-6 rounded-xl text-center">
                    <div className="text-primary-foreground text-lg font-medium mb-2">
                      Denně prodáte:
                    </div>
                    <div className="text-4xl font-bold text-primary-foreground">
                      {dailyCoffees[0]} káv
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-xl text-center shadow-warm">
                    <div className="text-primary-foreground text-lg font-medium mb-2">
                      Měsíční čistý výdělek:
                    </div>
                    <div className="text-4xl font-bold text-primary-foreground">
                      {monthlyProfit.toLocaleString()} Kč
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-xl text-center">
                    <div className="text-secondary-foreground text-lg font-medium mb-2">
                      Návratnost investice:
                    </div>
                    <div className="text-3xl font-bold text-secondary-foreground">
                      {paybackMonths} měsíce
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="coffee-card p-4 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-primary font-semibold mb-2">Roční výnos:</div>
                    <div className="text-2xl font-bold text-foreground">
                      {(monthlyProfit * 12).toLocaleString()} Kč
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 coffee-transition shadow-warm"
                    onClick={scrollToForm}
                  >
                    Chci takový výnos!
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Example Cases */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { coffees: 40, location: "Malá kancelář", profit: ((50 - 14.15) * 40 * 31 - 2050) },
              { coffees: 80, location: "Střední firma", profit: ((50 - 14.15) * 80 * 31 - 2050) },
              { coffees: 150, location: "Velká korporace", profit: ((50 - 14.15) * 150 * 31 - 2050) }
            ].map((example, index) => (
              <Card key={index} className="coffee-card p-6 text-center hover:scale-105 coffee-transition">
                <h4 className="font-semibold text-primary mb-2">{example.location}</h4>
                <div className="text-muted-foreground mb-4">{example.coffees} káv/den (50 Kč za kelímek)</div>
                <div className="text-2xl font-bold text-foreground">
                  {example.profit.toLocaleString()} Kč/měs
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;