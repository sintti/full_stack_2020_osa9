import express from 'express';
import http from 'http';

import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_request, response) => {
  response.send('Hello Full Stack!');
})

app.get('/bmi', (request, response) => {
  if (isNaN(Number(request.query.height)) || isNaN(Number(request.query.weight))) {
    response.send('malformatted parameters')
  }
  const height = Number(request.query.height);
  const weight = Number(request.query.weight);
  const bmi = calculateBmi(height, weight);
  
  response.json({
    "weight": weight,
    "height": height,
    "bmi": bmi
  })
})

app.post('/exercises', (request, response) => {
  const body = request.body;
  if (!body.daily_exercises || !body.target) {
    response.status(400).send('parameters missing');
  } else if (isNaN(Number(body.target))) {
    response.status(400).send('malformatted parameters');
  } else if (body.daily_exercises.forEach((e: any) => isNaN(Number(e)))) {
    response.status(400).send('malformatted parameters');
  }
  
  const calculations = calculateExercises(body.daily_exercises, body.target);
  
  response.json(calculations);
})

const PORT = 3002;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});