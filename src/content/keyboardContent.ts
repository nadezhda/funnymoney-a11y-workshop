import type { WcagCriterion } from '../components/workshop';

type WcagLevel = WcagCriterion['level'];

function wcag(id: string, name: string, level: WcagLevel): WcagCriterion {
  return { id, name, level };
}

export const keyboardContent = {
  title: 'Keyboard Accessibility Testing',
  intro:
    'Keyboard accessibility ensures that all users can navigate and interact with your application using only a keyboard.',
  introWhy: 'Keyboard accessibility is important for:',
  introList: [
    'Users with motor disabilities who cannot or find it difficult to use a mouse',
    'Users with tremors or limited hand control',
    'Users with no hands or limited use of hands',
    'Blind and low vision users who usually navigate by keyboard only using screen readers',
    'Users who prefer keyboard navigation for speed and efficiency',
  ],
  personaIds: ['patrik', 'felicia'],
  testMethodology: {
    heading: 'What to test?',
    description:
      'Keyboard navigation relies on small set of keys that allows users to move through and interact with web application without mouse.',
    checklist: [
      'All interactive elements are reachable with the Tab and Shift+Tab keys',
      'Repetitive content can be bypassed with skip links',
      'The tab order is logical and follows the visual layout',
      'Keyboard focus remains visible at all times',
      'Buttons work with Enter and Space keys',
      'Select menus and dropdowns work with the keyboard only',
      'Radio buttons groups are navigable with Arrow keys',
      'Checkboxes can be toggled with the Space key',
      'Forms can be submitted with the keyboard',
      'No keyboard trap is present',
      'Non-interactive elements are not focusable',
    ],
  },

  sections: {
    skipLink: {
      heading: 'Example: Skip link',
      description:
        'A skip link allows keyboard users to bypass repetitive navigation and jump directly to the main content. Press Tab on this page to see the skip link appear at the top.',
      tip: 'Click the browser address bar and press Tab. The skip link "Skip to main content" should appear.',
      wcag: [wcag('2.4.1', 'Bypass Blocks', 'A')],
    },

    focusVisibility: {
      heading: 'Example: Visible focus',
      exampleTitle: 'Focus indicator contrast',
      exampleDescription:
        'Focus indicators must have sufficient contrast against the background so keyboard users can see where they are on the page.',
      incorrectExplanation:
        'The focus outline is too faint to see against the background. A user tabbing through the page would lose track of where they are.',
      correctExplanation:
        'The focus outline has strong contrast and is clearly visible. Keyboard users can always see which element is focused.',
      wcag: [
        wcag('2.4.7', 'Focus Visible', 'AA'),
        wcag('2.4.11', 'Focus Not Obscured (Minimum)', 'AA'),
        wcag('2.4.13', 'Focus Appearance', 'AAA'),
      ],
    },

    mouseOnly: {
      heading: 'Example: Mouse and keyboard accessibility',
      exampleTitle:
        'Interactive elements must be mouse and keyboard accessible',
      exampleDescription:
        'If something looks interactive and clickable my mouse pointer, it must be operable with keyboard too.  Try to reach these buttons with keyboard:',
      incorrectExplanation:
        'This is a <div> styled to look like a button. It has no tabIndex, no role, and no keyboard event handler. Keyboard users cannot reach or activate it.',
      correctExplanation:
        'This is a native <button> element which is focusable and can be activated by keyboard (Enter or Space) without additional code.',
      wcag: [wcag('2.1.1', 'Keyboard', 'A')],
    },

    form: {
      heading: 'Example: Form keyboard interaction',
      description:
        'Different form controls use different keyboard keys. Practice navigating this form using only your keyboard.',
      keyReference: [
        { key: 'Tab', action: 'Move between form fields' },
        { key: 'Shift+Tab', action: 'Move between form fields backwards' },
        { key: 'Space', action: 'Toggle checkboxes, activate buttons' },
        { key: 'Enter', action: 'Submit forms, activate buttons' },
        {
          key: 'Arrow keys',
          action: 'Navigate within radio groups and select dropdowns',
        },
        {
          key: 'Escape',
          action: 'Close open dropdowns and modals',
        },
      ],
      fields: {
        name: {
          label: 'Account holder name',
          placeholder: 'Enter your full name',
        },
        accountType: {
          label: 'Account type',
          options: [
            { value: '', label: 'Select an account type' },
            { value: 'checking', label: 'Checking Account' },
            { value: 'savings', label: 'Savings Account' },
            { value: 'business', label: 'Business Account' },
          ],
        },
        contactMethod: {
          legend: 'Preferred contact method',
          options: ['Email', 'Phone', 'Mail'],
        },
        agreements: {
          legend: 'Agreements',
          options: [
            { key: 'terms', label: 'I accept the terms and conditions' },
            { key: 'newsletter', label: 'Subscribe to newsletter' },
            { key: 'marketing', label: 'Allow marketing communications' },
          ],
        },
      },
      submitLabel: 'Open Account',
      successMessage: 'Form submitted successfully!',
      wcag: [wcag('2.1.1', 'Keyboard', 'A')],
    },

    disclosure: {
      heading: 'Example: Custom widgets',
      description:
        'Custom interactive widgets must accessible to keyboard users. The ARIA Authoring Practices (APG) outlines necessary keyboard interactions and ARIA attributes necessary for many types of custom widgets. A disclosure widget here is an example of custom component that shows and hides content. It must respond to Enter and Space.',
      triggerLabel: 'Account security information',
      content:
        'Your FunnyMoney Bank account is protected with two-factor authentication (2FA). We recommend enabling biometric login for faster access.',
      contentList: [
        'Never share your login credentials',
        'Enable two-factor authentication',
        'Use a strong, unique password',
        'Review your recent login activity regularly',
      ],
      tip: 'The button uses aria-expanded to communicate its state and aria-controls to link to the content it reveals. Because it is a native <button>, it responds to Enter and Space automatically.',
      wcag: [
        wcag('2.1.1', 'Keyboard', 'A'),
        wcag('4.1.2', 'Name, Role, Value', 'A'),
      ],
    },

    focusTrap: {
      heading: 'Example:Keyboard trap',
      description:
        'A keyboard trap occurs when a user can navigate into a component but cannot navigate out of it. There should be always a way for the users to leave a components using only keyboard. Modal dialogs intentionally trap focus, but must always provide a way to close (i.e. by pressing the Escape key).',
      badButtonLabel: 'View terms',
      badModalTitle: 'Terms & Conditions',
      badModalText:
        'You are now trapped. There is no close button and Escape does not work. A keyboard user cannot leave this dialog.',
      badWarning:
        'Warning: This demo traps keyboard focus intentionally. Click outside the modal to dismiss it.',
      goodButtonLabel: 'View terms',
      goodModalTitle: 'Terms & Conditions',
      goodModalText:
        'This button activate the modal that traps focus correctly. You can Tab between the elements inside, and press Escape or activate the Close button to leave.',
      goodCloseLabel: 'Close',
      incorrectExplanation:
        'This button activate the modal that has no close button and does not respond to Escape. Once a keyboard user Tabs into it, they are stuck.',
      correctExplanation:
        'This modal traps focus within itself (good), but provides Escape and a visible Close button to exit. Focus returns to the trigger button when closed.',
      tip: 'A focus trap is only acceptable inside a modal dialog, and only if the user can always exit with Escape. Focus must return to the element that opened the dialog.',
      wcag: [wcag('2.1.2', 'No Keyboard Trap', 'A')],
    },

    nonInteractiveFocus: {
      heading: 'Example: Non-interactive elements in focus order',
      description:
        'Only interactive elements (links, buttons, form controls, etc.) should be get a focus. Adding tabindex="0" to non-interactive elements like paragraphs, headings, or divs creates unnecessary stops that slow down keyboard users and confuse screen readers. Programmatic focus (tabindex="-1") is acceptable when needed, for example to move focus to an error summary or a newly loaded section.',
      incorrectExplanation:
        'These non-interactive elements have tabindex="0", making them part of the focus order. Keyboard users must navigate through them to reach the actual interactive elements below. It is not expected behavior and can be confusing.',
      correctExplanation:
        'Only the interactive elements should be in focus order. Non-interactive text is read naturally by screen readers in browse mode without needing focus.',
      wcag: [],
    },
  },
};
