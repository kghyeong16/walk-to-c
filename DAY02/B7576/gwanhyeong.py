from collections import deque

DIRECTION = ((0,1), (1,0), (0, -1), (-1, 0))

n, m = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(m)]
answer = 0
q = deque()
for row in range(m):
    for col in range(n):
        if board[row][col] == 1:
            q.append((row, col))

while q:
    x, y = q.popleft()
    for dx, dy in DIRECTION:
        nx = x + dx
        ny = y + dy
        if 0 <= nx < m and 0 <= ny < n and board[nx][ny] == 0:
            board[nx][ny] = board[x][y] + 1
            q.append((nx, ny))

for row in board:
    for element in row:
        if element == 0:
            print(-1)
            exit(0)
    answer = max(answer, max(row))
print(answer-1)