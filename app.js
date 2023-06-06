// 1
function biggerNumber(a, b) {
  if(a > b) {
    console.log(`${a} is bigger then ${b}`);
  } else if(a < b) {
    console.log(`${b} is bigger then ${a}`);
  } else {
    console.log(`${a} is equal ${b}`);
  }
}

biggerNumber(1, 2);

// 2
function longerDistance(meterDistance, footDistance) {
  const footDistanceInMeters = footDistance / 3.28;
  if(meterDistance > footDistanceInMeters) {
    console.log(`${meterDistance}m is more then ${footDistance}ft`);
  } else if (meterDistance < footDistanceInMeters) {
    console.log(`${meterDistance}m is less then ${footDistance}ft`);
  } else {
    console.log(`${meterDistance}m is equal to ${footDistance}ft`);
  }
}

longerDistance(1, 5);

// 3
function dividerChecker(a, b) {
  if(a % b === 0) {
    console.log(`${a} can be divided by ${b}`);
  } else if (b % a === 0) {
    console.log(`${b} can be divided by ${a}`);
  } else {
    console.log(`${a} can't be divided by ${b} or vice versa`);
  }
}

dividerChecker(3,4);

// 4
function lastDigitOddEvenChecker(number) {
  const lastDigit = number % 10;
  if(lastDigit % 2 === 0) {
    console.log(`the ${lastDigit} is even`);
  } else {
    console.log(`the ${lastDigit} is odd`);
  }
}

lastDigitOddEvenChecker(4315243254);

// 5
function digitCompare(number) {
  const firstDigit = Math.floor(number / 10);
  const secondDigit = number % 10;
  biggerNumber(firstDigit, secondDigit);
}

digitCompare(25);

// 6
// ¯\_(ツ)_/¯
function miscellaneousMathOperationsOnThreeDigitNumber(number) {
  let sum = 0;
  let product = 1;
  while(number) {
    sum += number % 10;
    product *= number % 10;
    number = Math.floor(number / 10);
  }

  if(sum % 2 === 0) {
    console.log(`the ${sum} is even`);
  } else {
    console.log(`the ${sum} is odd`);
  }

  if(sum % 5 === 0) {
    console.log(`the ${sum} can be divided by 5`);
  } else {
    console.log(`the ${sum} can't be divided by 5`);
  }

  if(product > 100) {
    console.log(`the ${product} is greater then 100`);
  } else {
    console.log(`the ${product} is less then 100`);
  }
}

miscellaneousMathOperationsOnThreeDigitNumber(625);

// 7
function sameDigitChecker(number) {
  let numberArr = [];
  let lastDigit;
  let sum = 0;
  let resultToReturn = false;

  while(number) {
    lastDigit = number % 10;
    number = Math.floor(number / 10);
    numberArr.push(lastDigit);
    sum += lastDigit;
  }

  if(sum / lastDigit === numberArr.length) {
    console.log('all digits are equal');
  } else {
      for (let i = 0; i < numberArr.length; i++) { 
        for (let j = 0; j < numberArr.length; j++) {
          if (i !== j) {
            if (numberArr[i] === numberArr[j]) {                          
              resultToReturn = true;
              break;
            }
          }
        }
      if (resultToReturn) {
        console.log('there are equal digits');
        break;
      }
    }
  }

  if(!resultToReturn) {
    console.log('there are NO equal digits');
  }
}

sameDigitChecker(312);

// 8
function isMirrored(number) {
  const initialNumber = number;
  let numberArr = [];
  let lastDigit;
  while(number) {
    lastDigit = number % 10;
    number = Math.floor(number / 10);
    numberArr.push(lastDigit);
  }
  mirroredNumber = Number(numberArr.join(''));
  return initialNumber === mirroredNumber ? console.log('number is mirrored') : console.log('number is not mirrored');
}

isMirrored(123321);