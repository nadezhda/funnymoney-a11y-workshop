import { useState } from 'react';
import {
  ExamplePair,
  PersonaList,
  TestChecklist,
  WcagCriteria,
} from '../components/workshop';
import { structureContent as content } from '../content/structureContent';
import piggyBankImg from '../assets/qd567erfyiigq.jpg';
import { usePageTitle } from '../hooks/usePageTitle';
import './StructurePage.scss';

export function StructurePage() {
  usePageTitle('Document Structure');
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setFaqOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const { sections } = content;

  return (
    <div className="structure-page">
      <h1>{content.title}</h1>
      <p className="structure-page__intro">{content.intro}</p>

      <section
        aria-labelledby="personas-heading"
        className="structure-page__section"
      >
        <h2 id="personas-heading">Who is affected?</h2>
        <PersonaList personaIds={content.personaIds} compact />
      </section>

      {/* What to Test */}
      <section
        aria-labelledby="testing-heading"
        className="structure-page__section"
      >
        <h2 id="testing-heading">What to test?</h2>
        <TestChecklist items={content.checklist} />
      </section>

      {/* Page Title */}
      <section
        aria-labelledby="page-title-heading"
        className="structure-page__section"
      >
        <h2 id="page-title-heading">{sections.pageTitle.heading}</h2>
        <p>{sections.pageTitle.description}</p>
        <div className="structure-page__code-example">
          <pre>
            <code>{sections.pageTitle.codeExample}</code>
          </pre>
        </div>
        <div className="structure-page__tip">
          <strong>Why it matters:</strong> {sections.pageTitle.tip}
        </div>
        <WcagCriteria criteria={sections.pageTitle.wcag} />
      </section>

      {/* Language Attribute */}
      <section
        aria-labelledby="language-heading"
        className="structure-page__section"
      >
        <h2 id="language-heading">{sections.language.heading}</h2>
        <p>{sections.language.description}</p>
        <div className="structure-page__code-example">
          <pre>
            <code>{sections.language.codeExample}</code>
          </pre>
        </div>
        <div className="structure-page__tip">
          <strong>Why it matters:</strong> {sections.language.tip}
        </div>
        <WcagCriteria criteria={sections.language.wcag} />
      </section>

      {/* Heading Structure */}
      <section
        aria-labelledby="headings-heading"
        className="structure-page__section"
      >
        <h2 id="headings-heading">{sections.headings.heading}</h2>
        <p>{sections.headings.description}</p>
        <ul className="structure-page__tips">
          {sections.headings.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <ExamplePair
          title={sections.headings.exampleTitle}
          description={sections.headings.exampleDescription}
          incorrectExample={
            <div className="structure-page__heading-demo">
              <p className="structure-page__demo-h1">Welcome to FunnyMoney</p>
              <p className="structure-page__demo-h2">Our Services</p>
              <p>We offer checking and savings accounts.</p>
              <p className="structure-page__demo-h2">Contact Us</p>
              <p>Call us at 040-0123.</p>
            </div>
          }
          correctExample={
            <div className="structure-page__heading-demo">
              <h3 className="structure-page__demo-h1">Welcome to FunnyMoney</h3>
              <h4 className="structure-page__demo-h2">Our Services</h4>
              <p>We offer checking and savings accounts.</p>
              <h4 className="structure-page__demo-h2">Contact Us</h4>
              <p>Call us at 040-0123.</p>
            </div>
          }
          incorrectExplanation={sections.headings.incorrectExplanation}
          correctExplanation={sections.headings.correctExplanation}
        />
        <WcagCriteria criteria={sections.headings.wcag} />
      </section>

      {/* Images & Alt Text */}
      <section
        aria-labelledby="alt-text-heading"
        className="structure-page__section"
      >
        <h2 id="alt-text-heading">{sections.altText.heading}</h2>
        <p>{sections.altText.description}</p>

        <div className="structure-page__alt-demos">
          <ExamplePair
            title={sections.altText.informative.subheading}
            incorrectExample={
              <div className="structure-page__img-demo">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={piggyBankImg} width="200" height="120" />
                <p>{sections.altText.informative.caption}</p>
              </div>
            }
            correctExample={
              <div className="structure-page__img-demo">
                <img
                  src={piggyBankImg}
                  alt={sections.altText.informative.correctAlt}
                  width="200"
                  height="120"
                />
                <p>{sections.altText.informative.caption}</p>
              </div>
            }
            incorrectExplanation={
              sections.altText.informative.incorrectExplanation
            }
            correctExplanation={sections.altText.informative.correctExplanation}
          />

          <ExamplePair
            title={sections.altText.decorative.subheading}
            incorrectExample={
              <div className="structure-page__img-demo">
                <img
                  src="https://placehold.co/400x8/0d7377/0d7377"
                  alt={sections.altText.decorative.incorrectAlt}
                  width="400"
                  height="8"
                />
              </div>
            }
            correctExample={
              <div className="structure-page__img-demo">
                <img
                  src="https://placehold.co/400x8/0d7377/0d7377"
                  alt=""
                  width="400"
                  height="8"
                />
              </div>
            }
            incorrectExplanation={
              sections.altText.decorative.incorrectExplanation
            }
            correctExplanation={sections.altText.decorative.correctExplanation}
          />
        </div>
        <WcagCriteria criteria={sections.altText.wcag} />
      </section>

      {/* Landmarks & ARIA Labels */}
      <section
        aria-labelledby="landmarks-heading"
        className="structure-page__section"
      >
        <h2 id="landmarks-heading">{sections.landmarks.heading}</h2>
        <p>{sections.landmarks.description}</p>

        <div className="structure-page__landmark-demo">
          <h3>{sections.landmarks.subheading}</h3>
          <p>{sections.landmarks.explanation}</p>

          <nav
            aria-label={sections.landmarks.secondaryNavLabel}
            className="structure-page__secondary-nav"
          >
            <ul>
              {sections.landmarks.secondaryNavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="structure-page__tip">
            <strong>Try it:</strong> {sections.landmarks.tip}
          </div>
        </div>
        <WcagCriteria criteria={sections.landmarks.wcag} />
      </section>

      {/* Accordion */}
      <section
        aria-labelledby="accordion-heading"
        className="structure-page__section"
      >
        <h2 id="accordion-heading">{sections.accordion.heading}</h2>
        <p>{sections.accordion.description}</p>

        <div className="structure-page__accordion">
          {sections.accordion.items.map((item) => (
            <div key={item.id} className="structure-page__accordion-item">
              <h3>
                <button
                  id={item.id}
                  className="structure-page__accordion-trigger"
                  aria-expanded={faqOpen[item.id] ?? false}
                  aria-controls={`${item.id}-panel`}
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.question}</span>
                  <span
                    className="structure-page__accordion-icon"
                    aria-hidden="true"
                  >
                    {faqOpen[item.id] ? '−' : '+'}
                  </span>
                </button>
              </h3>
              {faqOpen[item.id] && (
                <div
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={item.id}
                  className="structure-page__accordion-panel"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <WcagCriteria criteria={sections.accordion.wcag} />
      </section>

      {/* Login Form */}
      <section
        aria-labelledby="login-heading"
        className="structure-page__section"
      >
        <h2 id="login-heading">{sections.loginForm.heading}</h2>
        <p>{sections.loginForm.description}</p>

        <form
          className="structure-page__login-form"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="structure-page__field">
            <label htmlFor="login-username">
              {sections.loginForm.fields.username.label}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="login-username"
              type="text"
              aria-required="true"
              autoComplete="username"
            />
          </div>

          <div className="structure-page__field">
            <label htmlFor="login-password">
              {sections.loginForm.fields.password.label}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="login-password"
              type="password"
              aria-required="true"
              aria-describedby="password-hint"
              autoComplete="current-password"
            />
            <p id="password-hint" className="structure-page__field-hint">
              {sections.loginForm.fields.password.hint}
            </p>
          </div>

          <button type="submit" className="structure-page__login-submit">
            {sections.loginForm.submitLabel}
          </button>
        </form>

        <div className="structure-page__tip">
          <strong>Why it matters:</strong> {sections.loginForm.tip}
        </div>
        <WcagCriteria criteria={sections.loginForm.wcag} />
      </section>
    </div>
  );
}
