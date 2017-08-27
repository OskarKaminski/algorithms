package oskarkaminski;
import java.io.*;

public class PrimitiveCalculator {

    public static int minNumOfOperations(int number, int[] numOfOperations){
        if(number == 1){
            return 0;
        }
        double minNum = Double.POSITIVE_INFINITY;
        if(number % 3 == 0){
            int currentMin = numOfOperations[number/3];
            if (currentMin + 1 < minNum){
                minNum = currentMin + 1;
            }
        }
        if(number % 2 == 0){
            int currentMin = numOfOperations[number/2];
            if (currentMin + 1 < minNum){
                minNum = currentMin + 1;
            }
        }
        int currentMin = numOfOperations[number-1];
        if (currentMin + 1 < minNum){
            minNum = currentMin + 1;
        }
        return (int)minNum;
    }

    public static void main(String[] args) throws java.lang.Exception {
        BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
        int number = Integer.parseInt(r.readLine());
        int[] numOfOperations = new int[number+1];
        numOfOperations[0] = 0;
        for(int i = 1; i <= number; i++){
            numOfOperations[i] = minNumOfOperations(i, numOfOperations);
        }
        int min = numOfOperations[number];
        System.out.println(min);
    }
}
