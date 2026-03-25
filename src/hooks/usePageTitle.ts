import { useEffect } from 'react';

const BASE_TITLE = 'FunnyMoney Bank — Accessibility Workshop';

export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} — ${BASE_TITLE}`
      : BASE_TITLE;
  }, [pageTitle]);
}
