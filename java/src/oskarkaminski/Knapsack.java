package oskarkaminski;
import java.io.*;
import java.util.Arrays;

public class Knapsack {

    static int[][] maxWeights;

    public static void main(String[] args) throws java.lang.Exception {
        BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
        int[] fl = Arrays.stream(r.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int maxCapacity = fl[0];
        int numOfGoldBars = fl[1];
        int[] goldBars = Arrays.stream(r.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        maxWeights = new int[numOfGoldBars + 1][maxCapacity +1];
        for (int[] row: maxWeights)
            Arrays.fill(row, 0);

        for(int barIndex=1; barIndex <= numOfGoldBars; barIndex++) {
            for (int capacity = 1; capacity <= maxCapacity; capacity++) {
                int barWeight = goldBars[barIndex-1];
                if(barWeight <= capacity &&
                        maxWeights[barIndex-1][capacity] <
                                maxWeights[barIndex-1][capacity-barWeight] + barWeight){
                    maxWeights[barIndex][capacity] = maxWeights[barIndex-1][capacity-barWeight] + barWeight;
                } else {
                    maxWeights[barIndex][capacity] = maxWeights[barIndex-1][capacity];
                }
            }
        }
        int max = maxWeights[numOfGoldBars][maxCapacity];
        System.out.println(max);
    }
}
