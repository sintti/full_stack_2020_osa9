import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils/utils';
import {toNewEntry} from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatientEntries());
});

router.get('/:id', (req, res) => {
  res.send(patientService.getPatient(req.params.id))
})

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    
    const addedPatient = patientService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (e) {
    res.status(404).send(e.message)
  }
});

router.post('/:id/entries', (req, res) => {
  try {
    console.log('aksdkaksd')
    const idToModify = req.params.id;
    console.log('stuff: ', req.body)
    const newEntry = toNewEntry(req.body);
    
    const addedEntry = patientService.addPatientEntries(idToModify, newEntry);
    res.json(addedEntry)
  } catch (e) {
    res.status(404).send(`Error while adding entries: ${e.message}`)
  }
})

export default router;