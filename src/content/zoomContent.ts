import type { WcagCriterion } from '../components/workshop';

type WcagLevel = WcagCriterion['level'];

function wcag(id: string, name: string, level: WcagLevel): WcagCriterion {
  return { id, name, level };
}

export const zoomContent = {
  title: 'Zoom & Reflow Testing',
  intro:
    'Users with low vision may use assistive magnification software, browser zoom, operating system zoom, or larger text settings. Content must stay readable and usable at 200% text resize and 400% browser zoom, without horizontal scrolling or overlapping elements.',
  personaIds: ['oliver', 'patrik'],

  sections: {
    textResize: {
      heading: 'Example: Text resize (200%)',
      wcag: [wcag('1.4.4', 'Resize Text', 'AA')],
      description:
        'Web accessibility guidelines require text to be resizable up to 200% without losing content or functionality.',
      requirements: [
        'Using the browser\'s zoom function (Ctrl + "+" key), the entire page content can be enlarged in proportion to the font size.',
        'The text can be enlarged using browser\'s standard font size settings. For example, in Google Chrome "Settings" > "Appearance" > "Font size".',
      ],
      exampleTitle: 'Text sizing units',
      exampleDescription:
        'Try the following methods to increase text size to 200% and observe the difference between fixed pixel sizes and relative units like rem:',
      incorrectExplanation:
        'Fixed pixel sizes do not scale with browser text settings. As a result, users who increase their default font size may still see text that is too small.',
      correctExplanation:
        'Relative units such as rem scale with the user’s font size preferences. This helps keep text proportional, readable, and easier to use when text is resized to 200%.',
    },

    reflow: {
      heading: 'Example: Reflow at 400% zoom',
      wcag: [wcag('1.4.10', 'Reflow', 'AA')],
      description:
        'At 400% browser zoom, which is roughly equal to a viewport width of 320 CSS pixels, content must reflow so it can be used in a single column without horizontal scrolling. Users should be able to read and interact with the page without losing information or functionality.',

      layout: {
        exampleTitle: 'Layout reflow',
        exampleDescription:
          'These examples simulate what happens to a multi-column layout at high zoom levels.',
        incorrectExplanation:
          'Fixed-width layout with overflow: hidden. At high zoom, cards get clipped or cause horizontal scrolling.',
        correctExplanation:
          'Flexible layout using CSS Grid with auto-fit. Cards reflow into a single column at narrow viewports.',
        cards: ['Checking: €4,230', 'Savings: €12,800', 'Business: €890'],
      },

      carousel: {
        exampleTitle: 'Custom widget at 400% zoom',
        description:
          'Carousels are common UI patterns that often break at high zoom levels. This carousel is built to remain usable at 400% zoom: content reflows, controls are reachable, and no information is cut off.',
        regionLabel: 'FunnyMoney product offers',
        slides: [
          {
            title: 'Savings Account',
            description:
              'Earn 2.5% annual interest on your savings. No minimum balance required. Access your funds anytime.',
            highlight: '2.5% APY',
          },
          {
            title: 'FunnyMoney Card',
            description:
              '3% cashback on dining, 2% on groceries, 1% on everything else. No annual fee for the first year.',
            highlight: '3% Cashback',
          },
          {
            title: 'Home Loan',
            description:
              'Competitive fixed rates from 3.2%. Flexible repayment terms from 10 to 30 years. Free pre-approval.',
            highlight: 'From 3.2%',
          },
          {
            title: 'Business Banking',
            description:
              'Tailored solutions for small businesses. Free transactions up to 100/month. Dedicated support team.',
            highlight: 'Free plan',
          },
        ],
      },
    },

    spacing: {
      heading: 'Example:Spacing and target size',
      wcag: [wcag('2.5.8', 'Target Size (Minimum)', 'AA')],
      exampleTitle: 'Target size for interactive controls',
      exampleDescription:
        'Small interactive elements like icon buttons, toggles, and pagination controls must have a minimum target size of 24×24 CSS pixels. At high zoom, undersized targets become nearly impossible to activate accurately.',
      incorrectExplanation:
        'These icon buttons are only 16×16px with 2px gaps. At 400% zoom they overlap and are extremely difficult to tap or click accurately.',
      correctExplanation:
        'Each button has a minimum size of 44×44px with adequate spacing. Even at 400% zoom, every control is easy to activate.',
      actions: [
        { icon: 'B', label: 'Bold' },
        { icon: 'I', label: 'Italic' },
        { icon: 'U', label: 'Underline' },
        { icon: 'S', label: 'Strikethrough' },
        { icon: '≡', label: 'Decrease line-height' },
        { icon: '☰', label: 'Increase line-height' },
        { icon: '⊞', label: 'Table' },
      ],
    },
  },

  checklist: [
    'All text remains readable at 200% text zoom',
    'Text respects the user’s text size settings',
    'At 400% browser zoom, content reflows into a single column',
    'At 400% browser zoom, no horizontal scrolling is needed for the main content',
    'No content is cut off, hidden, or overlaps when zoomed',
    'Custom widgets such as carousels, toolbars, etc., remain usable at 400% zoom',
    'Interactive targets are at least 24 × 24 CSS pixels',
  ],
};
