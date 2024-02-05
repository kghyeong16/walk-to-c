const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

// 행과 열 길이
const [ N, M ] = input[0].split(" ").map(v => Number(v.trim()));

// 농장의 상태
const farm = Array(M);
for (let i = 1; i <= M; i++) {
  const row = input[i].split(" ").map(v => Number(v.trim()));
  farm[i-1] = row;
}

// 현재 익은 토마토 위치 찾고 개수 갱신
const queue = Array(N * M);  // bfs 구현을 위한 큐
let [front, rear] = [0, 0]
let tomatoCount = 0;  // 익은 토마토 개수
let totalCount = N * M  // 익어야하는 토마토 총 개수
for (let row = 0; row < M; row++) {
  for (let col = 0; col < N; col++) {
    // 토마토가 있지 않은 칸이면 총 개수 감소
    if (farm[row][col] === -1) {
      totalCount--;
    // 토마토가 있는 칸이면 큐에 넣어준 후 개수 증가
    } else if (farm[row][col] === 1) {
      queue[rear] = [row, col, 0];
      tomatoCount++;
      rear++;
    }
  }
}

// bfs를 통해 최소 날짜 구하기
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]  // 동서남북 탐색을 위한 객체
let minDay = 0;
while (front !== rear) {
  // 행, 열, 현재 위치까지의 최단 날짜
  const [ row, col, day ] = queue[front];
  // 최소 날짜 갱신
  minDay = day
  // 현재 위치의 사방을 탐색
  for (const d of direction) {
    // 현재 위치로부터 탐색할 좌표
    const newRow = row + d[0];
    const newCol = col + d[1];
    // 유효하지 않은 좌표일 경우
    if (newRow < 0 || newRow >= M || newCol < 0 || newCol >= N) continue;
    // 덜익은 토마토가 있는 칸일 경우
    if (farm[newRow][newCol] === 0) {
      queue[rear] = [newRow, newCol, day + 1];
      farm[newRow][newCol] = 1;
      tomatoCount++;
      rear++;
    }
  }
  front++;
}

// 익지 못한 토마토가 없는지 확인 후 정답 출력
console.log(tomatoCount === totalCount ? minDay : -1)