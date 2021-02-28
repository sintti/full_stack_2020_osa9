import React from 'react';
import { Icon } from 'semantic-ui-react';

const OccupationalEntry: React.FC<{ entry: any }> = ({ entry })  => {
  return (
    <div style={{ borderWidth: 2, borderStyle: 'solid', borderColor: 'gray', padding: 10 }}>
    <h1>
      {entry.date}
      <Icon name='stethoscope' />
    </h1>
    <h2 style={{ textTransform: 'uppercase' }}>{entry.employerName}</h2>
    <p>{entry.description}</p>
  </div>
  );
};

export default OccupationalEntry;