import type { Persona } from '../../types';
import './PersonaCard.scss';

interface PersonaCardProps {
  persona: Persona;
  compact?: boolean;
}

export function PersonaCard({ persona, compact = false }: PersonaCardProps) {
  if (compact) {
    return (
      <div className="persona-card persona-card--compact">
        <div className="persona-card__body">
          <h3 className="persona-card__name">{persona.name}</h3>
          <p className="persona-card__disability">{persona.disability}</p>
          <p className="persona-card__summary">{persona.summary}</p>
          <div className="persona-card__tools">
            <strong>Tools:</strong> {persona.tools.join(', ')}
          </div>
        </div>
        {persona.image && (
          <img
            className="persona-card__image"
            src={persona.image}
            alt={`Portrait of ${persona.name}`}
          />
        )}
      </div>
    );
  }

  return (
    <div className="persona-card">
      <div className="persona-card__header">
        <div className="persona-card__header-text">
          <h3 className="persona-card__name">{persona.name}</h3>
          <p className="persona-card__disability">{persona.disability}</p>
          <p className="persona-card__summary">{persona.summary}</p>
        </div>
        {persona.image && (
          <img
            className="persona-card__image"
            src={persona.image}
            alt={`Portrait of ${persona.name}`}
          />
        )}
      </div>

      <div className="persona-card__section">
        <h4>Tools</h4>
        <ul>
          {persona.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="persona-card__section">
        <h4>Goals</h4>
        <ul>
          {persona.goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </div>

      <div className="persona-card__section">
        <h4>Frustrations</h4>
        <ul>
          {persona.frustrations.map((frustration) => (
            <li key={frustration}>{frustration}</li>
          ))}
        </ul>
      </div>

      <div className="persona-card__section">
        <h4>What helps</h4>
        <ul>
          {persona.solutions.map((solution) => (
            <li key={solution}>{solution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
