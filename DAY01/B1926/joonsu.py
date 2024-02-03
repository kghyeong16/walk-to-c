# import sys
# sys.stdin = open('input.txt', 'r')
from collections import deque

def BFS(x, y):
  arr[x][y] = 0
  width = 1
  q = deque()
  q.append([x, y])
  
  while q:
    x, y = q.popleft()
    for i in range(4):
      new_x = x + dx[i]
      new_y = y + dy[i]
      
      if 0 <= new_x < n and 0 <= new_y < m and arr[new_x][new_y] == 1:
        q.append([new_x, new_y])
        arr[new_x][new_y] = 0
        width += 1

  return width


n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

cnt = 0
result = 0

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for i in range(n):
  for j in range(m):
    if arr[i][j] == 1:
      cnt += 1
      result = max(BFS(i, j), result)

print(cnt)
print(result)