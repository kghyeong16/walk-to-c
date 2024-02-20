import java.util.Scanner;

public class byungchul {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int height = scanner.nextInt(); // 높이(세로)
        int length = scanner.nextInt(); // 길이(가로)
        int[] blocks = new int[length]; // 블록 높이를 가로 길이 만큼 저장할 배열 생성
        for (int i = 0; i < length; i++) { // 만든 배열에 높이를 입력받아 저장
            blocks[i] = scanner.nextInt();
        }

        System.out.println(calculateRainWater(blocks));
    }

    private static int calculateRainWater(int[] blocks) { // 왼쪽 오른쪽 최대 높이 계산, 각 위치의 고일 수 있는 빗물의 양을 계산하여 합산, 계산된 빗물 총량 반환
        int totalWater = 0; // 총 빗물의 양
        int[] leftMaxes = new int[blocks.length]; // 왼쪽 최대 높이 저장 배열
        int[] rightMaxes = new int[blocks.length]; // 오른쪽 최대 높이 저장 배열

        int leftMax = blocks[0]; // 왼쪽에서부터 현재 위치까지 최대 높이 계산
        for (int i = 0; i < blocks.length; i++) {
            leftMax = Math.max(leftMax, blocks[i]);
            leftMaxes[i] = leftMax;
        }

        int rightMax = blocks[blocks.length - 1]; // 오른쪽에서부터 현재 위치까지 최대 높이 계산
        for (int i = blocks.length - 1; i >= 0; i--) {
            rightMax = Math.max(rightMax, blocks[i]);
            rightMaxes[i] = rightMax;
        }

        // 각 위치에서 고일 수 있는 빗물의 양을 계산
        for (int i = 0; i < blocks.length; i++) {
            totalWater += Math.min(leftMaxes[i], rightMaxes[i]) - blocks[i]; // 왼쪽, 오른쪽 최대 높이 중 더 낮은 값에서 현재 블록의 높이를 빼서 구함함
       }

        // 총 빗물의 양
        return totalWater;
    }
}
