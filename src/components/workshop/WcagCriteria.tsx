import './WcagCriteria.scss';

export interface WcagCriterion {
  id: string;
  name: string;
  level: 'A' | 'AA' | 'AAA';
}

const UNDERSTANDING_BASE = 'https://www.w3.org/WAI/WCAG22/Understanding';

function getSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

interface WcagCriteriaProps {
  criteria: WcagCriterion[];
}

export function WcagCriteria({ criteria }: WcagCriteriaProps) {
  if (criteria.length === 0) return null;

  return (
    <div className="wcag-criteria">
      <strong className="wcag-criteria__label">Related WCAG 2.2:</strong>
      <ul className="wcag-criteria__list">
        {criteria.map((c) => (
          <li key={c.id}>
            <a
              href={`${UNDERSTANDING_BASE}/${getSlug(c.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.id} {c.name} (Level {c.level})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
