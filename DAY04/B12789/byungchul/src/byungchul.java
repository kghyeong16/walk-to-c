import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class byungchul {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); // 학생들의 수
        StringTokenizer st = new StringTokenizer(br.readLine()); // 문자열을 여러 개의 토큰으로 분할하는 데 사용되는 클래스, 번호표 순서
        Stack<Integer> stack = new Stack<>(); // 1열 공간을 스택으로
        int current = 1; // 현재 확인해야 할 번호 순서

        for(int i = 0; i < N; i++) {
            int number = Integer.parseInt(st.nextToken());
            if(number == current) {
                // 현재 순서와 일치하면 간식을 받음
                current++;
            } else {
                // 일치하지 않으면 스택으로 이동
                stack.push(number);
            }

            // 스택의 맨 위 학생이 현재 순서와 일치하는지 확인
            while(!stack.isEmpty() && stack.peek() == current) { // peek은 최상단 값 확인, pop하지 않음
                stack.pop(); // 간식을 받음
                current++;
            }
        }

        // 모든 학생이 순서대로 간식을 받았는지 확인
        if(current - 1 == N) {
            System.out.println("Nice");
        } else {
            System.out.println("Sad");
        }
    }
}
