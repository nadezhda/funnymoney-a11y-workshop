import type { AgendaItem } from '../types';

export const agendaItems: AgendaItem[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'What is accessibility and why it matters',
  },
  {
    id: 'personas',
    title: 'Meet the Personas',
    description: 'Understanding real user needs',
  },
  {
    id: 'keyboard',
    title: 'Keyboard Testing',
    description: 'Navigation, focus, tab order, keyboard traps',
    path: '/keyboard',
  },
  {
    id: 'structure',
    title: 'Document Structure',
    description:
      'Page title, headings, landmarks, semantic HTML, images and alt text',
    path: '/structure',
  },
  {
    id: 'screen-reader',
    title: 'Screen Reader Testing',
    description: 'Browse mode, focus mode, navigating by elements',
    path: '/screen-reader',
  },
  {
    id: 'zoom',
    title: ' Zoom & Reflow Testing',
    description: '200% text resize, 400% zoom, horizontal scrolling',
    path: '/zoom',
  },
  {
    id: 'exercise',
    title: 'Hands-on Exercise',
    description: 'Find and understand accessibility issues',
    path: '/exercise',
  },
];
