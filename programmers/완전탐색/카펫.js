function solution(brown, yellow) {
  const answer = [];
  let brownWidthInitial = Math.floor(brown / 2);
  for (let brownWidth = brownWidthInitial; brownWidth > 2; brownWidth--) {
    let yellowHeight = (brown - brownWidth * 2) / 2;
    let yellowWidth = brownWidth - 2;
    let brownHeight = (brown - brownWidth * 2) / 2 + 2;
    if (yellowWidth * yellowHeight === yellow) {
      answer.push(brownWidth);
      answer.push(brownHeight);
      break;
    }
  }
  return answer;
}
