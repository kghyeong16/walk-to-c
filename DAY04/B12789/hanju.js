const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

const N = Number(input[0].trim());
const line = input[1].trim().split(" ").map(v => Number(v));
const stack = [];

// 현재 줄 처리
let order = 1;
let index = 0;
while ( index < N ) {
  if ( order === line[index] ) {
    order++;
    index++;
  } else if ( order === stack[stack.length -1 ] ) {
    stack.pop();
    order++;
  } else {
    stack.push(line[index])
    index++;
  }
}

// 추가 줄 처리
let result = "Nice"
while (stack.length > 0) {
  const current = stack.pop();
  if (current !== order) {
    result = "Sad";
    break;
  }
  order++;
}

console.log(result)