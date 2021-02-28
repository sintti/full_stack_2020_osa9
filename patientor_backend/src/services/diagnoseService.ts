import diagnoseData from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getAll = (): Array<Diagnosis> => {
  return diagnoseData;
};

const addDiagnose = () => {
  return null;
};

export default {
  getAll,
  addDiagnose
}