import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, TranslationKeys } from '../translations';
import { setGoogleTranslateLanguage } from '../utils/googleTranslate';

export type Language = 'cs' | 'en' | 'ru' | 'pl';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const defaultLanguage: Language = 'cs';

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

// Type for accessing nested object properties
type NestedObject = { [key: string]: string | NestedObject };

/**
 * Get a nested value from an object using dot notation
 */
const getNestedValue = (obj: NestedObject, path: string): string => {
  if (!obj) return path; // Return path if object is not defined
  
  const result = path.split('.').reduce((acc, part) => {
    if (acc === undefined || acc === null) return undefined;
    return (acc as NestedObject)[part];
  }, obj as any);

  return typeof result === 'string' ? result : path;
};

/**
 * Get the user's preferred language from various sources
 */
const getPreferredLanguage = (): Language => {
  // Check for Google Translate cookie first
  if (typeof document !== 'undefined') {
    const googleTransCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('googtrans='));
    
    if (googleTransCookie) {
      const langCode = googleTransCookie.split('=')[1]?.split('/').pop() as Language;
      if (['cs', 'en', 'ru', 'pl'].includes(langCode)) {
        return langCode;
      }
    }
  }

  // Fall back to localStorage
  if (typeof localStorage !== 'undefined') {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage && ['cs', 'en', 'ru', 'pl'].includes(savedLanguage)) {
      return savedLanguage;
    }
  }

  // Fall back to browser language
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.split('-')[0] as Language;
    if (['cs', 'en', 'ru', 'pl'].includes(browserLang)) {
      return browserLang;
    }
  }

  // Default to Czech
  return 'cs';
};

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  // Initialize language on mount
  useEffect(() => {
    const preferredLang = getPreferredLanguage();
    setLanguageState(preferredLang);
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    if (typeof window === 'undefined') return;
    
    // Update local state
    setLanguageState(lang);
    
    // Persist the language preference
    localStorage.setItem('selectedLanguage', lang);
    
    // Update Google Translate
    setGoogleTranslateLanguage(lang);
  };

  /**
   * Translation function that handles nested keys and parameters
   */
  const t = (key: string, params: Record<string, any> = {}): string => {
    if (!isMounted) return key;
    
    try {
      // Get the translation for the current language
      let result = getNestedValue(translations[language], key);

      // If translation not found, fallback to Czech
      if (result === key && language !== 'cs') {
        result = getNestedValue(translations.cs, key);
      }

      // Replace parameters in the string
      if (typeof result === 'string' && params && Object.keys(params).length > 0) {
        return Object.entries(params).reduce((str, [key, value]) => {
          return str.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
        }, result);
      }

      return result;
    } catch (error) {
      console.warn('Translation error for key:', key, error);
      return key;
    }
  };

  const contextValue: TranslationContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * Hook to use the translation context
 */
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
