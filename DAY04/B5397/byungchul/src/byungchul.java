import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.ListIterator;

public class byungchul {
    public static void main(String[] args) throws IOException {
        // BufferedReader를 사용 -> 입출력 빠름(대신 문자열밖에 못 읽음)
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int testCases = Integer.parseInt(br.readLine()); // 정수형으로 파싱

        while (testCases-- > 0) {
            // 입력한 문자열
            String input = br.readLine();
            // LinkedList를 사용하여 문자들을 저장
            LinkedList<Character> list = new LinkedList<>();
            // ListIterator를 사용하여 리스트를 순회하고, 수정 -> 양방향
            ListIterator<Character> iterator = list.listIterator();

            // 입력된 문자열의 각 문자에 대해 반복
            for (int i = 0; i < input.length(); i++) {
                char ch = input.charAt(i); // 하나의 문자만 저장
                switch (ch) {
                    case '<': // '<'이면 커서를 왼쪽으로 이동
                        if (iterator.hasPrevious()) iterator.previous(); // hasPrevious()는 이터레이터의 현재 위치에서 이전 요소가 있는지 확인(boolean으로 반환)
                        // previous()는 리스트에서 이터레이터 현재위치를 이전 위치로 변경, 이동한 위치 요소 반환.
                        break;
                    case '>': // '>'이면 커서를 오른쪽으로 이동
                        if (iterator.hasNext()) iterator.next(); // next()는 이터레이터의 현재 위치를 다음 위치로 변경, 이동한 위치의 요소 반환
                        break;
                    case '-': // '-'이면 이전 문자를 삭제
                        if (iterator.hasPrevious()) {
                            iterator.previous();
                            iterator.remove(); // 이터레이터에 의해 마지막으로 반환된 요소 리스트에서 삭제
                        }
                        break;
                    default: // 그 외 문자는 현재 커서 위치에 추가
                        iterator.add(ch); // 리스트에 지정된 요소를 현재 이터레이터 위치에 삽입
                }
            }

            // 최종 문자열을 생성하기 위해 StringBuilder를 사용
            StringBuilder sb = new StringBuilder();
            for (char ch : list) {
                sb.append(ch);
            }
            System.out.println(sb.toString());
        }
    }
}
