class Graph {
  constructor() {
    this.edges = {};
  }
  // 정점 추가하기
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  // 간선 추가하기
  addEdges(originVertex, destVertex) {
    this.edges[originVertex][destVertex] = true;
  }
  //DFS
  traverseDFS(vertex, visited, number) {
    this._traverseDFS(vertex, visited, number);
  }
  _traverseDFS(vertex, visited, number) {
    visited[Number(vertex)] = number;
    for (let adjacentVertex in this.edges[vertex]) {
      if (visited[Number(adjacentVertex)] === 0) {
        this._traverseDFS(adjacentVertex, visited, number);
      }
    }
  }
}
function solution(n, computers) {
  let answer = 0;
  const graph = new Graph();
  for (let i = 0; i < n; i++) {
    graph.addVertex(i);
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j] === 1) {
        graph.addEdges(i, j);
      }
    }
  }
  const visited = new Array(n).fill(0);
  let number = 1;
  while (visited.includes(0)) {
    for (let i = 0; i < n; i++) {
      if (visited[i] === 0) {
        graph.traverseDFS(i, visited, number);
        number++;
      }
    }
  }
  const set = new Set(visited);
  answer = Math.max(...Array.from(set));
  return answer;
}
