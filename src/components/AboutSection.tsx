import { Card } from "@/components/ui/card";
import coffeeBeansImage from "@/assets/coffee-beans.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                O značce KÁVES
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                KÁVES je hrdá česká společnost přinášející samoobslužné kávové stanice. Prémiová, čerstvě mletá káva z naší vlastní české pražírny, moderní design a provoz bez zaměstnanců.
                Vše vyrábíme s důrazem na kvalitu, tradici a poctivou českou práci.
              </p>
            </div>


          </div>

          {/* Image */}
          <div className="relative">
            <div className="coffee-card rounded-2xl overflow-hidden">
              <img 
                src="/foto-uploads/2b98a344-db94-404b-86c0-f5505fe93079.png"
                alt="Šálek kvalitní kávy z naší nabídky"
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
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Porovnání: Prodejní automaty VS KÁVES</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Prodejní stroje */}
          <Card className="coffee-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-2">Prodejní stroje</h3>
            <p className="text-muted-foreground mb-4 text-sm">Prodejní automaty jsou zastaralé, používají prášek a nejsou schopny poskytnout kvalitní nápoj</p>
            <ul className="space-y-3 text-left text-base">
              <li className="flex items-start gap-2"><span className="text-destructive">✗</span><span>Staromódní design kávovaru</span></li>
              <li className="flex items-start gap-2"><span className="text-destructive">✗</span><span>Používají pochybné ingredience a nekvalitní, bezchutný kávový prášek</span></li>
              <li className="flex items-start gap-2"><span className="text-destructive">✗</span><span>Většinou platba v hotovosti</span></li>
              <li className="flex items-start gap-2"><span className="text-destructive">✗</span><span>Neexistuje žádná jedinečnost – podobné automaty jsou na každém rohu</span></li>
            </ul>
          </Card>
          {/* COFFEEPOINT KÁVA */}
          <Card className="coffee-card p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-foreground mb-2">KÁVES</h3>
            <p className="text-muted-foreground mb-4 text-sm">Buďte svým vlastním baristou – připravte si vlastní kávu s použitím sirupů a polev</p>
            <ul className="space-y-3 text-left text-base">
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Nový formát na trhu a prémiový design</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Vynikající chuť čerstvě pražených kávových zrn z české pražírny</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Suroviny prémiové kvality</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Vzdálená správa a sledování ziskovosti</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Platba se provádí prostřednictvím plateb kartou / mobilem</span></li>
              <li className="flex items-start gap-2"><span className="text-primary">✓</span><span>Používání profesionálního kávovaru</span></li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;