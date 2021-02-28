import { State } from "./state";
import { Diagnosis, Patient } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "SET_DIAGNOSES_LIST";
      payload: Diagnosis[];
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "SET_DIAGNOSES_LIST":
      return {
        ...state,
        diagnoses: {
          ...action.payload.reduce(
            (memo, diagnose) => ({ ...memo, [diagnose.code]: diagnose }),
            {}
          ),
          ...state.diagnoses
        }
      }
    default:
      return state;
  }
};

export const setPatientList = (patientList: any) => {
  return (dispatch: (arg0: { type: string; data: any; }) => void) => {
    dispatch({
      type: 'SET_PATIENT_LIST',
      data: patientList
    })
  }
}

export const setDiagnosesList = (diagnosesList: Diagnosis[]) => {
  return (dispatch: (arg0: { type: string; data: Diagnosis[]; }) => void) => {
    dispatch({
      type: 'SET_DIAGNOSES_LIST',
      data: diagnosesList
    })
  }
}