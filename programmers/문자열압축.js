function solution(s) {
  let answer = [];
  let answerString = "";
  let min = 0;

  const cutString = (string, length) => {
    return string.match(new RegExp(`.{1,${length}}`, "g"));
  };

  for (let leng = 1; leng <= s.length; leng++) {
    const array = cutString(s, leng);
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        answer.push(array[i]);
        map.set(array[i], 1);
      } else {
        if (array[i] === array[i - 1]) {
          map.set(array[i], map.get(array[i]) + 1);
          answer[answer.length - 1] = `${map.get(array[i])}${array[i]}`;
        } else {
          answer.push(array[i]);
          map.set(array[i], 1);
        }
      }
    }
    answerString = answer.join("");
    if (min === 0) {
      min = answerString.length;
    } else {
      if (answerString.length < min) {
        min = answerString.length;
      }
    }
    answer = [];
    answerString = "";
  }
  return min;
}
const s = "b";
console.log(solution(s));
