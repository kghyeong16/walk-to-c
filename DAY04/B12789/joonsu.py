# import sys
# sys.stdin = open('input.txt', 'r')

N = int(input())
lst = list(map(int, input().split()))
new_lst = []
now = 1

while lst:
  if lst[0] == now:
    lst.pop(0)
    now += 1
  else:
    new_lst.append(lst.pop(0))

  while new_lst and new_lst[-1] == now:
    new_lst.pop()
    now += 1

print("Sad" if new_lst else "Nice")