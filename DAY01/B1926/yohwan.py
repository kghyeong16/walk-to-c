from collections import deque

# import sys
# input = sys.stdin.readline
# sys.stdin = open("sample.txt")

n,m = map(int, input().split())
map = [list(map(int, input().split())) for _ in range(n)]
visit = [[False] * m for _ in range(n)]

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

def bfs(x, y):
    result = 1
    q = deque()
    q.append((x, y))
    while q:
        x, y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0<=nx<n and 0<=ny<m:
                if map[nx][ny] == 1 and visit[nx][ny] == False:
                    result += 1
                    visit[nx][ny] = True
                    q.append((nx,ny))
    return result

# cnt : 그림갯수, maxV : 최댓값
cnt = 0
maxV = 0

for i in range(n):
    for j in range(m):
        if map[i][j] == 1 and visit[i][j] == False:
            visit[i][j] = True
            cnt += 1
            maxV = max(maxV, bfs(i,j))

print(cnt)
print(maxV)