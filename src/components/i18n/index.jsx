import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { loginFiles } from './login-files'
import { navbarFiles } from './navbar-files'

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init(
    {
      lng: 'en', // idioma por defecto
      fallbackLng: 'en',
      // debug: true,
      ns: ['dashboard', ...navbarFiles, ...loginFiles], // nombres de los archivos de traducción
      defaultNS: 'dashboard',
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json' // ruta a los archivos de traducción
      },
      interpolation: {
        escapeValue: false // react ya hace el escape
      }
    },
    (err, t) => {
      if (err) {
        console.error('Error initializing i18next:', err)
      } else {
        console.log('i18next is initialized and ready to use')
      }
    }
  )

export default i18n
