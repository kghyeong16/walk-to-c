# import sys
# sys.stdin = open('input.txt', 'r')

left = list(input())
right = []
M = int(input())

for _ in range(M):
  a = list(map(str, input().split()))

  if a[0] == "L" and left:
    right.append(left.pop())
  
  elif a[0] == "D" and right:
    left.append(right.pop())

  elif a[0] == "B" and left:
    left.pop()

  elif a[0] == "P":
    left.append(a[1])
    

print(''.join(left + list(reversed(right))))


# lst = list(input())
# M = int(input())

# cursor = len(lst)

# for _ in range(M):
#   a = list(map(str, input().split()))
  
#   if a[0] == 'P':
#     lst.insert(cursor, a[1])
#     cursor += 1

#   elif a[0] == 'L' and cursor != 0:
#     cursor -= 1

#   elif a[0] == 'D' and cursor < len(lst):
#     cursor += 1

#   elif a[0] == 'B' and cursor > 0:
#     lst.remove(lst[cursor-1])
    

# print(lst)