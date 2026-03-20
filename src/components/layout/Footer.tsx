import { branding } from '../../config/branding';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">{branding.copyright}</p>
      </div>
    </footer>
  );
}
