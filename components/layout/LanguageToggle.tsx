'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center rounded-full border border-white/20 overflow-hidden">
      <button
        onClick={() => switchLocale('es')}
        className={`px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
          locale === 'es'
            ? 'bg-sage text-navy'
            : 'bg-transparent text-cream hover:text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
          locale === 'en'
            ? 'bg-sage text-navy'
            : 'bg-transparent text-cream hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
