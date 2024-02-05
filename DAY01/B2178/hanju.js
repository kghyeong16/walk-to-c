const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

// 행과 열 길이
const [ N, M ] = input[0].split(" ").map(v => Number(v.trim()));

// 미로의 상태
const maze = Array(N);
for (let i = 1; i <= N; i++) {
  const row = input[i].split("").map(v => Number(v.trim()));
  maze[i-1] = row;
}

// bfs를 통해 최단 거리 찾기
maze[0][0] = 0;  // 시작 위치 방문 표시
const queue = [[0, 0, 1]];  // bfs 구현을 위한 큐
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]  // 동서남북 탐색을 위한 객체
bfs: while (queue.length > 0) {
  // 행, 열, 현재 위치까지의 최단 거리
  const [ row, col, dist ] = queue.shift();
  // 현재 위치의 사방을 탐색
  for (const d of direction) {
    // 현재 위치로부터 탐색할 좌표
    const newRow = row + d[0];
    const newCol = col + d[1];
    // 유효하지 않은 좌표일 경우
    if (newRow < 0 || newRow >= N || newCol < 0 || newCol >= M) continue;
    // 도착 지점일 경우
    if (newRow === N-1 && newCol === M - 1) {
      console.log(dist + 1);
      break bfs; 
    }
    // 도착지점이 아닌 길인 경우
    if (maze[newRow][newCol] === 1) {
      maze[newRow][newCol] = 0;
      queue.push([newRow, newCol, dist + 1]);
    }
  }
}