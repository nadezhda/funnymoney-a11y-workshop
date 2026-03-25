import { useState } from 'react';
import { exerciseFixedContent as content } from '../content/exerciseFixedContent';
import goldImage from '../assets/gold.jpg';
import { usePageTitle } from '../hooks/usePageTitle';
import './ExerciseFixedPage.scss';

export function ExerciseFixedPage() {
  usePageTitle('Exercise — Fixed Version');
  const { dashboard } = content;
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    reference: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.recipient.trim()) {
      errors.recipient = dashboard.errorMessages.recipientRequired;
    }
    if (!formData.amount.trim()) {
      errors.amount = dashboard.errorMessages.amountRequired;
    } else if (
      isNaN(Number(formData.amount)) ||
      Number(formData.amount) <= 0
    ) {
      errors.amount = dashboard.errorMessages.amountInvalid;
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
    <div className="exercise-fixed">
      <h1>{content.title}</h1>
      <p>{content.intro}</p>

      {/* FIX: proper heading hierarchy h2 */}
      <h2>{dashboard.greeting}</h2>

      {/* FIX: semantic section with aria-labelledby */}
      <section
        aria-labelledby="accounts-heading"
        className="exercise-fixed__accounts"
      >
        <h3 id="accounts-heading">{dashboard.accountSummary}</h3>
        <table className="exercise-fixed__table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Balance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.accounts.map((account) => (
              <tr key={account.name}>
                <td>{account.name}</td>
                <td>{account.balance}</td>
                <td>
                  <span
                    className={`exercise-fixed__status exercise-fixed__status--${account.status.toLowerCase()}`}
                  >
                    {account.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FIX: semantic section, real buttons */}
      <section
        aria-labelledby="actions-heading"
        className="exercise-fixed__actions"
      >
        <h3 id="actions-heading">{dashboard.quickActions}</h3>
        <div className="exercise-fixed__action-buttons">
          <button
            type="button"
            className="exercise-fixed__action-btn"
            onClick={() => alert('Transfer initiated')}
          >
            Transfer money
          </button>
          <button
            type="button"
            className="exercise-fixed__action-btn"
            onClick={() => alert('Payment scheduled')}
          >
            Pay bills
          </button>
          <button
            type="button"
            className="exercise-fixed__action-btn"
            onClick={() => alert('Card management opened')}
          >
            Manage cards
          </button>
        </div>
      </section>

      {/* FIX: semantic section, descriptive link text */}
      <section
        aria-labelledby="notifications-heading"
        className="exercise-fixed__notifications"
      >
        <h3 id="notifications-heading">{dashboard.notifications}</h3>
        <ul>
          {dashboard.notificationItems.map((item) => (
            <li key={item.text}>
              {item.text}{' '}
              <a href="#" onClick={(e) => e.preventDefault()}>
                {item.action}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* FIX: semantic section, alt text, descriptive link, responsive width, rem font */}
      <section
        aria-labelledby="promotion-heading"
        className="exercise-fixed__promotion"
      >
        <h3 id="promotion-heading">{dashboard.promotionHeading}</h3>
        <div className="exercise-fixed__promotion-card">
          <img
            src={goldImage}
            alt={dashboard.promotionAlt}
            className="exercise-fixed__promotion-img"
            width="200"
            height="125"
          />
          <div className="exercise-fixed__promotion-content">
            <p>{dashboard.promotionText}</p>
            <a href="#" onClick={(e) => e.preventDefault()}>
              {dashboard.promotionAction}
            </a>
          </div>
        </div>
      </section>

      {/* FIX: semantic section */}
      <section
        aria-labelledby="activity-heading"
        className="exercise-fixed__activity"
      >
        <h3 id="activity-heading">{dashboard.recentActivity}</h3>
        <table className="exercise-fixed__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.transactions.map((tx) => (
              <tr key={tx.date + tx.description}>
                <td>{tx.date}</td>
                <td>{tx.description}</td>
                <td>{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FIX: semantic section, proper labels, aria-describedby, role="alert", proper target size */}
      <section
        aria-labelledby="transfer-heading"
        className="exercise-fixed__transfer"
      >
        <h3 id="transfer-heading">{dashboard.transferHeading}</h3>
        <form
          onSubmit={handleTransferSubmit}
          noValidate
          aria-label={dashboard.transferHeading}
        >
          {formSuccess && (
            <div className="exercise-fixed__success" role="status">
              <p>{dashboard.successMessage}</p>
            </div>
          )}

          {Object.keys(formErrors).length > 0 && (
            <div className="exercise-fixed__error-list" role="alert">
              <p>
                <strong>{dashboard.errorSummaryHeading}</strong>
              </p>
              <ul>
                {Object.entries(formErrors).map(([field, msg]) => (
                  <li key={field}>
                    <a href={`#fixed-${field}`}>{msg}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="exercise-fixed__field">
            <label htmlFor="fixed-recipient">
              {dashboard.transferFields.recipient}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="fixed-recipient"
              type="text"
              value={formData.recipient}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  recipient: e.target.value,
                }))
              }
              aria-required="true"
              aria-invalid={!!formErrors.recipient}
              aria-describedby={
                formErrors.recipient ? 'fixed-recipient-error' : undefined
              }
            />
            {formErrors.recipient && (
              <p
                id="fixed-recipient-error"
                className="exercise-fixed__field-error"
              >
                {formErrors.recipient}
              </p>
            )}
          </div>

          <div className="exercise-fixed__field">
            <label htmlFor="fixed-amount">
              {dashboard.transferFields.amount}{' '}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="fixed-amount"
              type="text"
              inputMode="decimal"
              value={formData.amount}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, amount: e.target.value }))
              }
              aria-required="true"
              aria-invalid={!!formErrors.amount}
              aria-describedby={
                formErrors.amount ? 'fixed-amount-error' : undefined
              }
            />
            {formErrors.amount && (
              <p
                id="fixed-amount-error"
                className="exercise-fixed__field-error"
              >
                {formErrors.amount}
              </p>
            )}
          </div>

          <div className="exercise-fixed__field">
            <label htmlFor="fixed-reference">
              {dashboard.transferFields.reference}
            </label>
            <input
              id="fixed-reference"
              type="text"
              value={formData.reference}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  reference: e.target.value,
                }))
              }
            />
          </div>

          <button type="submit" className="exercise-fixed__submit">
            {dashboard.transferButton}
          </button>
        </form>
      </section>
    </div>
  );
}
