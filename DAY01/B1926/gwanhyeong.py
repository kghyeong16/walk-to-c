from collections import deque
DIRECTION = ((0,1), (1,0), (0, -1), (-1, 0))
def bfs(row, col):
    global visited
    q = deque()
    q.append((row, col))
    width = 1
    visited[row][col] = width
    while q:
        x, y = q.popleft()
        for dx, dy in DIRECTION:
            nx = x + dx
            ny = y + dy
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if board[nx][ny] and not visited[nx][ny]:
                q.append((nx,ny))
                width += 1
                visited[nx][ny] = width
    return width

n, m = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(n)]

visited = [[0] * m for _ in range(n)]

count = 0
max_width = 0
for row in range(n):
    for col in range(m):
        if board[row][col] and not visited[row][col]:
            count += 1
            max_width = max(max_width, bfs(row, col))

print(count)
print(max_width)