// Extend the Window interface to include Google Translate types
interface GoogleTranslateWindow extends Window {
  google?: {
    translate: {
      TranslateElement: {
        new (config: any, elementId: string): void;
        InlineLayout: {
          SIMPLE: number;
        };
      };
    };
    googleTranslateElementInit?: () => void;
  };
}

declare var window: GoogleTranslateWindow;

export {};
