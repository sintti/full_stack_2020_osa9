import React from 'react';

import { Entry } from '../types';
import HealthEntry from './HealthEntry';
import HospitalEntry from './HospitalEntry';
import OccupationalEntry from './OccupationalEntry';

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  console.log({ entry });
  
  switch (entry.type) {
    case "HealthCheck":
      return <HealthEntry entry={entry} />;
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalEntry entry={entry} />;
    default:
      return <p>Something went wrong</p>;
  };
};

export default EntryDetails;