import { Link } from 'react-router-dom';
import { branding } from '../../config/branding';
import { Navigation } from './Navigation';
import './Header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <span className="header__bank-name">{branding.bankName}</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
