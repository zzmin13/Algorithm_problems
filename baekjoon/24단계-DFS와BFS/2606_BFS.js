/*
<제목> 바이러스
<문제>
신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다.
한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
예를 들어 7대의 컴퓨터가 <그림 1>과 같이 네트워크 상에서 연결되어 있다고 하자.
1번 컴퓨터가 웜 바이러스에 걸리면 웜 바이러스는 2번과 5번 컴퓨터를 거쳐 3번과 6번 컴퓨터까지 전파되어
2, 3, 5, 6 네 대의 컴퓨터는 웜 바이러스에 걸리게 된다.
하지만 4번과 7번 컴퓨터는 1번 컴퓨터와 네트워크상에서 연결되어 있지 않기 때문에 영향을 받지 않는다.

어느 날 1번 컴퓨터가 웜 바이러스에 걸렸다.
컴퓨터의 수와 네트워크 상에서 서로 연결되어 있는 정보가 주어질 때, 
번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오.

<입력>
첫째 줄에는 컴퓨터의 수가 주어진다. 컴퓨터의 수는 100 이하이고 각 컴퓨터에는 1번 부터 차례대로 번호가 매겨진다.
둘째 줄에는 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수가 주어진다.
이어서 그 수만큼 한 줄에 한 쌍씩 네트워크 상에서 직접 연결되어 있는 컴퓨터의 번호 쌍이 주어진다.

<출력>
1번 컴퓨터가 웜 바이러스에 걸렸을 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 첫째 줄에 출력한다.

<예제 입력 1>
7
6
1 2
2 3
1 5
5 2
5 6
4 7

<예제 출력 1>
4

*/

let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().split("\n");
const vertexNumber = Number(input[0]); // 컴퓨터의 수 : 7
const edgeNumber = Number(input[1]); // 간선의 수 : 6
input.shift();
input.shift();

class UndirectedGraph {
  constructor() {
    this.edges = {};
    this.BFSArray = [];
  }

  // 정점 추가하기
  addVertex(vertex) {
    this.edges[vertex] = {};
  }

  // 간선 추가하기
  addEdges(vertex1, vertex2) {
    this.edges[vertex1][vertex2] = true;
    this.edges[vertex2][vertex1] = true;
  }

  // BFS
  traverseBFS(vertex) {
    const queue = [];
    const visited = {};
    queue.push(vertex);

    while (queue.length) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        this.BFSArray.push(vertex);
        for (let adjacentVertex in this.edges[vertex]) {
          queue.push(adjacentVertex);
        }
      }
    }
    return this.BFSArray;
  }
}

const undirectedGraph = new UndirectedGraph();
for (let i = 1; i <= vertexNumber; i++) {
  undirectedGraph.addVertex(i);
}

for (let j = 0; j < edgeNumber; j++) {
  input[j] = input[j].split(" ");
  undirectedGraph.addEdges(Number(input[j][0]), Number(input[j][1]));
}
const answer = undirectedGraph.traverseBFS(1).length - 1;
console.log(answer);
