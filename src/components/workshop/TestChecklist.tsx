import { useState } from 'react';
import './TestChecklist.scss';

interface TestChecklistProps {
  items: string[];
}

export function TestChecklist({ items }: TestChecklistProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="test-checklist">
      <p className="test-checklist__progress">
        {checkedCount} of {items.length} completed
      </p>
      <fieldset className="test-checklist__fieldset">
        <legend className="test-checklist__legend">Testing checklist</legend>
        {items.map((item, index) => (
          <label key={index} className="test-checklist__item">
            <input
              type="checkbox"
              checked={checked[index] ?? false}
              onChange={() => toggleItem(index)}
            />
            <span className={checked[index] ? 'test-checklist__text--checked' : ''}>
              {item}
            </span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
