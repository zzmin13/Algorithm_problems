/*
순위	당첨 내용
1	6개 번호가 모두 일치
2	5개 번호가 일치
3	4개 번호가 일치
4	3개 번호가 일치
5	2개 번호가 일치
6(낙첨)	그 외

로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다.
하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
알아볼 수 없는 번호는 0으로 표기된다.

민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.

<입출력 예>
lottos : [44, 1, 0, 0, 31, 25]   win_nums : [31, 10, 45, 1, 6, 19]    result: [3,5]
lottos : [0, 0, 0, 0, 0, 0]      win_nums : [38, 19, 20, 40, 15, 25]    result: [1, 6]
lottos : [45, 4, 35, 20, 3, 9]   win_nums : [20, 9, 3, 45, 4, 35]    result: [1, 1]

*/

function solution(lottos, win_nums) {
  let winNumber = 0; // 당첨 개수
  let zeroNumber = 0; // 0의 개수
  let ranking; // 등수
  const answer = [];
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroNumber++;
    } else {
      for (let j = 0; j < win_nums.length; j++) {
        if (lottos[i] === win_nums[j]) {
          winNumber++;
        }
      }
    }
  }
  const maxWinNumber = winNumber + zeroNumber;
  const minWinNumber = winNumber;
  let maxRank;
  let minRank;

  switch (maxWinNumber) {
    case 0:
      maxRank = 6;
      break;
    case 1:
      maxRank = 6;
      break;
    case 2:
      maxRank = 5;
      break;
    case 3:
      maxRank = 4;
      break;
    case 4:
      maxRank = 3;
      break;
    case 5:
      maxRank = 2;
      break;
    case 6:
      maxRank = 1;
      break;
  }
  switch (minWinNumber) {
    case 0:
      minRank = 6;
      break;
    case 1:
      minRank = 6;
      break;
    case 2:
      minRank = 5;
      break;
    case 3:
      minRank = 4;
      break;
    case 4:
      minRank = 3;
      break;
    case 5:
      minRank = 2;
      break;
    case 6:
      minRank = 1;
      break;
  }
  answer[0] = maxRank;
  answer[1] = minRank;
  return answer;
}

const lottos = [1, 2, 3, 4, 5, 6];
const win_nums = [7, 8, 9, 10, 11, 12];
console.log(solution(lottos, win_nums));
