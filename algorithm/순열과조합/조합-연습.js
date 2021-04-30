let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().split("\n");
const array = input[0].split(" ").map((element) => Number(element));
const selectNumber = Number(input[1]);

const getCombinations = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}
console.log(getCombinations(array, selectNumber));