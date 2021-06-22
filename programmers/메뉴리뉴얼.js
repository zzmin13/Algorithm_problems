function solution(orders, course) {
  const answer = [];

  const getCombinations = (array, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
      return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      results.push(...attached);
    });
    return results;
  };

  for (let c = 0; c < course.length; c++) {
    const map = new Map();
    for (let i = 0; i < orders.length; i++) {
      getCombinations(orders[i].split("").sort(), course[c]).map((element) => {
        if (!map.has(element.join(""))) {
          map.set(element.join(""), 1);
        } else {
          let value = map.get(element.join("")) + 1;
          map.set(element.join(""), value);
        }
        return element.join("");
      });
    }

    const mapArray = [...map];
    let maxValue;
    let maxKey = [];
    mapArray.forEach((value, index) => {
      if (index === 0) {
        maxValue = value[1];
        maxKey.push(value[0]);
      } else {
        if (value[1] > maxValue) {
          maxValue = value[1];
          maxKey = [value[0]];
        } else if (value[1] === maxValue) {
          maxKey.push(value[0]);
        }
      }
    });
    if (maxValue >= 2) {
      answer.push(...maxKey);
    }
  }

  return answer.sort();
}
const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];
console.log(solution(orders, course)); // ["AC", "ACDE", "BCFG", "CDE"]
