function solution(tickets) {
  const answer = [];
  const DFS = (start, tickets, path) => {
    const newPath = [...path, start];
    if (tickets.length === 0) {
      answer.push(path);
    } else {
      tickets.map((ticket, index) => {
        if (ticket[0] === start) {
          const copiedTickets = [...tickets];
          const nextAirport = ticket[1];
          copiedTickets.splice(index, 1);
          DFS(nextAirport, copiedTickets, newPath);
        }
      });
    }
    DFS("ICN", tickets, []);
    return answer.sort()[0];
  };
}
const tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];
console.log(solution(tickets));
