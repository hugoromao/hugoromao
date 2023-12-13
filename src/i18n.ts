import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'pt'];

export type Locale = 'en' | 'pt';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default
}));
