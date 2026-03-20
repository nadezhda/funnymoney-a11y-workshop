import type { ReactNode } from 'react';
import { Card } from '../ui/Card';
import './ExamplePair.scss';

interface ExamplePairProps {
  title: string;
  description?: string;
  incorrectLabel?: string;
  correctLabel?: string;
  incorrectExample: ReactNode;
  correctExample: ReactNode;
  incorrectExplanation: string;
  correctExplanation: string;
}

export function ExamplePair({
  title,
  description,
  incorrectLabel = 'Incorrect',
  correctLabel = 'Correct',
  incorrectExample,
  correctExample,
  incorrectExplanation,
  correctExplanation,
}: ExamplePairProps) {
  return (
    <div className="example-pair">
      <h3 className="example-pair__title">{title}</h3>
      {description && <p className="example-pair__description">{description}</p>}

      <div className="example-pair__grid">
        <Card variant="error">
          <p className="example-pair__label example-pair__label--incorrect">
            {incorrectLabel}
          </p>
          <div className="example-pair__demo">{incorrectExample}</div>
          <p className="example-pair__explanation">{incorrectExplanation}</p>
        </Card>

        <Card variant="success">
          <p className="example-pair__label example-pair__label--correct">
            {correctLabel}
          </p>
          <div className="example-pair__demo">{correctExample}</div>
          <p className="example-pair__explanation">{correctExplanation}</p>
        </Card>
      </div>
    </div>
  );
}
