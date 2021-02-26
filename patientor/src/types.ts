export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Entry {
  description: string;
  creationDate: string;
  createdBy: string;
  diagnosis?: Diagnosis;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries' >