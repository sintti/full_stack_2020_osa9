import patientData from '../../data/patients';
import { NonSensitivePatientEntry, Patient, NewPatient } from '../types';

const getAll = (): Array<Patient> => {
  return patientData;
};

const getPatient = (id: string): Patient | undefined => {
  const patient: Patient | undefined = patientData.find(p => p.id === id)
  return patient;
}

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }))
}

const addPatient = ( patient: NewPatient ): Patient => {
  const newPatientEntry = {
    id: String(Math.random() * 1000),
    ...patient
  };
  
  patientData.push(newPatientEntry);
  return newPatientEntry;
};

const addPatientEntries = ( idToModify: string, entry: any ): any => {
  console.log({idToModify})
  console.log({entry})
  const newEntries = {
    id: String(Math.random() * 1000),
    date: new Date(),
    ...entry
  }
  console.log({ newEntries })
  let patientToModify: any = patientData.find(p => p.id === idToModify);
  patientToModify.entries.push(newEntries);
  patientData.push(patientToModify);
  
  return patientToModify;
}

export default {
  getAll,
  getPatient,
  getNonSensitivePatientEntries,
  addPatient,
  addPatientEntries
}