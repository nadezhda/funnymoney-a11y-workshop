import { personas } from '../../content/personas';
import { PersonaCard } from './PersonaCard';
import type { Persona } from '../../types';
import './PersonaList.scss';

interface PersonaListProps {
  personaIds?: string[];
  compact?: boolean;
}

export function PersonaList({ personaIds, compact = false }: PersonaListProps) {
  const filteredPersonas: Persona[] = personaIds
    ? personas.filter((p) => personaIds.includes(p.id))
    : personas;

  return (
    <div className="persona-list">
      {filteredPersonas.map((persona) => (
        <PersonaCard key={persona.id} persona={persona} compact={compact} />
      ))}
    </div>
  );
}
