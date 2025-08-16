import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ProfitCalculator = () => {
  const { t } = useTranslation();
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
            {t('calculator.title')} <span className="text-primary">{t('calculator.title').split(' ').pop()}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="coffee-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Input */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    {t('calculator.setParameters')}
                  </h3>
                  
                    <div className="space-y-6">
                      <div>
                        <label className="block text-foreground font-medium mb-4">
                          {t('calculator.averageCoffees')} <span className="text-primary font-bold">{dailyCoffees[0]}</span>
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
                          <span>13 {t('calculator.coffees')}</span>
                          <span>140 {t('calculator.coffees')}</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-foreground font-medium mb-4">
                          {t('calculator.sellingPrice')} <span className="text-primary font-bold">{coffeePrice[0]} Kč</span>
                        </label>
                        <Slider
                          value={coffeePrice}
                          onValueChange={setCoffeePrice}
                          min={14.15}
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
                         <div className="text-primary font-semibold">{t('calculator.operatingCosts')}</div>
                         <div className="text-2xl font-bold text-foreground">{monthlyCosts.toLocaleString()} Kč{t('calculator.perMonth')}</div>
                       </div>
                    </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {t('calculator.yourRevenue')}
                </h3>

                <div className="space-y-4">
                  <div className="bg-gradient-coffee p-6 rounded-xl text-center">
                    <div className="text-primary-foreground text-lg font-medium mb-2">
                      {t('calculator.dailySales')}
                    </div>
                    <div className="text-4xl font-bold text-primary-foreground">
                      {dailyCoffees[0]} {t('calculator.coffees')}
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-xl text-center shadow-warm">
                    <div className="text-primary-foreground text-lg font-medium mb-2">
                      {t('calculator.monthlyProfit')}
                    </div>
                    <div className="text-4xl font-bold text-primary-foreground">
                      {monthlyProfit.toLocaleString()} Kč
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-xl text-center">
                    <div className="text-secondary-foreground text-lg font-medium mb-2">
                      {t('calculator.paybackTime')}
                    </div>
                    <div className="text-3xl font-bold text-secondary-foreground">
                      {paybackMonths} {t('calculator.months')}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="coffee-card p-4 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-primary font-semibold mb-2">{t('calculator.annualProfit')}:</div>
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
                    {t('calculator.wantThisProfit')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Example Cases */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { coffees: 40, location: t('calculator.smallOffice'), profit: ((50 - 14.15) * 40 * 31 - 2050) },
              { coffees: 80, location: t('calculator.mediumCompany'), profit: ((50 - 14.15) * 80 * 31 - 2050) },
              { coffees: 150, location: t('calculator.largeCorporation'), profit: ((50 - 14.15) * 150 * 31 - 2050) }
            ].map((example, index) => (
              <Card key={index} className="coffee-card p-6 text-center hover:scale-105 coffee-transition">
                <h4 className="font-semibold text-primary mb-2">{example.location}</h4>
                <div className="text-muted-foreground mb-4">{example.coffees} {t('calculator.coffeePerDay')} (50 Kč {t('calculator.perCup')})</div>
                <div className="text-2xl font-bold text-foreground">
                  {example.profit.toLocaleString()} Kč{t('calculator.perMonth')}
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