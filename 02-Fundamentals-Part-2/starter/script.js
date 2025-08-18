'use strict'

// const calcAverage = (score1, score2, score3) => {
//      return (score1 + score2 + score3) / 3
// }

// const scoreDolphins = calcAverage(44, 23, 71)
// console.log(scoreDolphins);

// const scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//      if (avgDolphins >= avgKoalas * 2) {
//           console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
//      } else if (avgDolphins * 2 <= avgKoalas) {
//           console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} )`);
//      } else {
//           console.log('No team wins');
//      }
// }

// const result = checkWinner(scoreDolphins, scoreKoalas);
// console.log(result);

// const jonas = {
//      firstName: 'Jonas',
//      lastName: 'Schemetmen',
//      birthYear: 1991,
//      job: 'teacher',
//      friends: ['Michel', 'Peter', 'Steven'],

//      calcAge: function () {
//           this.age = 2025 - this.birthYear;
//           return this.age;
//      },
//      hasDrivingLicense: function () {
//           return this.calcAge() >= 18;
//      },

//      getSummary: function () {
//           return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDrivingLicense() ? 'a' : 'no'} driver's license`
//      }
// };

// console.log(jonas.getSummary());

///challenge 3

// const mark = {
//      fullName: 'Mark Miller',
//      mass: 78,
//      height: 1.69,
//      calcBMI: function () {
//           this.bmi = this.mass / (this.height * this.height)
//           return this.bmi
//      }
// }

// const john = {
//      fullName: 'John Smith',
//      mass: 92,
//      height: 1.95,
//      calcBMI: function () {
//           this.bmi = this.mass / (this.height * this.height)
//           return this.bmi
//      }
// }

// if (mark.calcBMI() > john.calcBMI()) {
//      console.log(`${mark.fullName}\'s BMI(${mark.calcBMI()}) is higher than ${john.fullName}\'s(${john.calcBMI()})`);
// } else {
//      console.log(`${john.fullName}\'s BMI(${john.calcBMI()}) is higher than ${mark.fullName}\'s(${mark.calcBMI()})`);
// }


//Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
     tips.push(calcTip(bills[i]))
     totals.push(tips[i] + bills[i])
}
console.log(totals);

const calcAverage = (arr) => {
     let sum = 0;
     for (let i = 0; i <= arr.length - 1; i++) {
          sum += arr[i]
     }
     return sum / arr.length
}

console.log(calcAverage(totals))