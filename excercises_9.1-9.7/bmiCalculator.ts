type Result = string;

// interface bmiValues {
//   height: number;
//   weight: number;
// }

// const parseArguments = (args: Array<string>): bmiValues => {
//   if (args.length < 4) throw new Error('Not enough arguments');
//   if (args.length > 4) throw new Error('Too many arguments');
  
//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       height: Number(args[2]),
//       weight: Number(args[3])
//     }
//   } else {
//     throw new Error('Provided values were not numbers')
//   }
// }

const calculateBmi = (height: number, weight: number): Result => {
  const bmi = weight / (height / 100 * height / 100);
  if (bmi >= 18.5 && bmi <= 25) {
    return 'Normal (healhy weight)';
  } else {
    return 'Not fully implemented yet. Try later.'
  }
}

// try {
//   const { height, weight } = parseArguments(process.argv);
//   console.log(calculateBmi(height, weight));
// } catch (e) {
//   console.log('Error happened. Message: ', e.message);
// }

export default calculateBmi