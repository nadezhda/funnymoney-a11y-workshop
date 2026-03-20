import { NavLink } from 'react-router-dom';
import { mainNavItems } from '../../config/navigation';
import './Navigation.scss';

export function Navigation() {
  return (
    <nav aria-label="Main navigation" className="main-nav">
      <ul className="main-nav__list">
        {mainNavItems.map((item) => (
          <li key={item.path} className="main-nav__item">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `main-nav__link${isActive ? ' main-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
