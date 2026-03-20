import type { NavItem } from '../types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', path: '/', description: 'Workshop home page' },
  { label: 'Keyboard', path: '/keyboard', description: 'Keyboard accessibility' },
  { label: 'Structure', path: '/structure', description: 'Document structure and semantics' },
  { label: 'Screen Reader', path: '/screen-reader', description: 'Screen reader testing' },
  { label: 'Zoom', path: '/zoom', description: 'Zoom and reflow' },
  { label: 'Exercise', path: '/exercise', description: 'Hands-on exercise' },
  { label: 'Exercise Fixed', path: '/exercise-fixed', description: 'Corrected exercise' },
];
