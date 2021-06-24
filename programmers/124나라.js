function solution(n) {
  const getOneTwoFourNumber = (number) => {
    let numberString = "";
    let quotient = Math.floor(number / 3);
    let remainder = Math.floor(number % 3);
    if (remainder === 0) {
      quotient = quotient - 1;
      remainder = 3;
    }
    if (quotient === 0) {
      switch (number) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 4;
      }
    } else {
      quotient = getOneTwoFourNumber(quotient);
      remainder = getOneTwoFourNumber(remainder);
    }
    numberString = String(quotient) + String(remainder);
    return numberString;
  };

  let answer = String(getOneTwoFourNumber(n));
  return answer;
}

console.log(solution(100));
