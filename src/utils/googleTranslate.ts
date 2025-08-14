// Google Translate utility functions

type GoogleTranslateElement = {
  new (config: any, elementId: string): void;
  InlineLayout: {
    SIMPLE: number;
  };
};

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateElement;
      };
    };
  }
}

// Global function that will be called by Google Translate script
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

/**
 * Check if Google Translate is available
 */
export const isGoogleTranslateAvailable = (): boolean => {
  return typeof window !== 'undefined' && 
         !!window.google?.translate?.TranslateElement;
};

/**
 * Initialize Google Translate element
 */
export const getGoogleTranslateElement = (): void => {
  if (!isGoogleTranslateAvailable()) return;
  
  const { TranslateElement } = window.google!.translate!;
  
  new TranslateElement(
    {
      pageLanguage: 'cs',
      includedLanguages: 'cs,en,ru,pl',
      layout: TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    'google_translate_element'
  );
};

/**
 * Set the target language for Google Translate
 */
export const setGoogleTranslateLanguage = (language: string): void => {
  if (typeof document === 'undefined') return;
  
  // Set the cookie for Google Translate
  document.cookie = `googtrans=/cs/${language}; path=/;`;
  
  // Force Google Translate to reload with the new language
  if (typeof window !== 'undefined' && window.google?.translate?.TranslateElement) {
    // This will be handled by the Google Translate script
    // The actual language switch will happen on the next page load
  }
};
