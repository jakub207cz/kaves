import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import coffeeBeansImage from "@/assets/coffee-beans.jpg";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </p>
            </div>


          </div>

          {/* Image */}
          <div className="relative">
            <div className="coffee-card rounded-2xl overflow-hidden">
              <img 
                src="/foto-uploads/2b98a344-db94-404b-86c0-f5505fe93079.png"
                alt={t('alt.coffeeImage')}
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full coffee-rotate" />
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">{t('about.comparison.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Prodejní stroje */}
          <Card className="coffee-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-2">{t('about.comparison.vendingMachines.title')}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{t('about.comparison.vendingMachines.subtitle')}</p>
            <ul className="space-y-3 text-left text-base">
              {(t('about.comparison.vendingMachines.disadvantages', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          {/* KÁVES */}
          <Card className="coffee-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-2">{t('about.comparison.kaves.title')}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{t('about.comparison.kaves.subtitle')}</p>
            <ul className="space-y-3 text-left text-base">
              {(t('about.comparison.kaves.advantages', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;