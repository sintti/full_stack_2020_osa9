import React from 'react';
import { Icon } from 'semantic-ui-react';

const HospitalEntry: React.FC<{ entry: any }> = ({ entry }) => {
  return (
    <div style={{ borderWidth: 2, borderStyle: 'solid', borderColor: 'gray', padding: 10 }}>
      <h1>
        {entry.date}
        <Icon name='doctor' />
      </h1>
        <p>{entry.description}</p>
    </div>
  );
};

export default HospitalEntry;