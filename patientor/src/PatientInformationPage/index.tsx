import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import { Patient } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";

const PatientInformationPage: React.FC = () => {
  const [{ patients }, dispatch] = useStateValue();
  const matchId = useRouteMatch('/api/patients/:id');
  
  React.useEffect(() => {
    
    const fetchPatientData = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${matchId}`)
          dispatch({ type: "ADD_PATIENT", payload: patientFromApi });
      } catch (e) {
        console.error(e);
      };
    };
    fetchPatientData();
  }, [dispatch])
  
  console.log('patient data: ', patients);
  
  
  return (
    <div>
      Patient information page comes here
    </div>
  )
};

export default PatientInformationPage;