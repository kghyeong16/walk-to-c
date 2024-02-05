from collections import deque
DIRECTION = ((0,1), (1,0), (0, -1), (-1, 0))
n, m = map(int, input().split())

board = [list(map(int, input())) for _ in range(n)]

visited = [[0] * m for _ in range(n)]

q = deque()
q.append((0, 0))
visited[0][0] = 1
while q:
    x, y = q.popleft()
    count = visited[x][y]
    for dx, dy in DIRECTION:
        nx = x + dx
        ny = y + dy
        if 0<=nx<n and 0<=ny<m and board[nx][ny] and not visited[nx][ny]:
            q.append((nx, ny))
            visited[nx][ny] = count + 1

print(visited[n-1][m-1])