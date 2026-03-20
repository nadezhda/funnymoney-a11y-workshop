import { branding } from '../config/branding';
import { AgendaList } from '../components/workshop';
import { PersonaList } from '../components/workshop';
import './HomePage.scss';

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-page__hero">
        <h1>{branding.workshopTitle}</h1>
        <p className="home-page__subtitle">{branding.workshopSubtitle}</p>
      </section>

      <section className="home-page__intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading">About this workshop</h2>
        <p>
          Welcome to the <strong>{branding.bankName}</strong> accessibility
          testing workshop. In this session, you will learn how to identify and
          fix common accessibility issues in web applications.
        </p>
        <p>
          We will use a fictional banking portal as our testing ground. You will
          work with real tools — keyboard, screen reader, browser zoom, and
          automated testing tools — to discover barriers that prevent people
          from using the web.
        </p>
      </section>

      <section className="home-page__agenda" aria-labelledby="agenda-heading">
        <h2 id="agenda-heading">Workshop agenda</h2>
        <AgendaList />
      </section>

      <section
        className="home-page__personas"
        aria-labelledby="personas-heading"
      >
        <h2 id="personas-heading">Meet the personas</h2>
        <p>
          These personas help us understand the needs of real people who use
          digital services in different ways. While every person’s experience is
          unique, these examples give us a helpful starting point. We will use
          them throughout the workshop to show why accessibility matters.
        </p>
        <PersonaList />
      </section>
    </div>
  );
}
