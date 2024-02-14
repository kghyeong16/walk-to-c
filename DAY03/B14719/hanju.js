const file = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = require('fs').readFileSync(file).toString().split('\n');

// 입력값 변수에 할당
const [H, W] = input[0].split(" ").map(v => Number(v.trim()));
const blocks = input[1].split(" ").map(v => Number(v.trim()));

// 높이별로 블록 위치 정리하고 블록 부피 구하기
let blockVolume = 0;
const heights = Array(H + 1).fill().map(v => new Array())
for (let i = 0; i < W; i++) {
  // 블록 부피 갱신
  blockVolume += blocks[i]
  // 높이별로 설치된 블록 위치 표시
  for (let h = 1; h < blocks[i] + 1; h++) {
    heights[h].push(i)
  }
}

// 총 부피 구하기(블록 + 물)
let totalVolume = 0;
for (let h = 1; h < H + 1; h++) {
  const locs = heights[h]
  if (!locs.length) break;
  totalVolume += locs[locs.length - 1] - locs[0] + 1
}

console.log(totalVolume - blockVolume)