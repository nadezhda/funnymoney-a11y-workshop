import type { RouteObject } from 'react-router-dom';
import {
  HomePage,
  KeyboardPage,
  StructurePage,
  ScreenReaderPage,
  ZoomPage,
  ExercisePage,
  ExerciseFixedPage,
} from '../pages';

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/keyboard', element: <KeyboardPage /> },
  { path: '/structure', element: <StructurePage /> },
  { path: '/screen-reader', element: <ScreenReaderPage /> },
  { path: '/zoom', element: <ZoomPage /> },
  { path: '/exercise', element: <ExercisePage /> },
  { path: '/exercise-fixed', element: <ExerciseFixedPage /> },
];
