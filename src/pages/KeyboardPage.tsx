import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ExamplePair,
  PersonaList,
  TestChecklist,
  WcagCriteria,
} from '../components/workshop';
import { keyboardContent as content } from '../content/keyboardContent';
import './KeyboardPage.scss';

export function KeyboardPage() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  const [badModalOpen, setBadModalOpen] = useState(false);
  const [goodModalOpen, setGoodModalOpen] = useState(false);
  const badTriggerRef = useRef<HTMLButtonElement>(null);
  const goodTriggerRef = useRef<HTMLButtonElement>(null);
  const goodModalRef = useRef<HTMLDivElement>(null);

  const closeGoodModal = useCallback(() => {
    setGoodModalOpen(false);
    goodTriggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!goodModalOpen || !goodModalRef.current) return;

    const modal = goodModalRef.current;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeGoodModal();
        return;
      }
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    return () => modal.removeEventListener('keydown', handleKeyDown);
  }, [goodModalOpen, closeGoodModal]);
  const [formData, setFormData] = useState({
    name: '',
    accountType: '',
    contactMethod: '',
    agreements: { terms: false, newsletter: false, marketing: false },
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCheckboxChange = (key: keyof typeof formData.agreements) => {
    setFormData((prev) => ({
      ...prev,
      agreements: { ...prev.agreements, [key]: !prev.agreements[key] },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const { sections } = content;

  return (
    <div className="keyboard-page">
      <h1>{content.title}</h1>

      {/* Why matters */}
      <p>{content.intro}</p>
      <p>{content.introWhy}</p>
      <ul className="keyboard-page__intro">
        {content.introList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Personas */}
      <section
        aria-labelledby="personas-heading"
        className="keyboard-page__section"
      >
        <h2 id="persona-heading">Who is affected?</h2>
        <PersonaList personaIds={content.personaIds} compact />
      </section>

      {/* What to Test */}
      <section
        aria-labelledby="testing-heading"
        className="keyboard-page__section"
      >
        <h2 id="testing-heading">{content.testMethodology.heading}</h2>
        <p></p>
        <TestChecklist items={content.testMethodology.checklist} />
      </section>

      {/* Skip Link Demo */}
      <section
        aria-labelledby="skip-link-heading"
        className="keyboard-page__section"
      >
        <h2 id="skip-link-heading">{sections.skipLink.heading}</h2>
        <p>{sections.skipLink.description}</p>
        <div className="keyboard-page__tip">
          <strong>Try it:</strong> {sections.skipLink.tip}
        </div>
        <WcagCriteria criteria={sections.skipLink.wcag} />
      </section>

      {/* Focus Visibility */}
      <section
        aria-labelledby="focus-heading"
        className="keyboard-page__section"
      >
        <h2 id="focus-heading">{sections.focusVisibility.heading}</h2>
        <ExamplePair
          title={sections.focusVisibility.exampleTitle}
          description={sections.focusVisibility.exampleDescription}
          incorrectExample={
            <div className="keyboard-page__focus-demo">
              <button className="keyboard-page__btn-bad-focus">
                Low contrast focus
              </button>
              <a
                href="#focus-heading"
                className="keyboard-page__link-bad-focus"
              >
                Hard to see focus
              </a>
            </div>
          }
          correctExample={
            <div className="keyboard-page__focus-demo">
              <button className="keyboard-page__btn-good-focus">
                Visible focus
              </button>
              <a
                href="#focus-heading"
                className="keyboard-page__link-good-focus"
              >
                Clear focus ring
              </a>
            </div>
          }
          incorrectExplanation={sections.focusVisibility.incorrectExplanation}
          correctExplanation={sections.focusVisibility.correctExplanation}
        />
        <WcagCriteria criteria={sections.focusVisibility.wcag} />
      </section>

      {/* Mouse-Only Element */}
      <section
        aria-labelledby="mouse-only-heading"
        className="keyboard-page__section"
      >
        <h2 id="mouse-only-heading">{sections.mouseOnly.heading}</h2>
        <ExamplePair
          title={sections.mouseOnly.exampleTitle}
          description={sections.mouseOnly.exampleDescription}
          incorrectExample={
            <div className="keyboard-page__mouse-only-demo">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <div
                className="keyboard-page__fake-button"
                onClick={() => alert('Clicked with mouse!')}
              >
                Transfer Money
              </div>
            </div>
          }
          correctExample={
            <div className="keyboard-page__mouse-only-demo">
              <button
                className="keyboard-page__real-button"
                onClick={() => alert('Clicked with keyboard or mouse!')}
              >
                Transfer Money
              </button>
            </div>
          }
          incorrectExplanation={sections.mouseOnly.incorrectExplanation}
          correctExplanation={sections.mouseOnly.correctExplanation}
        />
        <WcagCriteria criteria={sections.mouseOnly.wcag} />
      </section>

      {/* Form Demo */}
      <section
        aria-labelledby="form-heading"
        className="keyboard-page__section"
      >
        <h2 id="form-heading">{sections.form.heading}</h2>
        <p>{sections.form.description}</p>
        <div className="keyboard-page__key-reference">
          <h3>Key reference</h3>
          <ul>
            {sections.form.keyReference.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="keyboard-page__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="keyboard-page__field">
            <label htmlFor="account-name">
              {sections.form.fields.name.label}
            </label>
            <input
              id="account-name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder={sections.form.fields.name.placeholder}
            />
          </div>

          <div className="keyboard-page__field">
            <label htmlFor="account-type">
              {sections.form.fields.accountType.label}
            </label>
            <select
              id="account-type"
              value={formData.accountType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  accountType: e.target.value,
                }))
              }
            >
              {sections.form.fields.accountType.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="keyboard-page__fieldset">
            <legend>{sections.form.fields.contactMethod.legend}</legend>
            <div className="keyboard-page__radio-group">
              {sections.form.fields.contactMethod.options.map((method) => (
                <label key={method} className="keyboard-page__radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method.toLowerCase()}
                    checked={formData.contactMethod === method.toLowerCase()}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        contactMethod: e.target.value,
                      }))
                    }
                  />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="keyboard-page__fieldset">
            <legend>{sections.form.fields.agreements.legend}</legend>
            <div className="keyboard-page__checkbox-group">
              {sections.form.fields.agreements.options.map((item) => (
                <label key={item.key} className="keyboard-page__checkbox-label">
                  <input
                    type="checkbox"
                    checked={
                      formData.agreements[
                        item.key as keyof typeof formData.agreements
                      ]
                    }
                    onChange={() =>
                      handleCheckboxChange(
                        item.key as keyof typeof formData.agreements,
                      )
                    }
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="keyboard-page__submit">
            {sections.form.submitLabel}
          </button>

          {formSubmitted && (
            <p className="keyboard-page__success" role="status">
              {sections.form.successMessage}
            </p>
          )}
        </form>
        <WcagCriteria criteria={sections.form.wcag} />
      </section>

      {/* Disclosure Widget */}
      <section
        aria-labelledby="disclosure-heading"
        className="keyboard-page__section"
      >
        <h2 id="disclosure-heading">{sections.disclosure.heading}</h2>
        <p>{sections.disclosure.description}</p>

        <div className="keyboard-page__disclosure">
          <button
            className="keyboard-page__disclosure-trigger"
            aria-expanded={disclosureOpen}
            aria-controls="disclosure-content"
            onClick={() => setDisclosureOpen(!disclosureOpen)}
          >
            <span className="keyboard-page__disclosure-icon" aria-hidden="true">
              {disclosureOpen ? '▼' : '▶'}
            </span>
            {sections.disclosure.triggerLabel}
          </button>
          {disclosureOpen && (
            <div
              id="disclosure-content"
              className="keyboard-page__disclosure-content"
            >
              <p>{sections.disclosure.content}</p>
              <ul>
                {sections.disclosure.contentList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="keyboard-page__tip">
          <strong>How it works:</strong> {sections.disclosure.tip}
        </div>
        <WcagCriteria criteria={sections.disclosure.wcag} />
      </section>

      {/* Focus Trap Demo */}
      <section
        aria-labelledby="focus-trap-heading"
        className="keyboard-page__section"
      >
        <h2 id="focus-trap-heading">{sections.focusTrap.heading}</h2>
        <p>{sections.focusTrap.description}</p>

        <ExamplePair
          title=""
          incorrectExample={
            <div className="keyboard-page__trap-demo">
              <button
                ref={badTriggerRef}
                className="keyboard-page__real-button"
                onClick={() => setBadModalOpen(true)}
              >
                {sections.focusTrap.badButtonLabel}
              </button>
              {badModalOpen && (
                <>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                  <div
                    className="keyboard-page__modal-backdrop"
                    onClick={() => {
                      setBadModalOpen(false);
                      badTriggerRef.current?.focus();
                    }}
                  />
                  <div
                    className="keyboard-page__modal keyboard-page__modal--trapped"
                    role="dialog"
                    aria-label={sections.focusTrap.badModalTitle}
                  >
                    <h3>{sections.focusTrap.badModalTitle}</h3>
                    <p>{sections.focusTrap.badModalText}</p>
                    <p className="keyboard-page__trap-warning">
                      {sections.focusTrap.badWarning}
                    </p>
                    <a href="#focus-trap-heading">
                      A link you cannot escape from
                    </a>
                  </div>
                </>
              )}
            </div>
          }
          correctExample={
            <div className="keyboard-page__trap-demo">
              <button
                ref={goodTriggerRef}
                className="keyboard-page__real-button"
                onClick={() => setGoodModalOpen(true)}
              >
                {sections.focusTrap.goodButtonLabel}
              </button>
              {goodModalOpen && (
                <>
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                  <div
                    className="keyboard-page__modal-backdrop"
                    onClick={closeGoodModal}
                  />
                  <div
                    ref={goodModalRef}
                    className="keyboard-page__modal"
                    role="dialog"
                    aria-label={sections.focusTrap.goodModalTitle}
                  >
                    <h3>{sections.focusTrap.goodModalTitle}</h3>
                    <p>{sections.focusTrap.goodModalText}</p>
                    <div className="keyboard-page__modal-actions">
                      <button
                        className="keyboard-page__real-button"
                        onClick={closeGoodModal}
                      >
                        I accept
                      </button>
                      <button
                        className="keyboard-page__submit"
                        onClick={closeGoodModal}
                      >
                        {sections.focusTrap.goodCloseLabel}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          }
          incorrectExplanation={sections.focusTrap.incorrectExplanation}
          correctExplanation={sections.focusTrap.correctExplanation}
        />

        <div className="keyboard-page__tip">
          <strong>Remember:</strong> {sections.focusTrap.tip}
        </div>
        <WcagCriteria criteria={sections.focusTrap.wcag} />
      </section>

      {/* Non-interactive Focus Demo */}
      <section
        aria-labelledby="non-interactive-heading"
        className="keyboard-page__section"
      >
        <h2 id="non-interactive-heading">
          {sections.nonInteractiveFocus.heading}
        </h2>
        <p>{sections.nonInteractiveFocus.description}</p>

        <ExamplePair
          title=""
          incorrectExample={
            <div className="keyboard-page__focus-order-demo">
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
              <h3 tabIndex={0}>Account Overview</h3>
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
              <p tabIndex={0}>
                Your checking account balance is €4,230.50. You have 3 pending
                transactions.
              </p>
              {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
              <p tabIndex={0}>Last login: 19 March 2026, 14:32</p>
              <button className="keyboard-page__real-button">
                Transfer money
              </button>
            </div>
          }
          correctExample={
            <div className="keyboard-page__focus-order-demo">
              <h3>Account Overview</h3>
              <p>
                Your checking account balance is €4,230.50. You have 3 pending
                transactions.
              </p>
              <p>Last login: 19 March 2026, 14:32</p>
              <button className="keyboard-page__real-button">
                Transfer money
              </button>
            </div>
          }
          incorrectExplanation={
            sections.nonInteractiveFocus.incorrectExplanation
          }
          correctExplanation={sections.nonInteractiveFocus.correctExplanation}
        />
        <WcagCriteria criteria={sections.nonInteractiveFocus.wcag} />
      </section>
    </div>
  );
}
