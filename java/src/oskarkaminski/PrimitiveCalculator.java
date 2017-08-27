package oskarkaminski;

import java.io.*;
import java.util.Arrays;

public class PrimitiveCalculator {
    public static void main(String[] args) throws java.lang.Exception {
        BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(r.readLine());
        int[] numbers = new int[100];
        int i = 0;
        while(number != 1){
            if(number % 3 == 0){
                numbers[i] = number / 3;
                number /= 3;
            }
            else if(number % 2 == 0){
                numbers[i] = number / 2;
                number /= 2;
            }
            else {
                numbers[i] = number - 1;
                number -= 1;
            }
            i++;
        }
        System.out.println(i);

    }
}
