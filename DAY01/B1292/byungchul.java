import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int A = scanner.nextInt();
        int B = scanner.nextInt();

        int sum = 0;
        int currentNumber = 1;
        int count = 0; // 해당 숫자의 반복 횟수

        // B까지의 합
        for (int i = 1; i <= B; i++) {
            if (i >= A) { // A이상 B 이하의 범위에 대해서 합 계산
                sum += currentNumber;
            }
            count++;
            if (count == currentNumber) { // 현재 숫자가 해당 숫자만큼 반복되면 넘어가기
               currentNumber++;
                count = 0;
            }
        }
        System.out.println(sum);
    }
}
