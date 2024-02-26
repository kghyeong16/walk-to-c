import sys
sys.setrecursionlimit(10**5)

def build_preorder(inorder, postorder):
    if not inorder or not postorder: # 재귀 호출의 종료조건, 주어진 인오더나 포스트오더가 비어있다면
        return []
    
    root = postorder[-1] # 포스트오더의 맨뒤는 최상위노드
    root_index = inorder.index(root)  # 최상위노드 인덱스를 인오더에서 찾아서 왼쪽 오른쪽 서브트리 구분

    left_inorder = inorder[:root_index]
    right_inorder = inorder[root_index +1:]

    left_postorder = postorder[:len(left_inorder)]
    right_postorder = postorder[len(left_inorder):-1]

    preorder = [root] # 현재 서브트리의 루트 노드를 프리오더 리스트에 추가
    preorder += build_preorder(left_inorder, left_postorder) # 왼쪽 서브트리의 프리오더를 구해 현재 프리오더 리스트에 추가
    preorder += build_preorder(right_inorder, right_postorder)
    return preorder

n = int(input())

inorder = list(map(int, input().split()))
postorder = list(map(int, input().split()))

preorder = build_preorder(inorder, postorder)
print(*preorder)
