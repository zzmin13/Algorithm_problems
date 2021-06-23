/*
* [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?

[문제]
지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info,
개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,
각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

* info 배열 = ["개발언어 and 직군 and 경력 and 소울푸드 and 점수" , ...]; -> 배열의 크기는 1이상 50,000 이하
    (-는 해당 조건을 고려하지 않겠다는 말)
    - 개발언어 : cpp, java, python, - 중 하나
    - 직군: backend, frontend, - 중 하나
    - 경력 : junior, senior, - 중 하나
    - 소울푸드 : chicken, pizza , -중 하나
    - 점수 : 1 이상 100,000 이하
    - 각 단어는 공백 문자 (스페이스바) 하나로 구분되어 있음
* query 배열: 배열의 크기는 1이상 100,000 이하

입출력 예
info : ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
query : ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]
result : [1,1,1,1,2,4]

*/

function solution(info, query) {
  const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };
  const answer = [];
  const userMap = new Map();

  for (let a = 0; a < info.length; a++) {
    const infoTarget = info[a].split(" ");
    const infoKey = `${infoTarget[0][0]}${
      infoTarget[1][0]
    }${infoTarget[2][0].toUpperCase()}${infoTarget[3][0].toUpperCase()}`;
    const infoValue = Number(infoTarget[4]);
    if (userMap.has(infoKey)) {
      userMap.set(infoKey, [...userMap.get(infoKey), infoValue]);
    } else {
      userMap.set(infoKey, [infoValue]);
    }
  }
  userMap.forEach((value) => {
    value.sort((a, b) => a - b);
  });

  for (let i = 0; i < query.length; i++) {
    let queryTarget = query[i].split(" and ");
    const frontQuery = queryTarget.slice(0, queryTarget.length - 1);
    queryTarget = [
      ...frontQuery,
      ...queryTarget[queryTarget.length - 1].split(" "),
    ];
    const queryKey = `${queryTarget[0][0]}${
      queryTarget[1][0]
    }${queryTarget[2][0].toUpperCase()}${queryTarget[3][0].toUpperCase()}`.replace(
      /\-/g,
      ""
    );
    const queryValue = Number(queryTarget[4]);
    let number = 0;

    for (let [key, value] of userMap) {
      let contains = true;
      for (let n = 0; n < queryKey.length; n++) {
        if (!key.includes(queryKey[n])) {
          contains = false;
          break;
        }
      }
      if (contains) {
        // 이분 탐색
        const index = binarySearch(value, queryValue);
        number += value.length - index;
      }
    }
    answer.push(number);
  }
  return answer;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

console.log(solution(info, query));
