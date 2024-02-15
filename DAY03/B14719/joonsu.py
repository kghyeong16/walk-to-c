# import sys
# sys.stdin = open('input.txt', 'r')

H, W = map(int, input().split())
lst = list(map(int, input().split()))

result = 0

for i in range(1, len(lst) - 1):
  left = max(lst[:i])
  right = max(lst[i+1:])

  low = min(left, right)

  if low > lst[i]:
    result += low - lst[i]

print(result)