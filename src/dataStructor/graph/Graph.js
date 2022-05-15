// 인접 행렬
const graph = Array.from(
  Array(5),
  () => Array(5).fill(false)
);

graph[0][1] = true; // 0 -> 1
graph[0][3] = true; // 0 -> 3
graph[1][2] = true; // 1 -> 2
graph[2][0] = true; // 2 -> 0
graph[2][4] = true; // 2 -> 4
graph[3][2] = true; // 3 -> 2
graph[4][0] = true; // 4 -> 0


// 인접 리스트
const graphList = Array.from(
  Array(5),
  () => []
);
graphList[0].push(1); // 0 -> 1
graphList[0].push(3); // 0 -> 3
graphList[1].push(2); // 1 -> 2
graphList[2].push(0); // 2 -> 0
graphList[2].push(4); // 2 -> 4
graphList[3].push(2); // 3 -> 2
graphList[4].push(0); // 4 -> 0
