import type { WcagCriterion } from '../components/workshop';

type WcagLevel = WcagCriterion['level'];

function wcag(id: string, name: string, level: WcagLevel): WcagCriterion {
  return { id, name, level };
}

export const screenReaderContent = {
  title: 'Screen Reader Testing',
  intro:
    'Screen readers convert visual content into synthesized speech or Braille output, enabling users to navigate and understand digital environments without relying on visual cues. This page is designed for a live screen reader demonstration (NVDA).',
  introWhy: 'Screen reader accessibility is important for:',
  introList: [
    'Blind users who rely entirely on audio output to navigate and understand content',
    'Users with low vision who use screen readers alongside magnification',
    'Users with cognitive disabilities who benefit from content being read aloud',
    'Users with temporary impairments such as eye injuries',
  ],
  personaIds: ['felicia'],

  topicNavHeading: 'Topics on this page',
  topicNavLabel: 'Screen reader topics',
  topicNavLinks: [
    { label: 'NVDA Setup', href: '#setup-heading' },
    { label: 'Start & Stop', href: '#start-stop-heading' },
    { label: 'Reading Controls', href: '#reading-heading' },
    { label: 'Browse & Focus Mode', href: '#modes-heading' },
    { label: 'Headings', href: '#headings-nav-heading' },
    { label: 'Links', href: '#links-heading' },
    { label: 'Landmarks', href: '#landmarks-heading' },
    { label: 'Images', href: '#images-heading' },
    { label: 'Custom Widget', href: '#tabs-heading' },
    { label: 'Live Regions', href: '#live-heading' },
    { label: 'Form', href: '#form-heading' },
  ],

  sections: {
    setup: {
      heading: 'NVDA setup',
      description:
        'NVDA is a free, open-source screen reader for Windows. Install it on your computer, then complete the initial setup steps below. This only needs to be done once.',
      setupIntro:
        'When you open NVDA for the first time, the Welcome dialog appears. Use the following settings:',
      steps: [
        'Select Keyboard layout "Desktop". This is the best option for most users.',
        'Select "Use Caps Lock as an NVDA modifier key". The modifier key is also called the NVDA key and is used in many keyboard commands.',
        'Clear "Start NVDA after I sign in".',
        'Clear "Show this dialog when NVDA starts".',
      ],
    },

    startStop: {
      heading: 'Starting and stopping NVDA',
      description:
        'You need to know how to start and stop NVDA quickly, especially when switching between testing and normal computer use.',
      shortcuts: [
        {
          key: 'Ctrl + Alt + N',
          action: 'Start NVDA (desktop shortcut must be enabled)',
        },
        { key: 'NVDA + Q', action: 'Quit NVDA — press Enter to confirm' },
        {
          key: 'NVDA + N',
          action: 'Open the NVDA menu (access settings, tools, help)',
        },
      ],
      tip: 'Enable Speech Viewer (NVDA + N → Tools → Speech Viewer) to see a text version of everything NVDA announces. This is useful during testing because you can review what was read aloud and take screenshots when needed.',
    },

    modes: {
      heading: 'Browse mode vs. focus mode',
      description:
        'Screen readers have two main interaction modes. Understanding the difference is essential for testing with screen reader.',
      switchHeading: 'Switching between modes',
      switchShortcuts: [
        {
          key: 'NVDA + Space',
          action: 'Toggle between browse mode and focus mode manually',
        },
        { key: 'Esc', action: 'Return to browse mode from focus mode' },
      ],
      switchTip:
        'NVDA plays a sound when switching modes: a rising tone for focus mode, a falling tone for browse mode. Listen for this during testing.',
      browseMode:
        'In browse mode, also called virtual mode, the screen reader reads page content with the arrow keys. It reads text, headings, images, and links in the order they appear on the page. Elements do not need to be interactive to be read. Single-letter shortcuts such as H, D, and F can be used to move between different types of elements.',
      browseModeShortcuts: [
        {
          key: 'NVDA + ↓',
          action: 'Start reading from the current position (Say all)',
        },
        { key: '↓', action: 'Read next line' },
        { key: '↑', action: 'Read previous line' },
        {
          key: 'Shift',
          action:
            'Pause / resume reading (press once to pause and again to resume)',
        },
        { key: 'Ctrl', action: 'Stop reading' },
        { key: 'NVDA + ↑', action: 'Read the current line' },
        {
          key: 'NVDA + Tab',
          action: 'Read the current focus position (which element has focus)',
        },
        { key: 'NVDA + T', action: 'Read the window title / page title' },
      ],
      focusMode:
        'In focus mode, also called forms mode, keyboard input goes directly to the active form field or interactive element. This mode usually turns on automatically when you move to a form field or widget. Single-letter shortcuts do not work in this mode because the keys are sent to the element instead.',
      focusModeShortcuts: [
        { key: 'Tab', action: 'Move to next interactive element' },
        { key: 'Shift + Tab', action: 'Move to previous interactive element' },
        { key: 'Arrow keys', action: 'Navigate within the active element' },
        { key: 'Space', action: 'Activate buttons, checkboxes' },
        { key: 'Enter', action: 'Activate links, submit forms' },
        {
          key: 'Esc',
          action: 'Exit the current element or return to browse mode',
        },
      ],
    },

    headings: {
      heading: 'Navigating by headings',
      wcag: [
        wcag('1.3.1', 'Info and Relationships', 'A'),
        wcag('2.4.6', 'Headings and Labels', 'AA'),
      ],
      description:
        'Headings are the primary way screen reader users scan and understand page structure. In browse mode, use single-letter shortcuts to jump between headings.',
      shortcuts: [
        { key: 'H', action: 'Next heading' },
        { key: 'Shift + H', action: 'Previous heading' },
        {
          key: '1–6',
          action: 'Next heading of that level (e.g. 2 for next h2)',
        },
        { key: 'Shift + 1–6', action: 'Previous heading of that level' },
        {
          key: 'NVDA + F7',
          action:
            'Open "Elements List" and choose Headings tab to see all headings',
        },
      ],
      tip: 'Press H repeatedly to cycle through all headings on this page. Use NVDA + F7 to open the Elements List and view all headings at once. This is how users get an overview of the page.',
    },

    links: {
      heading: 'Navigating by links',
      wcag: [
        wcag('2.4.4', 'Link Purpose (In Context)', 'A'),
        wcag('1.3.1', 'Info and Relationships', 'A'),
      ],
      description:
        'Links are one of the most common elements screen reader users navigate. NVDA reads the link text and may also announce whether the link has been visited. Link text should be clear and meaningful, because links like “click here” or “read more” do not make sense out of context.',
      shortcuts: [
        { key: 'K', action: 'Next link' },
        { key: 'Shift + K', action: 'Previous link' },
        { key: 'U', action: 'Next unvisited link' },
        { key: 'V', action: 'Next visited link' },
        { key: 'Enter', action: 'Activate the focused link' },
        {
          key: 'NVDA + F7',
          action:
            'Open "Elements List" and choose Links tab to see all links on the page',
        },
      ],
      demoLinks: [
        { text: 'View your account balance', href: '#', good: true },
        { text: 'Transfer money to another account', href: '#', good: true },
        { text: 'Click here', href: '#', good: false },
        { text: 'Read more', href: '#', good: false },
        { text: 'FunnyMoney savings account details', href: '#', good: true },
        { text: 'Link', href: '#', good: false },
      ],
      tip: 'Press K repeatedly to navigate through links on this page. Open the "Elements List" (NVDA + F7 → Links tab) to view all links listed together. If link texts are vague, the list is useless.',
    },

    landmarks: {
      heading: 'Navigating by landmarks',
      wcag: [
        wcag('1.3.1', 'Info and Relationships', 'A'),
        wcag('2.4.1', 'Bypass Blocks', 'A'),
      ],
      description:
        'Landmarks are page regions such as <header>, <nav>, <main>, <footer>, etc. They help screen reader users move quickly between the main parts of a page. If there is more than one landmark of the same type, each one should have a clear and unique label, for example with aria-label.',
      shortcuts: [
        { key: 'D', action: 'Next landmark' },
        { key: 'Shift + D', action: 'Previous landmark' },
        {
          key: 'NVDA + F7',
          action: 'Open Elements List — choose Landmarks tab',
        },
      ],
      demoHeading: 'Example: secondary navigation',
      demoDescription:
        'This page already has a main navigation menu. The menu below is a second navigation landmark. Use D to jump between them and notice how NVDA announces the aria-label for each one. Without unique labels, users cannot tell which menu they are in.',
      demoNav: {
        label: 'Account menu',
        links: ['Overview', 'Transactions', 'Statements', 'Settings'],
      },
      tip: 'Press D in browse mode to move between landmarks on this page. The two navigation regions have different labels, so screen reader users can tell them apart. You can also check the landmarks in the Elements List.',
    },

    images: {
      heading: 'Navigating by images',
      wcag: [wcag('1.1.1', 'Non-text Content', 'A')],
      description:
        'Press G in NVDA browse mode to jump between images. Listen to how each image is announced — informative images should have descriptive alt text, while decorative images should be skipped entirely.',
      shortcuts: [
        { key: 'G', action: 'Next image' },
        { key: 'Shift + G', action: 'Previous image' },
      ],
      informativeAlt: 'Three gold bars stacked on a dark surface',
      informativeCaption: 'Informative image has descriptive alt text',
      decorativeCaption:
        'Decorative image has empty alt text and screen reader skips it',
      tip: 'If an image has no alt attribute at all, the screen reader will announce the file name or URL, which can be confusing and unhelpful. Always set alt="" on decorative images.',
    },

    tabs: {
      heading: 'Custom widget: Tab panel',
      wcag: [wcag('4.1.2', 'Name, Role, Value', 'A')],
      descriptionStart: 'This tab panel follows the ',
      apgLinkText: 'ARIA Authoring Practices (APG) tabs pattern',
      apgLinkUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
      descriptionEnd:
        '. Screen readers announce the tab role, position ("tab 1 of 3"), and selected state. Arrow keys switch between tabs while Tab moves into the panel content.',
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
          description:
            'Manage your notification preferences, security settings, and account details from this panel.',
          listItems: [
            'Two-factor authentication: Enabled',
            'Email notifications: On',
            'SMS alerts: Off',
          ],
        },
      ],
      shortcuts: [
        { key: '←/→', action: 'Switch between tabs' },
        { key: 'Tab', action: 'Move focus into the tab panel content' },
        { key: 'Shift + Tab', action: 'Move focus back to the tab list' },
      ],
    },

    liveRegions: {
      heading: 'Dynamic content and live regions',
      wcag: [wcag('4.1.3', 'Status Messages', 'AA')],
      description:
        'When content updates dynamically, screen reader users need to be informed about the change. An aria-live region announces updates automatically without moving focus.',
      descriptionExample:
        'This example uses aria-live="polite", so updates are announced at the next pause without interrupting the user. This works well for non-urgent messages such as notifications or status updates. Use aria-live="assertive" only for urgent alerts, because it interrupts the current announcement.',

      buttonLabel: 'Simulate new activity',
      notificationTemplate:
        'New activity: You received a payment of €150.00 from FunnyMoney Rewards.',
    },

    form: {
      heading: 'Form navigation and error feedback',
      wcag: [
        wcag('3.3.1', 'Error Identification', 'A'),
        wcag('3.3.3', 'Error Suggestion', 'AA'),
        wcag('1.3.1', 'Info and Relationships', 'A'),
      ],
      description:
        'Screen readers navigate forms by pressing F (next form field) or Tab (next interactive element). Error messages must be programmatically associated with fields and announced when they appear.',
      formLabel: 'Transfer money',
      errorSummaryHeading: 'There are errors in the form:',
      successMessage: 'Transfer submitted successfully! (This is a demo)',
      shortcuts: [
        { key: 'F', action: 'Next form field (in browse mode)' },
        { key: 'Shift + F', action: 'Previous form field' },
        { key: 'B', action: 'Next button (in browse mode)' },
        {
          key: 'Tab',
          action:
            'Next interactive element (focus mode activates automatically)',
        },
        {
          key: 'Shift + Tab',
          action:
            'Previous interactive element (focus mode activates automatically)',
        },
      ],
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
      tip: 'Submit the form without filling in the required fields to trigger validation errors. The error summary uses role="alert", so it is announced immediately by screen readers. Each error message links to the related field, making it easier to move to the problem. Individual field errors are also connected to their fields by using aria-describedby, and aria-invalid shows that the field contains an error.',
    },
  },

  checklist: [
    'Screen reader reads the page title when the page loads',
    'Headings are announced correctly, can be navigated with the H key, and appear in the "Elements List"',
    'Links have clear and meaningful text, can be navigated with the K key, and appear in the "Elements List"',
    'Landmarks are announced correctly, can be navigated with the D key, and appear in the "Elements List"',
    'Repeated landmark types have unique labels so they can be told apart',
    'Informative images are announced with descriptive alternative text',
    'Decorative images are ignored by the screen reader',
    'Dynamic content updates are announced without moving focus',
    'Interactive components announce the correct name, role, state, and value',
    'Form fields can be reached with "Tab" and "Shift+Tab" and are announced correctly',
    'Required input fields are announced as required',
    'Error messages are announced when validation fails',
    'The reading order makes sense in browse mode',
  ],
};
