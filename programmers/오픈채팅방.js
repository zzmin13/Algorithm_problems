function solution(record) {
  const answer = [];
  const map = new Map();
  for (let i = 0; i < record.length; i++) {
    const target = record[i].split(" ");
    if (target[0] === "Enter" || target[0] === "Change") {
      map.set(target[1], target[2]);
    }
  }
  for (let i = 0; i < record.length; i++) {
    const target = record[i].split(" ");
    if (target[0] === "Enter") {
      const string = map.get(target[1]) + "님이 들어왔습니다.";
      answer.push(string);
    } else if (target[0] === "Leave") {
      const string = map.get(target[1]) + "님이 나갔습니다.";
      answer.push(string);
    }
  }
  return answer;
}
const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));
