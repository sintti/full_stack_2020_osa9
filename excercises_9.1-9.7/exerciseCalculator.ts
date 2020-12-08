interface ExerciseFeedback {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

// interface ExerciseValues {
//   targetHours: number;
//   doneExercise: Array<number>;
// }

// const parseArgs = (args: Array<string>): ExerciseValues => {
//   if (args.length < 4) throw new Error('Not enough arguments');
//   let targetHours: number;
//   let doneExercise: Array<number> = [];
  
//   if (!isNaN(Number(args[2]))) {
//     targetHours = Number(args[2]);
//   } else {
//     throw new Error('One of the provided values was not a number')
//   }
  
//   for (let i = 3; i < args.length; i++) {
//     doneExercise.push(Number(args[i]));
//   }
    
//   console.log('hours ', targetHours);
//   console.log('exerc ', doneExercise);
//   return {
//     targetHours,
//     doneExercise
//   }
// }



const calculateExercises = (doneExercise: Array<number>, targetHours: number): ExerciseFeedback => {
  const average = doneExercise.reduce((a, b) => a + b) / doneExercise.length;
  const periodLength = doneExercise.length;
  const trainingDays = doneExercise.map(d => d !== 0).length;
  const target = targetHours;
  let success = false;
  if (average >= targetHours) {
    success = true;
  }
  
  let rating = 0;
  if (average < targetHours / 2) {
    rating = 1;
  } else if (average >= targetHours / 2 && average < targetHours) {
    rating = 2;
  } else if (average >= targetHours) {
    rating = 3;
  }
  
  let ratingDescription = 'You were lazy this week! Do 1000 push ups!';
  if (rating === 1) {
    ratingDescription = 'Quite bad still, work harder next week!';
  } else if (rating === 2) {
    ratingDescription = 'Not too bad but could be better';
  } else if (rating === 3) {
    ratingDescription = 'Great performance this week!';
  }
  
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

export default calculateExercises;