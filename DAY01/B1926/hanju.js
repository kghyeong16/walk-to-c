const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

// 행과 열 길이
const [ N, M ] = input[0].split(" ").map(v => Number(v.trim()));

// 그림의 상태
const paper = Array(N);
for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(v => Number(v.trim()));
  paper[i-1] = row
}

// 최대넓이와 그림 개수
let numberOfPicture = 0;
let maxWidth = 0; 

// bfs를 통해 그림의 넓이를 구하는 함수
function findWidth(r, c) {
  // 방향을 정의한 객체
  const direction = [[1, 0], [0, 1], [0, -1], [-1, 0]];
  // 현재 그림의 넓이
  let width = 1;
  // bfs 구현을 위한 큐
  let queue = [[r, c]];  
  // bfs를 통해 넓이 구하기
  while (queue.length !== 0) {
    const [r, c] = queue.shift();
    for (const d of direction) {
      const nr = r + d[0];
      const nc = c + d[1];
      if ( nr < 0 || nr >= N || nc < 0 || nc >= M ) continue;
      if ( paper[nr][nc] === 1 ) {
        paper[nr][nc] = 0;
        width += 1;
        queue.push([nr, nc])
      }
    }
  }
  // 최대 넓이 갱신
  if ( width > maxWidth ) maxWidth = width;
}

// 종이의 좌표를 돌며 그림들의 개수와 최대 넓이 구하기
for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    // 그림의 일부분이라 판단되면 그림의 넓이 구하기
    if (paper[row][col] === 1) {
      // 그림 개수 추가
      numberOfPicture++;
      // 방문 표시
      paper[row][col] = 0
      findWidth(row, col);
    }
  }
}

console.log(numberOfPicture + "\n" + maxWidth);