from collections import deque

N = int(input())

first_line = list(map(int, input().split()))
queue = deque(first_line)
stack = []
check_number = 1

while queue:
    current = queue.popleft()
    if current == check_number:
        check_number += 1
    else:
        stack.append(current)

flag = True
while flag and stack:
    current = stack.pop()
    if current == check_number:
        check_number += 1
    else:
        flag = False

print('Nice') if flag else print('Sad')