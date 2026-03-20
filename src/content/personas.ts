import type { Persona } from '../types';
import feliciaImg from '../assets/felicia.jpg';
import oliverImg from '../assets/oliver.jpg';
import emmaImg from '../assets/emma.jpg';
import patrikImg from '../assets/patrik.jpg';

export const personas: Persona[] = [
  {
    id: 'felicia',
    name: 'Felicia',
    image: feliciaImg,
    summary:
      'Relies on screen reader to navigate through content and complete tasks.',
    disability: 'Blind',
    tools: ['Screen reader (NVDA)', 'Keyboard navigation'],
    goals: [
      'Understand all visual content through text descriptions',
      'Scan through the page using headings, landmarks, and links',
      'Complete banking forms and transactions independently',
    ],
    frustrations: [
      'Images without alt text leave gaps in understanding',
      'Unlabelled buttons and links with no context',
      'Dynamic content that changes without announcement',
      'Custom widgets that are not navigable with a screen reader',
    ],
    solutions: [
      'Descriptive alt text on all informative images',
      'Proper landmark regions with labels',
      'Logical heading structure and meaningful link text',
      'Live regions for dynamic content updates',
      'ARIA roles and states on custom widgets',
    ],
  },
  {
    id: 'oliver',
    name: 'Oliver',
    image: oliverImg,
    summary: 'Struggles with poor contrast and unresponsive content.',
    disability: 'Low vision',
    tools: [
      'Enlarged text',
      'Browser zoom (up to 400%)',
      'High contrast mode',
      'Screen magnifier, i.e. ZoomText',
    ],
    goals: [
      'Read text comfortably at larger sizes',
      'Using interfaces without overlapping when zoomed',
      'Navigate without horizontal scrolling',
      'See focus indicators and boundaries of UI elements clearly',
    ],
    frustrations: [
      'Low-contrast text and focus indicators',
      'Content that breaks or overlaps when zoomed',
      'Fixed-size layouts that cause horizontal scrolling',
      'Small touch targets that are hard to activate',
    ],
    solutions: [
      'Text sized in relative units that respects browser settings',
      'Layout that reflows into a single column at larger zoom',
      'High-contrast UI elements and focus indicators',
    ],
  },
  {
    id: 'emma',
    name: 'Emma',
    image: emmaImg,
    summary:
      'Benefits from clear colour contrast, plain language, and structured layout.',
    disability: 'Dyslexia and colour blindness',
    tools: [
      'Browser reader mode',
      'Spell checker and colour highlighter',
      'Custom font and paragraph settings',
    ],
    goals: [
      'Read and understand content without extra effort',
      'Distinguish UI elements that rely on colour differences',
      'Navigate pages with a clear, predictable structure',
    ],
    frustrations: [
      'Long, complex sentences and jargon',
      'Information conveyed only by colour',
      'Poor contrast between text and background',
      'Cluttered layouts with no clear visual hierarchy and spacing',
      'Typing the same information multiple times',
    ],
    solutions: [
      'Autocomplete settings in forms',
      'Responsive layout',
      'Plain language and shorter paragraphs',
      'Avoiding justified text and italics',
      'Clear headings, consistent layout, and logical reading order',
      'Colour is not the only way to convey meaning',
      'Sufficient contrast between text and background',
    ],
  },
  {
    id: 'patrik',
    name: 'Patrik',
    image: patrikImg,
    summary: 'Uses zoom, magnifier, and keyboard instead of a mouse.',
    disability: 'Low vision and rheumatoid arthritis',
    tools: [
      'Browser zoom (up to 400%)',
      'Screen magnifier',
      'Keyboard with the wrist support',
      'Keyboard shortcuts and assistive software for key remapping',
      'Speech recognition software for dictation and voice commands',
    ],
    goals: [
      'Read text comfortably at larger sizes',
      'Complete all tasks using only a keyboard',
      'Control applications through voice commands',
    ],
    frustrations: [
      'Text that does not resize with browser settings',
      'Interactive elements that only work with a mouse',
      'Visual focus indicators that are hard to see or missing',
      'Content that breaks or overlaps when zoomed',
      'Small touch targets and cramped spacing',
    ],
    solutions: [
      'Text sized in relative () units that respects browser settings',
      'All interactive elements reachable by keyboard',
      'Layout that reflows into a single column at high zoom',
      'Adequate spacing and target sizes',
    ],
  },
];
