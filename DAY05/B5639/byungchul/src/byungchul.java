import java.util.Scanner;
import java.io.IOException;

// 트리의 노드
class Node {
    int data;
    Node left, right; // 왼쪽, 오른쪽 자식 노드

    public Node(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}

public class byungchul {
    // 이진 검색 트리에 노드를 삽입하는 메서드
    public static Node insert(Node node, int data) {
        if (node == null) { // 현재 노드가 null이면 새 노드를 생성하여 반환
            return new Node(data);
        }
        // 삽입하려는 데이터가 현재 노드의 데이터보다 작으면 왼쪽 서브트리에 삽입
        if (data < node.data) {
            node.left = insert(node.left, data);
        } else {
            // 그렇지 않으면 오른쪽 서브트리에 삽입
            node.right = insert(node.right, data);
        }
        return node; // 변경된 트리의 루트 노드를 반환
    }

    // 이진 검색 트리를 후위 순회하며 노드의 데이터를 출력하는 메서드
    public static void postOrder(Node node) {
        if (node == null) {
            return; // 노드가 null이면 return
        }
        postOrder(node.left); // 왼쪽 서브트리를 후위 순회
        postOrder(node.right); // 오른쪽 서브트리를 후위 순회
        System.out.println(node.data); // 현재 노드 데이터를 출력
    }

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);

        Node root = null; // 이진 검색 트리의 루트 노드

        // 입력이 모두 끝날 때까지 반복
        while(scanner.hasNext()) {
            int data = scanner.nextInt();
            root = insert(root, data); // 읽은 데이터를 이진 검색 트리에 삽입
        }

        postOrder(root); // 이진 검색 트리 후위 순회
    }
}
