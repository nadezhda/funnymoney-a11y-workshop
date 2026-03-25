import type { WcagCriterion } from '../components/workshop';

type WcagLevel = WcagCriterion['level'];

function wcag(id: string, name: string, level: WcagLevel): WcagCriterion {
  return { id, name, level };
}

export const structureContent = {
  title: 'Document Structure & Semantics',
  intro:
    'Semantic HTML provides meaning and structure that assistive technologies rely on. Automated testing tools can detect many structural issues. We can use this page to practice scanning with tools like axe DevTools or WAVE.',
  personaIds: ['felicia', 'emma', 'patrik'],

  sections: {
    pageTitle: {
      heading: 'Example: Page title',
      description:
        'The page title (<title>) is the first thing announced by a screen reader when a page loads. It helps users to identify and confirm they are on the right page.',
      codeExample: `<head>
  <title>Semantics - Accessibility Workshop - FunnyMoney Bank</title>
</head>`,
      tip: 'Without a descriptive page title, users with many tabs open cannot identify the page. Screen reader users hear the title first when the page loads.',
      wcag: [wcag('2.4.2', 'Page Titled', 'A')],
    },

    language: {
      heading: 'Example: Language attribute',
      description:
        'The lang attribute on <html> tells screen readers which language to use for pronunciation. Without it, a screen reader may use the wrong language rules and mispronounce content.',
      codeExample: `<html lang="en">
  ...
</html>`,
      tip: 'If parts of the page are in a different language, use the lang attribute on those elements too, e.g. <span lang="fi">Tervetuloa</span>.',
      wcag: [
        wcag('3.1.1', 'Language of Page', 'A'),
        wcag('3.1.2', 'Language of Parts', 'AA'),
      ],
    },

    headings: {
      heading: 'Example: Heading structure',
      description:
        'Page headings must be descriptive and properly structured. The order of heading levels should be logical, from <h1> through <h6>. A page should typically have only one <h1> that describes the overall content (similar to the page <title>), located at the beginning of the main content.',
      tips: [
        'When a page is missing an <h1>, screen reader users have to rely on other context clues to determine the page content.',
        'Empty heading elements are still announced to screen readers and appear in heading lists.',
      ],
      exampleTitle: 'Logical heading hierarchy',
      exampleDescription:
        'Screen reader users navigate headings with the H key. Skipping levels or using styled text instead of real headings breaks this navigation.',
      incorrectExplanation:
        'Uses <p> tags styled to look like headings. Screen readers see no heading structure at all.',
      correctExplanation:
        'Uses real heading elements in logical order. Screen reader users can navigate the page outline efficiently.',
      wcag: [
        wcag('1.3.1', 'Info and Relationships', 'A'),
        wcag('2.4.6', 'Headings and Labels', 'AA'),
      ],
    },

    altText: {
      heading: 'Example: Images and alternative text',
      description:
        'Every <img> must have an alt attribute. Informative images need descriptive alternative text. Decorative images require an empty alt="" so screen readers ignore them.',
      informative: {
        subheading: 'Informative image',
        incorrectExplanation:
          'The image has no alt attribute. Screen readers will announce the file name or URL, which can be meaningless.',
        correctExplanation:
          'Descriptive alt text tells screen reader users what the image shows and why it matters depends on context.',
        correctAlt:
          'Hand holding a coin above a blue piggy bank, with another coin on the table.',
        caption: 'Start saving with FunnyMoney - every coin counts!',
      },
      wcag: [wcag('1.1.1', 'Non-text Content', 'A')],
      decorative: {
        subheading: 'Decorative images',
        incorrectAlt: 'Teal colored horizontal decorative line divider element',
        incorrectExplanation:
          'A decorative image has verbose alt text. Screen readers announce it, wasting the user\'s time with "Teal colored horizontal decorative line divider element".',
        correctExplanation:
          'Empty alt="" tells screen readers this image is decorative and should be ignored.',
      },
    },

    landmarks: {
      heading: 'Example: Landmarks and ARIA labels',
      description:
        'Landmarks (<header>, <nav>, <main>, <footer>) let screen reader users jump between major page regions. When multiple landmarks of the same type exist, we need to differentiate them using ARIA attributes.',
      subheading: 'This demo page has two navigations',
      explanation:
        'The site header contains a <nav aria-label="Main navigation">. Below is a secondary navigation for this section with <nav aria-label="Structure topics">. Screen reader users can list landmarks and choose which one to navigate.',
      secondaryNavLabel: 'Structure topics',
      secondaryNavLinks: [
        { label: 'Page Title', href: '#page-title-heading' },
        { label: 'Language', href: '#language-heading' },
        { label: 'Headings', href: '#headings-heading' },
        { label: 'Alt Text', href: '#alt-text-heading' },
        { label: 'Landmarks', href: '#landmarks-heading' },
        { label: 'Accordion', href: '#accordion-heading' },
        { label: 'Login Form', href: '#login-heading' },
      ],
      tip: 'In a screen reader, we can pull list all existing on the page landmarks. You should see "Main navigation" and "Structure topics" listed as separate navigation regions.',
      wcag: [wcag('1.3.1', 'Info and Relationships', 'A')],
    },

    accordion: {
      heading: 'Example: Accordion with aria-expanded',
      description:
        'Accordion components use aria-expanded to communicate whether a section is open or closed. Screen readers announce "expanded" or "collapsed" when interacting with the button.',
      items: [
        {
          id: 'faq-1',
          question: 'How do I open a FunnyMoney account?',
          answer:
            'Visit any FunnyMoney branch or apply online through our secure portal. You will need valid identification and proof of address.',
        },
        {
          id: 'faq-2',
          question: 'What are the daily transfer limits?',
          answer:
            'Standard accounts have a daily transfer limit of €5,000. Business accounts can request higher limits through customer service.',
        },
        {
          id: 'faq-3',
          question: 'How do I reset my password?',
          answer:
            'Click "Forgot password" on the login page. You will receive a verification code by SMS or email to reset your credentials.',
        },
      ],
      wcag: [wcag('4.1.2', 'Name, Role, Value', 'A')],
    },

    loginForm: {
      heading: 'Example: Login form with aria-required',
      description:
        'Forms must have properly associated labels, required field indicators, and error messages that assistive technologies can detect.',
      fields: {
        username: { label: 'Username' },
        password: {
          label: 'Password',
          hint: 'Must be at least 8 characters with one number.',
        },
      },
      submitLabel: 'Log in',
      tip: 'Each field has a visible label connected to the input through the for and id attributes. The aria-required="true" attribute makes sure screen readers announce that the field is required. The password hint is linked with aria-describedby, so it is read out when the field is focused. Asterisks and other visual markers are not enough by themselves to indicate required fields.',
      wcag: [
        wcag('1.3.1', 'Info and Relationships', 'A'),
        wcag('3.3.2', 'Labels or Instructions', 'A'),
      ],
    },
  },

  checklist: [
    'The page has a descriptive <title>',
    'The <html> element has a lang attribute',
    'The page has exactly one <h1>',
    'Headings are in logical order (h1 → h2 → h3, no skips)',
    'There are no empty heading elements',
    'Headings are used for structure, not just styling',
    'All informative images have meaningful alt text',
    'Decorative images have alt=""',
    'Landmarks are present (header, nav, main, footer)',
    'Duplicate landmarks have unique aria-label',
    'Form fields are properly labeled',
    'Required fields use aria-required',
    'Accordion states are communicated with aria-expanded',
  ],
};
