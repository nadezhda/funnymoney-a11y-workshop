import { useRoutes } from 'react-router-dom';
import { PageLayout } from '../components/layout';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);

  return <PageLayout>{element}</PageLayout>;
}

export default App;
