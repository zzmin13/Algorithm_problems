/*
<제목> DFS와 BFS

<문제>
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고,
더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

<입력>
첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.
어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

<출력>
첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

<예제 입력 1>
4 5 1
1 2
1 3
1 4
2 4
3 4

<예제 출력 1>
1 2 4 3
1 2 3 4

<예제 입력 2>
5 5 3
5 4
5 2
1 2
3 4
3 1

<예제 출력 2>
3 1 2 5 4
3 1 4 2 5

<예제 입력 3>
1000 1 1000
999 1000

<예제 출력 3>
1000 999
1000 999

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
input[0] = input[0].split(" ");
const N = Number(input[0][0]); // 정점의 개수
const M = Number(input[0][1]); // 간선의 개수
const startVertex = Number(input[0][2]); // 시작 정점
input.shift();

class UndirectedGraph {
  constructor() {
    this.edges = {};
    this.dfsArray = [];
    this.bfsArray = [];
  }
  // 정점 추가
  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  // 간선 추가
  addEdge(vertex1, vertex2) {
    this.edges[vertex1][vertex2] = true;
    this.edges[vertex2][vertex1] = true;
  }

  traverseBFS(startVertex) {
    const queue = [];
    const visited = {};
    queue.push(startVertex);

    while (queue.length) {
      let vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        this.bfsArray.push(vertex);
        for (let adjacentVertex in this.edges[vertex]) {
          queue.push(adjacentVertex);
        }
      }
    }
    return this.bfsArray;
  }

  traverseDFS(vertex) {
    const visited = {};
    this._traverseDFS(vertex, visited);
    return this.dfsArray;
  }
  _traverseDFS(vertex, visited) {
    visited[vertex] = true;
    this.dfsArray.push(vertex);
    for (let adjacentVertex in this.edges[vertex]) {
      if (!visited[adjacentVertex]) {
        this._traverseDFS(adjacentVertex, visited);
      }
    }
  }
}

graph = new UndirectedGraph();
for (let i = 0; i < N; i++) {
  graph.addVertex(i + 1);
}
for (let j = 0; j < M; j++) {
  input[j] = input[j].split(" ");
  const vertex1 = Number(input[j][0]);
  const vertex2 = Number(input[j][1]);
  graph.addEdge(vertex1, vertex2);
}

console.log(graph.traverseDFS(startVertex).join(" "));
console.log(graph.traverseBFS(startVertex).join(" "));
