export const screenReaderContent = {
  title: 'Screen Reader Testing',
  intro:
    'Screen readers convert visual content into speech or braille output. This page is designed for a live NVDA demonstration. We will practice focus mode, browse mode, and navigating by different element types.',
  personaIds: ['felicia'],

  topicNavLabel: 'Screen reader topics',
  topicNavLinks: [
    { label: 'Modes', href: '#modes-heading' },
    { label: 'Headings', href: '#headings-nav-heading' },
    { label: 'Images', href: '#images-heading' },
    { label: 'Live Regions', href: '#live-heading' },
    { label: 'Custom Widget', href: '#tabs-heading' },
    { label: 'Form', href: '#form-heading' },
    { label: 'What to Test', href: '#testing-heading' },
  ],

  sections: {
    modes: {
      heading: 'Browse mode vs. focus mode',
      browseMode:
        'In browse mode (also called virtual mode), you read through the page content using arrow keys. The screen reader reads all text, headings, images, and links in document order.',
      focusMode:
        'In focus mode (also called forms mode), keystrokes go directly to the interactive element. This activates automatically when you enter a form field or interactive widget. Press Esc to return to browse mode.',
      tip: 'Press NVDA + Space to toggle between browse mode and focus mode manually.',
    },

    headings: {
      heading: 'Navigating by headings',
      description:
        'Press H in browse mode to jump to the next heading. Press 1–6 to jump to headings of a specific level. This page uses a logical heading structure so you can practice this navigation pattern.',
      tip: 'Press H repeatedly to cycle through all headings on this page. Use NVDA + F7 to open the elements list and view all headings at once.',
    },

    images: {
      heading: 'How screen readers announce images',
      description:
        'Press G in NVDA browse mode to jump between images. Listen to how each image is announced.',
      informativeAlt: 'FunnyMoney Bank secure vault entrance with reinforced steel door',
      informativeCaption: 'Informative image — has descriptive alt text',
      decorativeCaption: 'Decorative image — has empty alt, screen reader skips it',
    },

    liveRegions: {
      heading: 'Dynamic content and live regions',
      description:
        'When content changes dynamically, screen readers need to be notified. An aria-live region announces changes automatically without moving focus.',
      buttonLabel: 'Simulate new activity',
      notificationTemplate: 'New activity: You received a payment of €150.00 from FunnyMoney Rewards.',
      tip: 'The notification area uses aria-live="polite". When content appears, the screen reader announces it at the next pause — without interrupting the user.',
    },

    tabs: {
      heading: 'Custom widget — Tab panel',
      description:
        'This tab panel follows the APG tabs pattern. Screen readers announce the tab role, position ("tab 1 of 3"), and selected state.',
      tablistLabel: 'Account sections',
      tabData: [
        {
          label: 'Account Overview',
          tableHeaders: ['Account', 'Balance', 'Status'],
          tableRows: [
            ['Checking Account', '€4,230.50', 'Active'],
            ['Savings Account', '€12,800.00', 'Active'],
            ['Business Account', '€890.25', 'Pending review'],
          ],
        },
        {
          label: 'Recent Transactions',
          tableHeaders: ['Date', 'Description', 'Amount'],
          tableRows: [
            ['15 Mar 2026', 'Grocery Store', '−€45.80'],
            ['14 Mar 2026', 'Salary Payment', '+€3,200.00'],
            ['13 Mar 2026', 'Electric Bill', '−€89.50'],
            ['12 Mar 2026', 'Coffee Shop', '−€4.20'],
          ],
        },
        {
          label: 'Settings',
          description: 'Manage your notification preferences, security settings, and account details from this panel.',
          listItems: [
            'Two-factor authentication: Enabled',
            'Email notifications: On',
            'SMS alerts: Off',
          ],
        },
      ],
      tip: 'Use Arrow Left and Arrow Right to switch tabs. The selected tab receives focus with tabIndex=0, while unselected tabs have tabIndex=-1.',
    },

    form: {
      heading: 'Form navigation and error feedback',
      description:
        'Screen readers navigate forms by pressing F (form field) or Tab (interactive elements). Error messages must be announced when they appear.',
      formLabel: 'Transfer money',
      errorSummaryHeading: 'There are errors in the form:',
      successMessage: 'Transfer submitted successfully! (This is a demo)',
      fields: {
        recipient: { label: 'Recipient name', required: true },
        amount: { label: 'Amount (€)', required: true },
        reference: {
          label: 'Reference (optional)',
          hint: 'Add a message for the recipient, e.g. "March rent".',
        },
      },
      validationMessages: {
        recipientRequired: 'Recipient name is required.',
        amountRequired: 'Amount is required.',
        amountInvalid: 'Please enter a valid amount greater than zero.',
      },
      submitLabel: 'Send transfer',
      tip: 'Submit the form empty to trigger errors. The error summary uses role="alert" so it is announced immediately. Each error links to its field. Individual field errors are connected via aria-describedby and aria-invalid.',
    },
  },

  checklist: [
    'Can you navigate all headings with H?',
    'Can you list all landmarks with NVDA + F7?',
    'Are the two navigation regions announced with distinct labels?',
    'Can you navigate images with G? Are they announced correctly?',
    'Does the live region announce the notification without moving focus?',
    'Are tabs announced with role, position, and selected state?',
    'Can you navigate the form with F and Tab?',
    'Are required fields announced as required?',
    'Are error messages announced when the form is submitted?',
    'Does focus mode activate automatically in form fields?',
  ],
};
