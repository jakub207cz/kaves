import { useState, useRef, useEffect } from "react";

import LanguageSwitcher from "./LanguageSwitcher";

// Helper to get current language from cookie
function getCurrentLang() {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/googtrans=\/cs\/([a-z]+)/);
    if (match && match[1]) return match[1];
  }
  return 'cs';
}

const Navigation = () => {
  // Stav pro Google Translate bar
  const [translateBarActive, setTranslateBarActive] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>(getCurrentLang());

  // Listen for language change events (if needed)
  useEffect(() => {
    const onLangChange = () => {
      setCurrentLang(getCurrentLang());
    };
    window.addEventListener('languageChanged', onLangChange);
    return () => {
      window.removeEventListener('languageChanged', onLangChange);
    };
  }, []);

  useEffect(() => {
    function adjustNavbarForGoogleTranslate() {
      const gtBar = document.querySelector('iframe.goog-te-banner-frame');
      setTranslateBarActive(!!gtBar);
    }
    const observer = new MutationObserver(adjustNavbarForGoogleTranslate);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('DOMContentLoaded', adjustNavbarForGoogleTranslate);
    adjustNavbarForGoogleTranslate();
    return () => {
      observer.disconnect();
      window.removeEventListener('DOMContentLoaded', adjustNavbarForGoogleTranslate);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const copyTimeoutRef = useRef<number>();

  // Clear the copy feedback after 2 seconds
  useEffect(() => {
    if (copiedItem) {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    }
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, [copiedItem]);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    try {
      // Select and copy the text
      textArea.select();
      const successful = document.execCommand('copy');
      
      if (successful) {
        setCopiedItem(type);
      } else {
        // Fallback to modern Clipboard API if execCommand fails
        navigator.clipboard.writeText(text).then(
          () => setCopiedItem(type),
          () => console.error('Copy to clipboard failed')
        );
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    } finally {
      // Clean up
      document.body.removeChild(textArea);
    }
  };

  const navItems = [
    { href: "#jak-to-funguje", label: "Jak to funguje" },
    { href: "#kalkulacka", label: "Kalkulačka" },
    { href: "#o-nas", label: "O nás" },
    { href: "#kontakt", label: "Kontakt" }
    // Removed: { href: "#faq", label: "Časté dotazy" }
  ];

  return (
    <nav className={`fixed ${currentLang !== 'cs' ? 'top-[40px]' : 'top-0'} left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border${translateBarActive ? ' navbar--translate-active' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none"
              aria-label="Přejít na začátek stránky"
            >
              <img 
                src="/foto-uploads/c070cc0f-12b7-4933-b65b-885e034832df.png"
                alt="KÁVES Logo"
                className="h-12 w-auto hover:opacity-90 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary coffee-transition px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side: CTA Button and Language Switcher */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            {/* CTA Button with Hover Menu */}
            <div className="hidden md:block relative group">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 coffee-transition">
                Časté dotazy
              </button>
              
              {/* Hover Menu */}
              <div className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible coffee-transition z-50">
                <div className="p-4 space-y-3">
                  <button
                    onClick={() => copyToClipboard('+420 777 445 798', 'phone')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted coffee-transition text-left relative"
                  >
                    <img src="/foto-uploads/phone.png" alt="Telefon" className="w-8 h-8" />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        Telefon
                        {copiedItem === 'phone' && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            {("Zkopírováno!")}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">+420 777 445 798</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => copyToClipboard('info@kaves.cz', 'email')}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted coffee-transition text-left"
                  >
                    <img src="/foto-uploads/email.png" alt="E-mail" className="w-8 h-8" />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        E-mail
                        {copiedItem === 'email' && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            {("Zkopírováno!")}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">info@kaves.cz</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => {
                      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted coffee-transition text-left"
                  >
                    <img src="/foto-uploads/formular.png" alt="Formulář" className="w-8 h-8" />
                    <div>
                      <div className="font-semibold text-foreground">Formulář</div>
                      <div className="text-sm text-muted-foreground">Přejít na kontaktní formulář</div>
                    </div>
                  </button>
                  
                  <a
                    href="https://www.instagram.com/kaves_cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted coffee-transition text-left"
                  >
                    <img src="/foto-uploads/socialmedia.png" alt="Sociální sítě" className="w-8 h-8" />
                    <div>
                      <div className="font-semibold text-foreground">Instagram</div>
                      <div className="text-sm text-muted-foreground">@kaves_cz</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary coffee-transition p-2"
            >
              <span className="sr-only">Otevřít menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted-foreground hover:text-primary coffee-transition block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-primary-foreground block px-3 py-2 rounded-md text-base font-medium mt-4 w-full text-left"
              >
                {("common.getOffer")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;