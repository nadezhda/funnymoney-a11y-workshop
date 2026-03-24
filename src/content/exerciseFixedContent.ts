export const exerciseFixedContent = {
  title: 'Exercise — Fixed Version',
  intro:
    'This is the corrected version of the exercise page. All accessibility issues have been fixed. Use it as a reference to compare against the exercise page.',

  dashboard: {
    greeting: 'Welcome back, Alex',
    accountSummary: 'Account summary',
    accounts: [
      { name: 'Checking Account', balance: '€4,230.50', status: 'Active' },
      { name: 'Savings Account', balance: '€12,800.00', status: 'Active' },
      { name: 'Business Account', balance: '€890.25', status: 'Pending' },
    ],
    quickActions: 'Quick actions',
    notifications: 'Notifications',
    notificationItems: [
      {
        text: 'Your monthly statement is ready.',
        action: 'View monthly statement',
      },
      {
        text: 'Suspicious login attempt detected.',
        action: 'Review login activity',
      },
      {
        text: 'New savings goal feature available.',
        action: 'Explore savings goals',
      },
    ],
    transferHeading: 'Send money',
    promotionHeading: 'Special offer',
    promotionText:
      'Earn 3% cashback on all purchases this month with FunnyMoney Gold. Limited time offer — upgrade your account today.',
    promotionAction: 'Upgrade to FunnyMoney Gold',
    promotionAlt: 'Three gold bars stacked on a dark surface',
    recentActivity: 'Recent activity',
    transactions: [
      { date: '20 Mar 2026', description: 'Coffee Shop', amount: '−€4.20' },
      {
        date: '19 Mar 2026',
        description: 'Salary Payment',
        amount: '+€3,200.00',
      },
      {
        date: '18 Mar 2026',
        description: 'Electric Bill',
        amount: '−€89.50',
      },
      {
        date: '17 Mar 2026',
        description: 'Grocery Store',
        amount: '−€62.30',
      },
    ],
    transferFields: {
      recipient: 'Recipient',
      amount: 'Amount (€)',
      reference: 'Reference (optional)',
    },
    transferButton: 'Send transfer',
    errorSummaryHeading: 'Please fix the following errors:',
    errorMessages: {
      recipientRequired: 'Please enter a recipient.',
      amountRequired: 'Please enter an amount.',
      amountInvalid: 'Please enter a valid amount.',
    },
    successMessage: 'Transfer sent successfully!',
  },
};
