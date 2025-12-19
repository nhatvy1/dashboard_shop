import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import locale modules
import enCommon from './locales/en/common.json';
import enAuth from './locales/en/auth.json';
import enDashboard from './locales/en/dashboard.json';
import enUsers from './locales/en/users.json';
import enTeams from './locales/en/teams.json';
import enWallets from './locales/en/wallets.json';
import enRoles from './locales/en/roles.json';
import enLayout from './locales/en/layout.json';
import enProducts from './locales/en/products.json';

import viCommon from './locales/vi/common.json';
import viAuth from './locales/vi/auth.json';
import viDashboard from './locales/vi/dashboard.json';
import viUsers from './locales/vi/users.json';
import viTeams from './locales/vi/teams.json';
import viWallets from './locales/vi/wallets.json';
import viRoles from './locales/vi/roles.json';
import viLayout from './locales/vi/layout.json';
import viProducts from './locales/vi/products.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        auth: enAuth,
        dashboard: enDashboard,
        users: enUsers,
        teams: enTeams,
        wallets: enWallets,
        roles: enRoles,
        layout: enLayout,
        products: enProducts,
      },
      vi: {
        common: viCommon,
        auth: viAuth,
        dashboard: viDashboard,
        users: viUsers,
        teams: viTeams,
        wallets: viWallets,
        roles: viRoles,
        layout: viLayout,
        products: viProducts,
      },
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    defaultNS: 'common',
    ns: ['common', 'auth', 'dashboard', 'users', 'teams', 'wallets', 'roles', 'layout', 'products'],
  });

export default i18n;

