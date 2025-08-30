import { LanguageProvider as Provider } from '@/hooks/use-language';
import { ReactNode } from 'react';

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
