import { categoryType } from '@/constants/languaje-translate';

export const translateLanguageCategory = (lang) => {
  return categoryType[lang] || 'other';
};
