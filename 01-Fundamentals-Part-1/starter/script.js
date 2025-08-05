// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if(BMIMark > BMIJohn){
//      console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else{
//      console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }



// Type Conversion
// const inputYear = "1000"
// console.log(Number(inputYear)+12,inputYear);

// Type Coercion
// console.log(`i am ${23} years old`);
// console.log('I am '+ 23 + ' years old');

// const scoreDolphins = (97+112+101)/3;
// const scoreKoalas = (109+95+106)/3;
// const minimumScore=100;

// console.log(scoreDolphins,scoreKoalas);

// if(scoreDolphins >= minimumScore && scoreDolphins > scoreKoalas){
//      console.log('Dolphins wins');
// }else if(scoreKoalas >= minimumScore && scoreKoalas > scoreDolphins){
//      console.log('Koalas wins');
     
// }else if(scoreDolphins >= minimumScore && scoreKoalas >= minimumScore && scoreDolphins == scoreKoalas){
//      console.log('Both wins');
// }


const bill = 275;

const tip  = bill>=50 && bill<=300 ? bill*(15/100):bill*(20/100);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
