import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Zásady ochrany osobních údajů</h1>
          <p className="text-muted-foreground">Platné a účinné od 12. srpna 2025</p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Úvodní ustanovení</h2>
            <p>
              Společnost [NÁZEV SPOLEČNOSTI], IČO: [IČO], se sídlem [ADRESA] (dále jen „Správce"), jakožto správce osobních údajů, tímto informuje subjekty údajů o způsobu, rozsahu a účelu zpracování osobních údajů, jakož i o jejich právech v souvislosti s ochranou osobních údajů v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů (dále jen „GDPR").
            </p>
          </section>

          {/* Other sections remain the same as before */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Základní pojmy</h2>
            <p className="font-medium mb-2">Pro účely těchto zásad se rozumí:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Osobní údaj</strong> - veškeré informace o identifikované nebo identifikovatelné fyzické osobě.</li>
              <li><strong>Subjekt údajů</strong> - fyzická osoba, ke které se vztahují osobní údaje.</li>
              <li><strong>Zpracování</strong> - jakákoliv operace nebo soubor operací s osobními údaji.</li>
              <li><strong>Správce</strong> - subjekt, který určuje účel a prostředky zpracování osobních údajů.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Účel zpracování osobních údajů</h2>
            <p>Osobní údaje zpracováváme pro následující účely:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Platně uzavřené smlouvy mezi námi a zákazníkem</li>
              <li>Odpovědi na dotazy a požadavky zaslané prostřednictvím kontaktního formuláře</li>
              <li>Platné právní povinnosti vyplývající z příslušných právních předpisů</li>
              <li>Ochrana oprávněných zájmů Správce</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Kategorie osobních údajů</h2>
            <p>Zpracováváme následující kategorie osobních údajů:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Identifikační údaje (jméno, příjmení, titul)</li>
              <li>Kontaktní údaje (e-mailová adresa, telefonní číslo, doručovací adresa)</li>
              <li>Fakturační údaje (IČO, DIČ, fakturační adresa)</li>
              <li>Další údaje nezbytné pro plnění smlouvy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Doba uchovávání osobních údajů</h2>
            <p>Osobní údaje jsou uchovávány po dobu nezbytně nutnou k naplnění účelu, pro který byly shromážděny, nebo po dobu stanovenou příslušnými právními předpisy. Po uplynutí této doby budou osobní údaje vymazány nebo anonymizovány.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Příjemci osobních údajů</h2>
            <p>Osobní údaje mohou být zpřístupněny:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Zaměstnancům Správce v rozsahu nezbytném pro plnění jejich pracovních povinností</li>
              <li>Externím zpracovatelům, kteří se zavázali k dodržování ochrany osobních údajů</li>
              <li>Orgánům veřejné moci v případech stanovených právními předpisy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Práva subjektů údajů</h2>
            <p>V souladu s GDPR máte následující práva:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Právo na přístup k osobním údajům</li>
              <li>Právo na opravu nepřesných údajů</li>
              <li>Právo na výmaz (právo být zapomenut)</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo na přenositelnost údajů</li>
              <li>Právo vznést námitku</li>
              <li>Právo podat stížnost u dozorového úřadu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Kontaktní údaje</h2>
            <p>V případě dotazů ohledně ochrany osobních údajů nás můžete kontaktovat:</p>
            <address className="not-italic mt-4">
              <p>[NÁZEV SPOLEČNOSTI]</p>
              <p>IČO: [IČO]</p>
              <p>E-mail: [E-MAIL]</p>
              <p>Adresa: [ADRESA]</p>
            </address>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Závěrečná ustanovení</h2>
            <p>Správce si vyhrazuje právo tyto zásady aktualizovat. Aktuální znění zásad je vždy zveřejněno na těchto webových stránkách.</p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/">Zpět na úvodní stránku</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
