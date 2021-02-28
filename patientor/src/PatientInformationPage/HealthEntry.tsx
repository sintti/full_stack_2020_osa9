import React from 'react';
import { Rating, Icon } from 'semantic-ui-react';

const HealthEntry: React.FC<{ entry: any }> = ({ entry }) => {
  return (
    <div style={{ borderWidth: 2, borderStyle: 'solid', borderColor: 'gray', padding: 10 }}>
      <h1>
        {entry.date}
        <Icon name='doctor' />
      </h1>
        <p>{entry.description}</p>
        <p>
        {<Rating icon="heart" disabled rating={4 - entry.healthCheckRating} maxRating={4} />}
        </p>
    </div>
  );
};

export default HealthEntry;