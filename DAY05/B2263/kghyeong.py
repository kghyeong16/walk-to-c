import sys
sys.setrecursionlimit(10**9)

def preorder( in_start, in_end, post_start, post_end):
    # 재귀 종료 조건
    if( in_start > in_end) or (post_start > post_end):
        return
    
    # 후위 순회 결과의 끝이 트리의 루트임을 이용
    parents = postorder[post_end]
    print(parents, end = " ")

    # 중위 순회에서 루트의 좌우로 자식들이 갈라지는 것을 이용하여 left,right 선언
    left = position[parents] - in_start
    right = in_end - position[parents]

    # left, right로 나눠 분할 정복 방식으로 트리를 추적하여 전위 순회를 찾아냄
    preorder(in_start, in_start + left - 1, post_start, post_start + left - 1)
    preorder(in_end - right + 1, in_end, post_end - right, post_end - 1)

N = int(input())
inorder = list(map(int, input().split()))
postorder = list(map(int, input().split()))

position = [0] * (N + 1)
for i in range(N):
    position[inorder[i]] = i

preorder(0, N - 1, 0, N - 1)