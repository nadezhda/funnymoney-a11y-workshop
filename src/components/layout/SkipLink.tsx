import './SkipLink.scss';

export function SkipLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) {
      main.tabIndex = -1;
      main.focus();
      main.scrollIntoView();
      main.removeAttribute('tabindex');
    }
  };

  return (
    <a href="#main-content" className="skip-link" onClick={handleClick}>
      Skip to main content
    </a>
  );
}
