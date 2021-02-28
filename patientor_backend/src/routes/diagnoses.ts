import express from 'express';
import diagnoseService from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseService.getAll());
});

router.post('/', (_req, res) => {
  res.send('Saving diagnoses<<!');
});

export default router;