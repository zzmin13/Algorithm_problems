function solution(jobs) {
  let answer = 0;
  jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let [require, work] = jobs[0];
  let end = require + work;
  let time = end;
  const priorityQueue = [];

  answer += end - require;

  let index = 1;
  while (index < jobs.length || priorityQueue.length) {
    if (index < jobs.length && jobs[index][0] <= time) {
      priorityQueue.push(jobs[index]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
      index++;
      continue;
    }
    if (priorityQueue.length) {
      [require, work] = priorityQueue.shift();
      end = time + work;
      time = end;
      answer += end - require;
    } else {
      [require, work] = jobs[index];
      if (require > time) {
        time = require;
        end = time + work;
        time = end;
        answer += end - require;
      } else {
        end = time + work;
        time = end;
        answer += end - require;
      }
      index++;
    }
  }

  return Math.floor(answer / jobs.length);
}

const jobs = [
  [0, 5],
  [2, 10],
  [100, 2],
];
console.log(solution(jobs));
