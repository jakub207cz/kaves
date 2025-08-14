# Translation Guide

This document provides an overview of the translation system implemented in the Káves application.

## Overview

The application uses a custom translation system built with React Context API. The system supports multiple languages and persists the user's language preference in localStorage.

## Supported Languages

- Czech (`cs`) - Default
- English (`en`)
- Russian (`ru`)
- Polish (`pl`)

## Directory Structure

```
src/
  ├── contexts/
  │   └── TranslationContext.tsx  # Translation context and provider
  ├── translations/
  │   └── index.ts               # Translation strings for all languages
  └── components/
      └── LanguageSwitcher.tsx   # Language selection component
```

## Adding a New Language

1. Add the new language code to the `Language` type in `TranslationContext.tsx`
2. Add the new language object to the `translations` object in `translations/index.ts`
3. Add the language to the `languages` array in `LanguageSwitcher.tsx`

## Using Translations in Components

1. Import the `useTranslation` hook:
   ```tsx
   import { useTranslation } from "@/contexts/TranslationContext";
   ```

2. Use the `t` function to get translated strings:
   ```tsx
   const { t } = useTranslation();
   
   return (
     <div>
       <h1>{t("common.welcome")}</h1>
       <p>{t("home.subtitle")}</p>
     </div>
   );
   ```

## Adding New Translation Keys

1. Add the key to the `TranslationKeys` interface in `translations/index.ts`
2. Add the translation for each supported language
3. Use the new key in your components with the `t` function

## Best Practices

1. Use nested objects to organize translations by feature/section
2. Keep translation keys descriptive and consistent
3. Always provide a default value for missing translations
4. Use TypeScript to ensure type safety

## Testing Translations

1. The language switcher is available in the navigation
2. The selected language is persisted across page refreshes
3. All UI elements should update immediately when the language changes

## Known Issues

- None at the moment

## Future Improvements

- Add language detection based on browser settings
- Implement RTL (Right-to-Left) support for languages like Arabic and Hebrew
- Add a translation management system for non-technical users to update translations
