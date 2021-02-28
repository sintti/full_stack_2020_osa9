import { NewPatient, Gender, Entry, NewEntry } from '../types';

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
}

const isGender = (param: any): param is Gender  => {
  return Object.values(Gender).includes(param);
}

const isEntry = (param: any): param is Entry[] => {
  return param;
}

// const isArray = (param: any): param is Array<any> => {
//   return param;
// }

const parseString = (param: any, str: string): string => {
  if (!param || !isString(param)) {
    throw new Error(`Incorrect or missing ${str}: ${param}`);
  }
  return param;
}

const parseGender = (param: any): Gender => {
  if (!param || !isGender(param)) {
    throw new Error(`Incorrect or missing gender: ${param}`);
  }
  return param;
}

const parseEntries = (param: any): Entry[] => {
  if (!param || !isEntry(param)) {
    throw new Error(`Incorrect or missing entries: ${param}`);
  }
  return param;
}

// const parseArray = (param: any): Array<any> => {
//   if (!param || !isArray(param)) {
//     throw new Error(`Incorrect or missing params: ${param}`);
//   }
//   return param;
// }

const parseType = (param: any): any => {
  if (!param) {
    throw new Error('type missing from entries');
  }
  return param;
}


const toNewPatientEntry = (object: any): NewPatient => {
  return {
    name: parseString(object.name, 'name'),
    dateOfBirth: parseString(object.dateOfBirth, 'dateOfBirth'),
    ssn: parseString(object.ssn, 'social security number'),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation, 'occupation'),
    entries: parseEntries(object.entries)
  };
}

export const toNewEntry = (object: any): NewEntry => {
  return {
    date: parseString(object.date, 'date'),
    type: parseType(object.type),
    specialist: parseString(object.specialist, 'specialist'),
    description: parseString(object.description, 'description'),
  };
}

export default toNewPatientEntry;