import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Scanner 객체 생성
        int N = scanner.nextInt(); // 정점의 개수를 나타내는 N 저장
        int[][] graph = new int[N][N]; // 2차원 배열 생성
        int[][] result = new int[N][N]; // 2차원 배열 생성, 각 정점 사이 경로 존재 여부 저장

        for (int i = 0; i < N; i++) { // 입력 받은 2차원 배열
            for (int j = 0; j < N; j++) {
                graph[i][j] = scanner.nextInt();
            }
        }

        for (int i = 0; i < N; i++) { // dfs 메서드 호출
            dfs(graph, result, i, i, N);
        }

        for (int i = 0; i < N; i++) { // 경로 존재 여부를 출력
            for (int j = 0; j < N; j++) {
                System.out.print(result[i][j] + " ");
            }
            System.out.println();
        }
    }
    // 파라미터는 그래프 연결 상태, 결과(경로 존재 여부), 시작점, 방문중인 정점, 정점 개수
    public static void dfs(int[][] graph, int[][] result, int start, int node, int N) {
        for (int i = 0; i < N; i++) { // node에서 갈 수 있는 모든 정점 i를 순회
            if (graph[node][i] == 1 && result[start][i] == 0) { // node에서 i로의 경로가 있는 지, start에서 i로의 경로가 이미 확인 되었는 지
                result[start][i] = 1; // start에서 i로 가는 경로가 존재함을 표시
                dfs(graph, result, start, i, N); // i에서 다시 DFS 수행
            }
        }
    }
}
