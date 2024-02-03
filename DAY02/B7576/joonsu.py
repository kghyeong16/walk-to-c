# import sys
# sys.stdin = open('input.txt', 'r')
from collections import deque

M, N = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
result = -2
temp = 0

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

q = deque()

for i in range(N):
  for j in range(M):
    if arr[i][j] == 1:
      q.append([i, j])

while q:
  x, y = q.popleft()

  for i in range(4):
    new_x = x + dx[i]
    new_y = y + dy[i]

    if 0 <= new_x < N and 0 <= new_y < M and arr[new_x][new_y] == 0:
      arr[new_x][new_y] = arr[x][y] + 1
      q.append([new_x, new_y])

for i in range(N):
    for j in range(M):
        if arr[i][j] == 0:
            temp = 1
        result = max(result, arr[i][j])

if temp == 1:
    print(-1)
elif result == 1:
    print(0)
else:
    print(result-1)