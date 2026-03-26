export const exerciseContent = {
  title: 'Hands-on Exercise',
  intro:
    'This page is a simplified FunnyMoney account dashboard. It contains accessibility issues from each category covered in the workshop. Your task is to find as many issues as you can using automated tools and manual testing.',
  instructions: [
    'Run an automated accessibility checkers (e.g. axe DevTools, WAVE) and note the issues it finds.',
    'Test with keyboard only. Can you reach and operate every interactive element?',
    'Check document structure: headings, landmarks, and semantic HTML',
    'Test with a screen reader. Are all elements announced meaningfully?',
    'Does all text resize properly?',
    'Zoom to 400% with screen 1280 CSS px. Does the layout reflow without horizontal scrolling?',
  ],
  hintsHeading: 'Hints',
  hintsIntro:
    'If you get stuck, expand the hints below for guidance on what to look for in each category.',
  hints: [
    {
      category: 'Keyboard',
      items: [
        'Try tabbing through all interactive elements. Can you reach everything that looks clickable?',
        'Can you operate all buttons and links with Enter or Space?',
        'Is focus always visible as you tab through the page?',
      ],
    },
    {
      category: 'Structure',
      items: [
        'Check the heading hierarchy with a tool or the Elements List. Are any levels skipped?',
        'Are all page regions wrapped in appropriate landmarks?',
        'Do all form fields have visible and programmatic labels?',
      ],
    },
    {
      category: 'Screen reader',
      items: [
        'Are all images announced meaningfully?',
        'Do all links and buttons have clear, descriptive text?',
        'Are form errors announced when they appear?',
      ],
    },
    {
      category: 'Zoom & reflow',
      items: [
        'Zoom to 400%. Is there any horizontal scrolling?',
        'Does all text resize when you change the browser font size?',
        'Are all interactive targets large enough to tap or click comfortably?',
      ],
    },
  ],

  // --- Dashboard content with intentional a11y issues ---
  dashboard: {
    greeting: 'Welcome back, customers!',
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
        action: 'Click here',
      },
      {
        text: 'Suspicious login attempt detected.',
        action: 'Read more',
      },
      {
        text: 'New savings goal feature available.',
        action: 'Learn more',
      },
    ],
    transferHeading: 'Send money',
    promotionHeading: 'Special offer',
    promotionText:
      'Earn 3% cashback on all purchases this month with FunnyMoney Gold. Limited time offer — upgrade your account today.',
    promotionAction: 'Click here',
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
      reference: 'Reference',
    },
    transferButton: 'Send',
    errorMessages: {
      recipientRequired: 'Please enter a recipient.',
      amountRequired: 'Please enter an amount.',
      amountInvalid: 'Please enter a valid amount.',
    },
    successMessage: 'Transfer sent successfully!',
  },
};
