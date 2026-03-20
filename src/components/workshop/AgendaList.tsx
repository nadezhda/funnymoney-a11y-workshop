import { Link } from 'react-router-dom';
import { agendaItems } from '../../content/agenda';
import './AgendaList.scss';

export function AgendaList() {
  return (
    <ol className="agenda-list">
      {agendaItems.map((item) => (
        <li key={item.id} className="agenda-list__item">
          <div className="agenda-list__content">
            <strong className="agenda-list__title">
              {item.path ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                item.title
              )}
            </strong>
            <span className="agenda-list__description">
              {item.description}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
