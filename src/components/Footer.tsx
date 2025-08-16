import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/foto-uploads/0a8efab2-c6b6-47a9-a86f-520c4e2ec8da.png"
                alt={t('alt.kavesLogo')}
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold text-primary"></h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80 coffee-transition flex items-center">
                <img src="/foto-uploads/socialmedia.png" alt={t('alt.instagramIcon')} className="w-6 h-6 mr-2" />
                kaves_web
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#o-nas" className="text-muted-foreground hover:text-primary coffee-transition">{t('footer.aboutUs')}</a></li>
              <li><a href="#partnerstvi" className="text-muted-foreground hover:text-primary coffee-transition">{t('footer.partnership')}</a></li>
              <li><a href="#kalkulacka" className="text-muted-foreground hover:text-primary coffee-transition">{t('footer.calculator')}</a></li>
              <li><a href="#lokace" className="text-muted-foreground hover:text-primary coffee-transition">{t('footer.locations')}</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary coffee-transition">{t('footer.faq')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <img src="/foto-uploads/phone.png" alt={t('alt.phoneIcon')} className="w-6 h-6 inline-block mr-2" /> +420 777 445 798
              </li>
              <li className="text-muted-foreground">
                <img src="/foto-uploads/email.png" alt="E-mail" className="w-6 h-6 inline-block mr-2" /> info@joinkaves.cz
              </li>
              <li className="text-muted-foreground">
                <a href="https://www.instagram.com/kaves_cz" className="flex items-center hover:text-primary coffee-transition">
                  <img src="/foto-uploads/socialmedia.png" alt={t('alt.socialMediaIcon')} className="w-6 h-6 mr-2" /> @kaves_cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary coffee-transition">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary coffee-transition">
              {t('footer.terms')}
            </a>
          </div>
        </div>

        {/* Coffee decoration */}
        <div className="text-center mt-8 opacity-50">
          <span className="text-4xl coffee-rotate">☕</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;