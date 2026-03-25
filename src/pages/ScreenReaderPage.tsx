import { useState } from 'react';
import {
  PersonaList,
  TestChecklist,
} from '../components/workshop';
import { screenReaderContent as content } from '../content/screenReaderContent';
import goldImage from '../assets/gold.jpg';
import { usePageTitle } from '../hooks/usePageTitle';
import './ScreenReaderPage.scss';

export function ScreenReaderPage() {
  usePageTitle('Screen Reader Testing');
  const [activeTab, setActiveTab] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    reference: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);

  const { sections } = content;
  const { tabData } = sections.tabs;

  const triggerNotification = () => {
    setNotificationCount((prev) => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.recipient.trim()) {
      errors.recipient = sections.form.validationMessages.recipientRequired;
    }
    if (!formData.amount.trim()) {
      errors.amount = sections.form.validationMessages.amountRequired;
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      errors.amount = sections.form.validationMessages.amountInvalid;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormSuccess(false);
    } else {
      setFormErrors({});
      setFormSuccess(true);
      setFormData({ recipient: '', amount: '', reference: '' });
    }
  };

  return (
    <div className="sr-page">
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
      <p>{content.introWhy}</p>
      <ul className="sr-page__intro-list">
        {content.introList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Who is affected */}
      <section aria-labelledby="personas-heading" className="sr-page__section">
        <h2 id="personas-heading">Who is affected?</h2>
        <PersonaList personaIds={content.personaIds} compact />
      </section>

      {/* What to Test */}
      <section aria-labelledby="testing-heading" className="sr-page__section">
        <h2 id="testing-heading">What to test</h2>
        <TestChecklist items={content.checklist} />
      </section>

      {/* 1. NVDA Setup */}
      <section aria-labelledby="setup-heading" className="sr-page__section">
        <h2 id="setup-heading">{sections.setup.heading}</h2>
        <p>{sections.setup.description}</p>
        <p>{sections.setup.setupIntro}</p>
        <ul className="sr-page__setup-steps">
          {sections.setup.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      {/* 2. Starting & Stopping NVDA */}
      <section
        aria-labelledby="start-stop-heading"
        className="sr-page__section"
      >
        <h2 id="start-stop-heading">{sections.startStop.heading}</h2>
        <p>{sections.startStop.description}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.startStop.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-page__tip">
          <strong>Tip:</strong> {sections.startStop.tip}
        </div>
      </section>

      {/* 3. Browse Mode & Focus Mode */}
      <section aria-labelledby="modes-heading" className="sr-page__section">
        <h2 id="modes-heading">{sections.modes.heading}</h2>
        <p>{sections.modes.description}</p>

        <h3>Browse mode</h3>
        <p>{sections.modes.browseMode}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.modes.browseModeShortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>

        <h3>Focus mode</h3>
        <p>{sections.modes.focusMode}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.modes.focusModeShortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>

        <h3>{sections.modes.switchHeading}</h3>
        <div className="sr-page__key-reference">
          <ul>
            {sections.modes.switchShortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-page__tip">
          <strong>Tip:</strong> {sections.modes.switchTip}
        </div>
      </section>

      {/* 4. Navigating by Headings */}
      <section
        aria-labelledby="headings-nav-heading"
        className="sr-page__section"
      >
        <h2 id="headings-nav-heading">{sections.headings.heading}</h2>

        <p>{sections.headings.description}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.headings.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-page__tip">
          <strong>Try it:</strong> {sections.headings.tip}
        </div>
      </section>

      {/* 6. Navigating by Links */}
      <section aria-labelledby="links-heading" className="sr-page__section">
        <h2 id="links-heading">{sections.links.heading}</h2>

        <p>{sections.links.description}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.links.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>

        <h3>Link text examples</h3>
        <div className="sr-page__link-demos">
          <div className="sr-page__link-demo-group">
            <h4>Descriptive link text</h4>
            <ul>
              {sections.links.demoLinks
                .filter((link) => link.good)
                .map((link) => (
                  <li key={link.text}>
                    <a href={link.href} onClick={(e) => e.preventDefault()}>
                      {link.text}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="sr-page__link-demo-group">
            <h4>Vague link text</h4>
            <ul>
              {sections.links.demoLinks
                .filter((link) => !link.good)
                .map((link) => (
                  <li key={link.text}>
                    <a href={link.href} onClick={(e) => e.preventDefault()}>
                      {link.text}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="sr-page__tip">
          <strong>Try it:</strong> {sections.links.tip}
        </div>
      </section>

      {/* 7. Navigating by Landmarks */}
      <section aria-labelledby="landmarks-heading" className="sr-page__section">
        <h2 id="landmarks-heading">{sections.landmarks.heading}</h2>

        <p>{sections.landmarks.description}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.landmarks.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>
        <h3>{sections.landmarks.demoHeading}</h3>
        <p>{sections.landmarks.demoDescription}</p>
        <div className="sr-page__nav-demos">
          <nav aria-label={sections.landmarks.demoNav.label}>
            <h4>{sections.landmarks.demoNav.label}</h4>
            <ul>
              {sections.landmarks.demoNav.links.map((link) => (
                <li key={link}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="sr-page__tip">
          <strong>Try it:</strong> {sections.landmarks.tip}
        </div>
      </section>

      {/* 8. Images */}
      <section aria-labelledby="images-heading" className="sr-page__section">
        <h2 id="images-heading">{sections.images.heading}</h2>

        <p>{sections.images.description}</p>
        <div className="sr-page__key-reference">
          <ul>
            {sections.images.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-page__image-demos">
          <div className="sr-page__image-item">
            <img
              src={goldImage}
              alt={sections.images.informativeAlt}
              width="160"
              height="100"
            />
            <p>
              <strong>{sections.images.informativeCaption}</strong>
            </p>
          </div>
          <div className="sr-page__image-item">
            <img
              src="https://placehold.co/160x16/c6922a/c6922a"
              alt=""
              width="160"
              height="16"
            />
            <p>
              <strong>{sections.images.decorativeCaption}</strong>
            </p>
          </div>
        </div>
        <div className="sr-page__tip">
          <strong>Note:</strong> {sections.images.tip}
        </div>
      </section>

      {/* 9. Custom Widget - Tabs */}
      <section aria-labelledby="tabs-heading" className="sr-page__section">
        <h2 id="tabs-heading">{sections.tabs.heading}</h2>

        <p>
          {sections.tabs.descriptionStart}
          <a
            href={sections.tabs.apgLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {sections.tabs.apgLinkText}
          </a>
          {sections.tabs.descriptionEnd}
        </p>

        <div className="sr-page__key-reference">
          <ul>
            {sections.tabs.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>

        <div className="sr-page__tabs">
          <div role="tablist" aria-label={sections.tabs.tablistLabel}>
            {tabData.map((tab, index) => (
              <button
                key={tab.label}
                role="tab"
                id={`tab-${index}`}
                aria-selected={activeTab === index}
                aria-controls={`tabpanel-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
                className={`sr-page__tab${activeTab === index ? ' sr-page__tab--active' : ''}`}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => {
                  let newIndex: number | null = null;
                  if (e.key === 'ArrowRight') {
                    newIndex = (index + 1) % tabData.length;
                  } else if (e.key === 'ArrowLeft') {
                    newIndex = (index - 1 + tabData.length) % tabData.length;
                  } else if (e.key === 'Home') {
                    newIndex = 0;
                  } else if (e.key === 'End') {
                    newIndex = tabData.length - 1;
                  }
                  if (newIndex !== null) {
                    e.preventDefault();
                    setActiveTab(newIndex);
                    const newTab = document.getElementById(`tab-${newIndex}`);
                    newTab?.focus();
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="sr-page__tabpanel"
          >
            {tabData[activeTab].tableHeaders && (
              <>
                <h3>
                  {tabData[activeTab].label === 'Account Overview'
                    ? 'Your accounts'
                    : 'Recent transactions'}
                </h3>
                <table className="sr-page__table">
                  <thead>
                    <tr>
                      {tabData[activeTab].tableHeaders!.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tabData[activeTab].tableRows!.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
            {tabData[activeTab].description && (
              <>
                <h3>Account settings</h3>
                <p>{tabData[activeTab].description}</p>
                <ul>
                  {tabData[activeTab].listItems!.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 10. Dynamic Content - Live Region */}
      <section aria-labelledby="live-heading" className="sr-page__section">
        <h2 id="live-heading">{sections.liveRegions.heading}</h2>

        <p>{sections.liveRegions.description}</p>
        <p>{sections.liveRegions.descriptionExample}</p>

        <div className="sr-page__live-demo">
          <button
            className="sr-page__notification-btn"
            onClick={triggerNotification}
          >
            {sections.liveRegions.buttonLabel}
          </button>

          <div
            aria-live="polite"
            aria-atomic="true"
            className="sr-page__notification-banner"
          >
            {showNotification && (
              <p>
                {sections.liveRegions.notificationTemplate} (Notification{' '}
                {notificationCount})
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 11. Form with Error Feedback */}
      <section aria-labelledby="form-heading" className="sr-page__section">
        <h2 id="form-heading">{sections.form.heading}</h2>

        <p>{sections.form.description}</p>

        <div className="sr-page__key-reference">
          <ul>
            {sections.form.shortcuts.map((item) => (
              <li key={item.key}>
                <kbd>{item.key}</kbd> — {item.action}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="sr-page__transfer-form"
          onSubmit={handleTransferSubmit}
          noValidate
          aria-label={sections.form.formLabel}
        >
          {Object.keys(formErrors).length > 0 && (
            <div className="sr-page__error-summary" role="alert">
              <p>
                <strong>{sections.form.errorSummaryHeading}</strong>
              </p>
              <ul>
                {Object.entries(formErrors).map(([field, message]) => (
                  <li key={field}>
                    <a href={`#transfer-${field}`}>{message}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {formSuccess && (
            <div className="sr-page__success-message" role="status">
              <p>{sections.form.successMessage}</p>
            </div>
          )}

          <div className="sr-page__field">
            <label htmlFor="transfer-recipient">
              {sections.form.fields.recipient.label}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="transfer-recipient"
              type="text"
              value={formData.recipient}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, recipient: e.target.value }))
              }
              aria-required="true"
              aria-invalid={!!formErrors.recipient}
              aria-describedby={
                formErrors.recipient ? 'recipient-error' : undefined
              }
            />
            {formErrors.recipient && (
              <p id="recipient-error" className="sr-page__field-error">
                {formErrors.recipient}
              </p>
            )}
          </div>

          <div className="sr-page__field">
            <label htmlFor="transfer-amount">
              {sections.form.fields.amount.label}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="transfer-amount"
              type="text"
              inputMode="decimal"
              value={formData.amount}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, amount: e.target.value }))
              }
              aria-required="true"
              aria-invalid={!!formErrors.amount}
              aria-describedby={formErrors.amount ? 'amount-error' : undefined}
            />
            {formErrors.amount && (
              <p id="amount-error" className="sr-page__field-error">
                {formErrors.amount}
              </p>
            )}
          </div>

          <div className="sr-page__field">
            <label htmlFor="transfer-reference">
              {sections.form.fields.reference.label}
            </label>
            <input
              id="transfer-reference"
              type="text"
              value={formData.reference}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, reference: e.target.value }))
              }
              aria-describedby="reference-hint"
            />
            <p id="reference-hint" className="sr-page__field-hint">
              {sections.form.fields.reference.hint}
            </p>
          </div>

          <button type="submit" className="sr-page__submit">
            {sections.form.submitLabel}
          </button>
        </form>

        <div className="sr-page__tip">
          <strong>Try it:</strong> {sections.form.tip}
        </div>
      </section>
    </div>
  );
}
