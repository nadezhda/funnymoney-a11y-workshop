import { useState } from 'react';
import { exerciseContent as content } from '../content/exerciseContent';
import goldImage from '../assets/gold.jpg';
import './ExercisePage.scss';

export function ExercisePage() {
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
    <div className="exercise-page">
      <h1>{content.title}</h1>
      <p>{content.intro}</p>

      <h3>{/* BUG: skipped h2 */}How to test</h3>
      <ol className="exercise-page__instructions">
        {content.instructions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      {/* Hints section */}
      <div className="exercise-page__hints">
        <h3>{content.hintsHeading}</h3>
        <p>{content.hintsIntro}</p>
        {content.hints.map((group) => (
          <details key={group.category} className="exercise-page__hint-group">
            <summary>{group.category}</summary>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* Dashboard starts here */}
      <div className="exercise-page__dashboard">
        <h3>{/* BUG: should be h2, skipped heading level */}{dashboard.greeting}</h3>

        {/* Account summary — BUG: no landmark, uses div instead of section */}
        <div className="exercise-page__accounts">
          <h4>{/* BUG: skipped heading level from h3 */}{dashboard.accountSummary}</h4>
          <table className="exercise-page__table">
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
                      className={`exercise-page__status exercise-page__status--${account.status.toLowerCase()}`}
                    >
                      {account.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick actions — BUG: div with onClick, not keyboard accessible */}
        <div className="exercise-page__actions">
          <h4>{dashboard.quickActions}</h4>
          <div className="exercise-page__action-buttons">
            <div
              className="exercise-page__action-btn"
              onClick={() => alert('Transfer initiated')}
            >
              Transfer money
            </div>
            <div
              className="exercise-page__action-btn"
              onClick={() => alert('Payment scheduled')}
            >
              Pay bills
            </div>
            <div
              className="exercise-page__action-btn"
              onClick={() => alert('Card management opened')}
            >
              Manage cards
            </div>
          </div>
        </div>

        {/* Notifications — BUG: vague link text */}
        <div className="exercise-page__notifications">
          <h4>{dashboard.notifications}</h4>
          <ul>
            {dashboard.notificationItems.map((item) => (
              <li key={item.text}>
                {item.text}{' '}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {/* BUG: vague link text like "Click here", "Read more" */}
                  {item.action}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Promotion — BUG: image missing alt, fixed width, vague link */}
        <div className="exercise-page__promotion">
          <h4>{dashboard.promotionHeading}</h4>
          <div className="exercise-page__promotion-card">
            {/* BUG: missing alt text on informative image */}
            <img
              src={goldImage}
              className="exercise-page__promotion-img"
              width="200"
              height="125"
            />
            <div className="exercise-page__promotion-content">
              <p>{dashboard.promotionText}</p>
              {/* BUG: vague link text */}
              <a href="#" onClick={(e) => e.preventDefault()}>
                {dashboard.promotionAction}
              </a>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="exercise-page__activity">
          <h4>{dashboard.recentActivity}</h4>
          <table className="exercise-page__table">
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
        </div>

        {/* Transfer form — BUG: missing labels, error not associated, no focus style */}
        <div className="exercise-page__transfer">
          <h4>{dashboard.transferHeading}</h4>
          <form onSubmit={handleTransferSubmit} noValidate>
            {formSuccess && (
              <div className="exercise-page__success">
                <p>{dashboard.successMessage}</p>
              </div>
            )}

            {Object.keys(formErrors).length > 0 && (
              <div className="exercise-page__error-list">
                {/* BUG: no role="alert", errors not announced */}
                <p>Please fix the following errors:</p>
                <ul>
                  {Object.values(formErrors).map((msg) => (
                    <li key={msg}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="exercise-page__field">
              {/* BUG: no <label>, only placeholder */}
              <input
                type="text"
                placeholder={dashboard.transferFields.recipient}
                value={formData.recipient}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    recipient: e.target.value,
                  }))
                }
              />
              {formErrors.recipient && (
                // BUG: error not linked to field via aria-describedby
                <p className="exercise-page__field-error">
                  {formErrors.recipient}
                </p>
              )}
            </div>

            <div className="exercise-page__field">
              {/* BUG: no <label>, only placeholder */}
              <input
                type="text"
                placeholder={dashboard.transferFields.amount}
                value={formData.amount}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, amount: e.target.value }))
                }
              />
              {formErrors.amount && (
                <p className="exercise-page__field-error">
                  {formErrors.amount}
                </p>
              )}
            </div>

            <div className="exercise-page__field">
              {/* BUG: no <label>, only placeholder */}
              <input
                type="text"
                placeholder={dashboard.transferFields.reference}
                value={formData.reference}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    reference: e.target.value,
                  }))
                }
              />
            </div>

            {/* BUG: small click target */}
            <button type="submit" className="exercise-page__submit">
              {dashboard.transferButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
