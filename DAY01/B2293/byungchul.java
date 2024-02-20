import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt(); // 동전 종류 수
        int k = scanner.nextInt(); // 목표 금액

        int[] coins = new int[n]; // 각 동전의 가치를 저장할 배열
        for (int i = 0; i < n; i++) {
            coins[i] = scanner.nextInt(); // 각 동전의 가치 입력
        }

        int[] dp = new int[k + 1]; // dp[i]: 금액 i를 만드는 경우의 수
        dp[0] = 1; // 금액 0을 만드는 경우의 수는 1(아무 동전도 사용하지 않는 경우)

        for (int coin : coins) { // coins 배열 순회
            for (int i = coin; i <= k; i++) { // coin의 가치부터 목표 금액까지 모든 금액 i 반복
                dp[i] += dp[i - coin]; //
            }
        }

        System.out.println(dp[k]); // 목표 금액 k를 만드는 경우의 수 출력
    }
}
