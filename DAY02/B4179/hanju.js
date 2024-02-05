const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

// 행과 열 길이
const [ N, M ] = input[0].split(" ").map(v => Number(v.trim()));

// 미로의 상태
const maze = Array(N);
for (let i = 1; i <= N; i++) {
  const row = input[i].trim().split("");
  maze[i-1] = row;
}

// 현재 불의 위치와 지훈이의 위치를 기록
let queue = ["start"]
for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    // 지훈이의 위치를 가장 앞에 넣어줌
    if (maze[row][col] === "J") {
      queue[0] = [row, col]
    // 불의 위치는 지훈이 뒤로 넣어줌
    } else if (maze[row][col] === "F") {
      queue.push([row, col])
    }
  }
}

// bfs를 통해 최소 시간 구하기
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]  // 동서남북 탐색을 위한 객체
let result = "IMPOSSIBLE";
let minDist = 1;
bfs: while (queue.length > 0) {
  // 다음 거리의 노드들을 저장할 배열
  const nextQueue = [];
  // 현재 거리의 노드들만 탐색
  for (let i = 0; i < queue.length; i++) {
    // 현재 탐색 노드의 행, 열
    const [ r, c ] = queue[i];
    // 사방을 탐색
    for (const d of direction) {
      const [ nr, nc ] = [ r + d[0], c + d[1] ]
      // 현재 위치가 지훈의 위치일 경우
      if (maze[r][c] === "J") {
        // 지훈이가 탈출할 수 위치일 경우
        if ( nr < 0 || nr >= N || nc < 0 || nc >= M ) {
          result = minDist;
          break bfs;
        }
        // 지훈이 이동
        if (maze[nr][nc] === ".") {
          maze[nr][nc] = "J";
          nextQueue.push([nr, nc])
        }
      // 현재 위치가 불의 위치인 경우
      } else if (maze[r][c] === "F") {
        // 유효한 위치 X
        if ( nr < 0 || nr >= N || nc < 0 || nc >= M ) continue;
        // 불 이동
        if (maze[nr][nc] === "." || maze[nr][nc] === "J") {
          maze[nr][nc] = "F";
          nextQueue.push([nr, nc])
        }
      }
    }
  }
  queue = nextQueue;
  minDist++;
}

// 탈출이 불가능할 경우
console.log(result)