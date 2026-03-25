import {
  Carousel,
  ExamplePair,
  PersonaList,
  TestChecklist,
  WcagCriteria,
} from '../components/workshop';
import { zoomContent as content } from '../content/zoomContent';
import { usePageTitle } from '../hooks/usePageTitle';
import './ZoomPage.scss';

export function ZoomPage() {
  usePageTitle('Zoom & Reflow');
  const { sections } = content;

  return (
    <div className="zoom-page">
      <h1>{content.title}</h1>
      <p className="zoom-page__intro">{content.intro}</p>

      <section
        aria-labelledby="personas-heading"
        className="zoom-page__section"
      >
        <h2 id="personas-heading">Who is affected?</h2>
        <PersonaList personaIds={content.personaIds} compact />
      </section>

      {/* What to Test */}
      <section aria-labelledby="testing-heading" className="zoom-page__section">
        <h2 id="testing-heading">What to test?</h2>
        <TestChecklist items={content.checklist} />
      </section>

      {/* Text Resize */}
      <section
        aria-labelledby="text-resize-heading"
        className="zoom-page__section"
      >
        <h2 id="text-resize-heading">{sections.textResize.heading}</h2>
        <WcagCriteria criteria={sections.textResize.wcag} />
        <p>{sections.textResize.description}</p>

        <ExamplePair
          title={sections.textResize.exampleTitle}
          description={sections.textResize.exampleDescription}
          extra={
            <ul>
              {sections.textResize.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          }
          incorrectExample={
            <div className="zoom-page__text-demo">
              <p style={{ fontSize: '14px' }}>
                This text uses a fixed size of <strong>14px</strong>. Fixed
                pixel sizes do not support user font size preferences as well as
                relative units such as <strong>rem</strong>.
              </p>
              <p style={{ fontSize: '12px' }}>
                Small print: Terms and conditions apply. See our website for
                full details on all FunnyMoney products and services.
              </p>
            </div>
          }
          correctExample={
            <div className="zoom-page__text-demo">
              <p style={{ fontSize: '0.875rem' }}>
                This text is set in <strong>0.875rem</strong>. It respects the
                user&apos;s browser font size preference and scales properly.
              </p>
              <p style={{ fontSize: '0.75rem' }}>
                Small print: Terms and conditions apply. See our website for
                full details on all FunnyMoney products and services.
              </p>
            </div>
          }
          incorrectExplanation={sections.textResize.incorrectExplanation}
          correctExplanation={sections.textResize.correctExplanation}
        />
      </section>

      {/* Reflow */}
      <section aria-labelledby="reflow-heading" className="zoom-page__section">
        <h2 id="reflow-heading">{sections.reflow.heading}</h2>
        <WcagCriteria criteria={sections.reflow.wcag} />
        <p>{sections.reflow.description}</p>

        <ExamplePair
          title={sections.reflow.layout.exampleTitle}
          description={sections.reflow.layout.exampleDescription}
          incorrectExample={
            <div className="zoom-page__reflow-bad">
              {sections.reflow.layout.cards.map((card) => (
                <div key={card} className="zoom-page__reflow-card">
                  {card}
                </div>
              ))}
            </div>
          }
          correctExample={
            <div className="zoom-page__reflow-good">
              {sections.reflow.layout.cards.map((card) => (
                <div key={card} className="zoom-page__reflow-card">
                  {card}
                </div>
              ))}
            </div>
          }
          incorrectExplanation={sections.reflow.layout.incorrectExplanation}
          correctExplanation={sections.reflow.layout.correctExplanation}
        />

        <h3>{sections.reflow.carousel.exampleTitle}</h3>
        <p>{sections.reflow.carousel.description}</p>

        <Carousel
          label={sections.reflow.carousel.regionLabel}
          slides={sections.reflow.carousel.slides}
        />
      </section>

      {/* Spacing & Touch Targets */}
      <section aria-labelledby="spacing-heading" className="zoom-page__section">
        <h2 id="spacing-heading">{sections.spacing.heading}</h2>
        <WcagCriteria criteria={sections.spacing.wcag} />
        <ExamplePair
          title={sections.spacing.exampleTitle}
          description={sections.spacing.exampleDescription}
          incorrectExample={
            <div className="zoom-page__targets-bad">
              {sections.spacing.actions.map((action) => (
                <button
                  key={action.label}
                  className="zoom-page__icon-btn-small"
                  aria-label={action.label}
                >
                  {action.icon}
                </button>
              ))}
            </div>
          }
          correctExample={
            <div className="zoom-page__targets-good">
              {sections.spacing.actions.map((action) => (
                <button
                  key={action.label}
                  className="zoom-page__icon-btn-large"
                  aria-label={action.label}
                >
                  {action.icon}
                </button>
              ))}
            </div>
          }
          incorrectExplanation={sections.spacing.incorrectExplanation}
          correctExplanation={sections.spacing.correctExplanation}
        />
      </section>
    </div>
  );
}
