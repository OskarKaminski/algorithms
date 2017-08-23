package oskarkaminski;
import java.io.*;
import java.util.Arrays;

public class Majority {
    public static void main(String[] args) throws java.lang.Exception {
        int highest = 1;
        int tempHighest = 1;
        BufferedReader r = new BufferedReader (new InputStreamReader (System.in));
        int n = Integer.parseInt(r.readLine());
        String[] numbers = r.readLine().split(" ");
        Arrays.sort(numbers);
        for(int i = 1; i < numbers.length; i++){
            int currentNumber = Integer.parseInt(numbers[i]);
            int previousNumber = Integer.parseInt(numbers[i-1]);

            if(currentNumber == previousNumber) {
                tempHighest++;
            }
            if (tempHighest > highest) {
                highest = tempHighest;
            }
            if(currentNumber != previousNumber){
                tempHighest = 1;
            }
        }
        if(highest > n/2){
            System.out.println(1);
        } else {
            System.out.println(0);
        }
    }
}
