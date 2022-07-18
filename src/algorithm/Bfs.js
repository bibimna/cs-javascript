// shift 는 성능이 안좋음 요소가 클경우 큐 사용하기
class Queue {
  constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
  }
  
  enqueue(value) {
      this.queue[this.rear++] = value;
  }
  
  dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
  }
  
  isEmpty() {
      return this.rear === this.front;
  }
}



function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => [])
  
  // 양방향 그래프
  for(const [src, dest] of edge) {
      graph[src].push(dest)
      graph[dest].push(src)
  }
  
  const distance = Array(n+1).fill(0);
  distance[1] = 1;
  
  // BFS
  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
      const src = queue.dequeue();
      
      for(const dest of graph[src]) {
          if(distance[dest] === 0) {
              queue.enqueue(dest);
              distance[dest] = distance[src] + 1;
          }
      }
  }
  
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}

function Bfs(n, graph) {
  const distance = Array(n+1).fill(0);
  distance[1] = 1;
  // BFS
  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
      const src = queue.dequeue();
      
      for(const dest of graph[src]) {
          if(distance[dest] === 0) {
              queue.enqueue(dest);
              distance[dest] = distance[src] + 1;
          }
      }
  }
  console.log('graph', graph);
  console.log('distance', distance)
  return distance.reduce((sum, value) => sum += value);
}

function solution2(n, queryType, student1, student2) {
  const graph = Array.from(Array(n + 1), () => [])
  const result = [];

  for(let i = 0; i < queryType.length; i += 1) {
    if(queryType[i] === 't') {
      result.push(Bfs(n, graph));
    } else {
      graph[student1[i]].push(student2[i])
      graph[student2[i]].push(student1[i])
    }
  }  
  console.log('result', result);
  return result;
}

solution2(4, ['f', 't'], [1, 2], [2, 3]);
solution2(4, ['f', 'f', 't'], [1, 2, 3], [2, 3, 4]);