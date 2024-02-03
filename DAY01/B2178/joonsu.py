# import sys
# sys.stdin = open('input.txt', 'r')
from collections import deque

def BFS(x, y):
  q = deque()
  q.append([x, y])

  while q:
    x, y = q.popleft()

    for i in range(4):
      new_x = x + dx[i]
      new_y = y + dy[i]

      if 0 <= new_x < N and 0 <= new_y < M and arr[new_x][new_y] == 1:
        q.append([new_x, new_y])
        arr[new_x][new_y] = arr[x][y] + 1

  return arr[N-1][M-1]

N, M = map(int, input().split())
arr = [list(map(int, input().rstrip())) for _ in range(N)]

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

print(BFS(0,0))