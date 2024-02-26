import java.util.Scanner;

public class byungchul {
    // 각 순회에서의 결과를 저장할 배열
    static int[] inorder;
    static int[] postorder;
    static int[] position; // 각 노드 중위 순회에서의 위치 저장
    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 정점 개수
        // 배열 크기 n
        inorder = new int[n];
        postorder = new int[n];
        position = new int[n + 1];

        for (int i = 0; i < n; i ++) { // 중위 순회 결과 저장
            inorder[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) { // 후위 순회 결과 저장
            postorder[i] = sc.nextInt();
        }
        for(int i = 0; i < n; i++) { // 각 노드의 중위 순회에서의 위치 저장
            position[inorder[i]] = i;
        }

        // 전위순회 결과 찾기
        findPreorder(0, n - 1, 0, n -1);
        System.out.println(sb); // 전위 순회 결과 출력
    }

    public static void findPreorder(int inStart, int inEnd, int postStart, int postEnd) {
        if (inStart > inEnd || postStart > postEnd) return; // 순회 범위 넘어가면 종료
        int root = postorder[postEnd]; // 후위 순회 마지막 원소는 현재 서브트리의 루트 노드
        sb.append(root + " "); // 루트 노드 스트링빌더에 추가
        int rootIndex = position[root]; // 루트 노드의 중위 순회에서의 위치 찾기
        int left = rootIndex - inStart; // 왼쪽 서브트리의 크기 계산

        // 왼쪽 서브트리
        findPreorder(inStart, rootIndex - 1, postStart, postStart + left - 1);
        // 오른쪽 서브트리
        findPreorder(rootIndex + 1, inEnd, postStart + left, postEnd - 1);
    }
}
