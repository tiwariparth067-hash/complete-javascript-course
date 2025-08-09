'use strict'

const calcAverage = (score1, score2, score3) => {
     return (score1 + score2 + score3) / 3
}

const scoreDolphins = calcAverage(44, 23, 71)
console.log(scoreDolphins);

const scoreKoalas = calcAverage(65, 54, 49)
console.log(scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
     if (avgDolphins >= avgKoalas * 2) {
          console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
     } else if (avgDolphins * 2 <= avgKoalas) {
          console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins} )`);
     } else {
          console.log('No team wins');
     }
}

const result = checkWinner(scoreDolphins, scoreKoalas);
console.log(result);
