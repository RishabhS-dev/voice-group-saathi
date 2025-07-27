import { useState, useEffect } from 'react';
import { getTranslation, type Translations } from '@/constants/translations';

export const useLanguage = (initialLanguage: string = 'hi') => {
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
  const [translations, setTranslations] = useState<Translations>(getTranslation(initialLanguage));

  useEffect(() => {
    setTranslations(getTranslation(currentLanguage));
  }, [currentLanguage]);

  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
  };

  return {
    currentLanguage,
    translations,
    changeLanguage
  };
};