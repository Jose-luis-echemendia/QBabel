import { categoryType,translateLanguage } from '@/constants/languaje-translate';

export const translateLanguageCategory = (lang) => {
  return categoryType[lang] || 'other';
};

export const translateLanguageBookAdd = (lang) => {
  return translateLanguage[lang] || 'spanish';
};
