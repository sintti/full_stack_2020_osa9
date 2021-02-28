import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Icon } from 'semantic-ui-react';

import { Entry, NewEntry, Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue } from '../state';
import EntryDetails from './EntryDetails';
import AddEntryForm, { EntryFormValues } from '../AddPatientModal/AddEntryForm';

const PatientInformationPage: React.FC = () => {
  const [{diagnoses}, dispatch] = useStateValue();
  const [patient, setPatient] = React.useState<Patient>();
  const { id } = useParams<{ id: string }>();
  
  React.useEffect(() => {
    
    const fetchPatientData = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
        setPatient(patientFromApi);
      } catch (e) {
        console.error(e);
      };
    };
    fetchPatientData();
  }, [id])
  
  const submitNewEntry = async (values: EntryFormValues) => {
    try {
      const response: any = await axios.post<NewEntry>(
        `${apiBaseUrl}/patients/${id}/entries`,
        {date: new Date(), ...values}
      );
      dispatch({ type: "ADD_PATIENT", payload: response });
      window.location.reload();
    } catch (e) {
      console.error(e.response.data);
    }
  };
  
  return (
    <div>
      <h1>
        {patient?.name}
        {patient?.gender === 'male' && <Icon name='mars' />}
        {patient?.gender === 'female' && <Icon name='venus' />}
        {patient?.gender === 'other' && <Icon name='genderless' />}
      </h1>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <AddEntryForm onSubmit={submitNewEntry}/>
      <h2>entries</h2>
      {patient?.entries.map((entry: Entry) => (
        <EntryDetails entry={entry} />
      ))}
    </div>
  )
};

export default PatientInformationPage;