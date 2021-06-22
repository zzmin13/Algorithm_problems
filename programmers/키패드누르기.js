/*

맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

*/

function solution(numbers, hand) {
  const answerArray = [];
  const moveRow = [0, 0, 1, -1]; // 동 서 남 북
  const moveCol = [1, -1, 0, 0]; // 동 서 남 북
  let leftLocation = [3, 0];
  let rightLocation = [3, 2];

  for (let i = 0; i < numbers.length; i++) {
    let location = [];
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answerArray.push("L");
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answerArray.push("R");
    } else {
      // 2,5,8,0일 때
      let goalRow;
      let goalCol;
      if (numbers[i] === 2) {
        goalRow = 0;
        goalCol = 1;
      } else if (numbers[i] === 5) {
        goalRow = 1;
        goalCol = 1;
      } else if (numbers[i] === 8) {
        goalRow = 2;
        goalCol = 1;
      } else if (numbers[i] === 0) {
        goalRow = 3;
        goalCol = 1;
      }
      const leftSpace =
        Math.abs(leftLocation[0] - goalRow) +
        Math.abs(leftLocation[1] - goalCol);
      const rightSpace =
        Math.abs(rightLocation[0] - goalRow) +
        Math.abs(rightLocation[1] - goalCol);

      if (leftSpace < rightSpace) {
        // 왼손이 움직여야하는 칸이 더 적으면
        answerArray.push("L");
      } else if (leftSpace > rightSpace) {
        // 오른손이 움직여야 하는 칸이 더 적으면
        answerArray.push("R");
      } else {
        // 둘이 같으면
        if (hand === "left") {
          answerArray.push("L");
        } else {
          answerArray.push("R");
        }
      }
    }
    switch (numbers[i]) {
      case 1:
        location = [0, 0];
        break;
      case 2:
        location = [0, 1];
        break;
      case 3:
        location = [0, 2];
        break;
      case 4:
        location = [1, 0];
        break;
      case 5:
        location = [1, 1];
        break;
      case 6:
        location = [1, 2];
        break;
      case 7:
        location = [2, 0];
        break;
      case 8:
        location = [2, 1];
        break;
      case 9:
        location = [2, 2];
        break;
      case 0:
        location = [3, 1];
        break;
    }
    if (answerArray[answerArray.length - 1] === "L") {
      leftLocation = location;
    } else if (answerArray[answerArray.length - 1] === "R") {
      rightLocation = location;
    }
  }
  const answer = answerArray.join("");
  return answer;
}
const numbers = [0]; // 누를 번호가 담긴 배열
const hand = "left"; // 왼손잡이 or 오른손잡이
console.log(solution(numbers, hand));
