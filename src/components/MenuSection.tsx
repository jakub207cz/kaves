import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const MenuSection = () => {
  const { t } = useTranslation();
  
  const drinks = [
    { name: t('menu.drinks.espresso'), icon: "espresso.png", description: t('menu.drinks.espressoDesc') },
    { name: t('menu.drinks.cappuccino'), icon: "coffee.png", description: t('menu.drinks.cappuccinoDesc') },
    { name: t('menu.drinks.flatWhite'), icon: "coffee.png", description: t('menu.drinks.flatWhiteDesc') },
    { name: t('menu.drinks.latte'), icon: "coffee.png", description: t('menu.drinks.latteDesc') },
    { name: t('menu.drinks.doubleEspresso'), icon: "espresso.png", description: t('menu.drinks.doubleEspressoDesc') },
    { name: t('menu.drinks.mocha'), icon: "mocha.png", description: t('menu.drinks.mochaDesc') },
    { name: t('menu.drinks.hotChocolate'), icon: "hotchocolate.png", description: t('menu.drinks.hotChocolateDesc') }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t('menu.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('menu.subtitle')}
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
              {t('menu.qualityFirst')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="mb-4">
                  <img src="/foto-uploads/grains.png" alt={t('alt.coffeeBeansIcon')} className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('menu.ownRoastery')}</h4>
                <p className="text-muted-foreground text-sm">{t('menu.roasteryDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img src="/foto-uploads/milk.png" alt={t('alt.milkIcon')} className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('menu.qualityMilk')}</h4>
                <p className="text-muted-foreground text-sm">{t('menu.milkDesc')}</p>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <img src="/foto-uploads/machine.png" alt={t('alt.coffeeMachineIcon')} className="w-16 h-16 mx-auto" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t('menu.automaticPrep')}</h4>
                <p className="text-muted-foreground text-sm">{t('menu.prepDesc')}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;