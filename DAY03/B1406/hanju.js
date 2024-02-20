const file = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs").readFileSync(file).toString().split("\n");

// 변수에 입력값 할당
const letters = ["", ...input[0].trim().split("")];
const M = Number(input[1].trim());

// 연결리스트 설정
const links = new Array(letters.length).fill().map((v, i) => [i-1, i+1]);
links[links.length - 1][1] = -1

// 명령어에 따라 연결리스트들을 수정
let index = links.length - 1;  // 초기 커서 위치
for (let i = 2; i < 2 + M; i++) {
  // 다음 수행할 명령 변수에 할당
  const action = input[i].trim().split(" ");
  // 현재 요소의 좌우 인덱스
  let [ left, right ] = links[index];
  // 명령 실행
  switch (action[0]) {
    // 커서 왼쪽으로 이동
    case "L":  
      if (left !== -1) index = left;
      break;
    // 커서 오른쪽으로 이동
    case "D":  
      if (right !== -1) index = right;
      break;
    // 현재 문자 삭제
    case "B":  
      // 커서가 제일 앞에 있을 때
      if (left === -1) continue;
      // 인덱스 갱신
      index = left;
      // 이후 요소 변경
      if (right !== -1) links[right][0] = left;
      // 이전 연결 요소 변경
      links[left][1] = right;
      break;
    // 문자 추가
    case "P":  
      // 배열에 새로운 요소 추가
      letters.push(action[1]);
      links.push([index, right]);
      // 인덱스값 갱신
      [left, index] = [index, links.length - 1];
      // 이후 연결 요소 변경
      if (right !== -1) links[right][0] = index;
      // 이전 연결 요소 변경
      links[left][1] = index;
      break;
    default:
      break;
  }
}

// 연결 리스트를 순회하며 정답 출력
let result = "";
index = links[0][1];
while (index !== -1) {
  result += letters[index];
  index = links[index][1];
}
console.log(result)