function solution(tickets) {
  const answer = [];
  const DFS = (start, tickets, path) => {
    let newPath = [...path, start];
    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.map((ticket, index) => {
        if (ticket[0] === start) {
          const copiedTickets = [...tickets];
          const nextAirport = tickets[index][1];
          copiedTickets.splice(index, 1);
          DFS(nextAirport, copiedTickets, newPath);
        }
      });
    }
  };
  DFS("ICN", tickets, []);
  return answer.sort()[0];
}

// const tickets = [
//   ["ICN", "JFK"],
//   ["HND", "IAD"],
//   ["JFK", "HND"],
// ];
const tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];
console.log(solution(tickets));
