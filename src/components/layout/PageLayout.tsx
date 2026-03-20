import type { ReactNode } from 'react';
import { SkipLink } from './SkipLink';
import { Header } from './Header';
import { Footer } from './Footer';
import './PageLayout.scss';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <SkipLink />
      <Header />
      <main id="main-content" className="page-layout__main">
        <div className="page-layout__content">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
