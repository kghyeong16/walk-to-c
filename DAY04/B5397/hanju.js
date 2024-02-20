const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

const N = Number(input[0].trim());

let result = "";
for (let i = 1; i <= N; i++) {
  // 키보드 입력값 변수에 할당
  const inputKey = input[i].trim();

  // 연결리스트를 위한 설정
  const letters = [""];  // 글자 배열
  const links = [[-1, -1]]  // 포인터 배열
  let index = 0;  // 커서 위치

  // 입력값을 통해 연결리스트 완성
  for (let j = 0; j < inputKey.length; j++) {
    let [ left, right ] = links[index];
    // 커서 왼쪽으로 이동
    if (inputKey[j] === "<") {
      if (left !== -1) index = left;
    } 
    // 커서 오른쪽으로 이동
    else if (inputKey[j] === ">") {
      if (right !== -1) index = right;
    }
    // 백스페이스
    else if (inputKey[j] === "-") {
      if (left === -1) continue;
      index = left;
      if (right !== -1) links[right][0] = left;
      links[left][1] = right;
    }
    // 값 입력
    else {
      letters.push(inputKey[j]);
      links.push([index, right]);
      [left, index] = [index, links.length - 1];
      if (right !== -1) links[right][0] = index;
      links[left][1] = index;
    }
  }

  // 연결리스트를 따라 글자를 순서대로 이어붙이기
  index = links[0][1];
  while (index !== -1) {
    result += letters[index];
    index = links[index][1];
  }
  result += "\n"
}

console.log(result.trim())