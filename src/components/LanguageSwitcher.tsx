import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'cs', label: 'Čeština', flag: '🇨🇿' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
];

interface LanguageSwitcherProps {
  onLangChange?: () => void;
}

const LanguageSwitcher = ({ onLangChange }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const handleChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    if (onLangChange) {
      onLangChange();
    }
  };

  const currentLanguage = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0];

  return (
    <select
      value={i18n.language}
      onChange={e => handleChange(e.target.value)}
      className="px-3 py-2 border border-border rounded-md bg-background text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
      aria-label="Změnit jazyk / Change language"
    >
      {LANGUAGES.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;