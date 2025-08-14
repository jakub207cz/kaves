'use client';

const LANGUAGES = [
  { code: 'cs', label: 'Čeština' },
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'ru', label: 'Русский' },
];

interface LanguageSwitcherProps {
  onLangChange?: () => void;
}

const LanguageSwitcher = ({ onLangChange }: LanguageSwitcherProps) => {
  // Zjisti aktuální jazyk z cookie googtrans
  let currentLang = 'cs';
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/googtrans=\/cs\/([a-z]+)/);
    if (match && match[1]) currentLang = match[1];
  }

const handleChange = (lang: string, attempt = 0) => {
  // Nastav cookie pro Google Translate
  document.cookie = `googtrans=/cs/${lang}; path=/;`;

  // Najdi Google Translate combo
  const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;

  if (combo) {
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));
    if (onLangChange) onLangChange();
    console.log('[LanguageSwitcher] Combo found, about to reload page...');
    setTimeout(() => {
      try {
        console.log('[LanguageSwitcher] Calling window.location.reload()');
        window.location.reload();
      } catch (e) {
        console.error('[LanguageSwitcher] Error during reload:', e);
      }
    }, 200);
    return;
  }

  // Pokud není combo, zkus to znovu (max 10x, každých 200ms)
  if (attempt < 10) {
    setTimeout(() => handleChange(lang, attempt + 1), 200);
    return;
  } else {
    console.warn('[LanguageSwitcher] Could not find Google Translate combo after 10 attempts.');
  }

  // Zkus vynutit změnu přes Google Translate API
  // @ts-ignore
  if (window.google && window.google.translate && window.google.translate.TranslateElement) {
    // @ts-ignore
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'cs',
        includedLanguages: 'cs,en,pl,ru',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    );
  }

  // Pokud nic nepomohlo, upozorni uživatele
  alert('Překlad se nepodařilo změnit. Zkuste prosím obnovit stránku.');
};
  return (
    <select
      value={currentLang}
      onChange={e => handleChange(e.target.value)}
      style={{
        padding: '6px 12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        background: '#fff',
        color: '#222',
        fontWeight: 500,
        cursor: 'pointer',
        minWidth: 120,
      }}
      aria-label="Změnit jazyk"
    >
      {LANGUAGES.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
