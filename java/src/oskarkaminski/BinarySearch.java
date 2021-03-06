package oskarkaminski;

import java.io.*;
import java.util.Arrays;

public class BinarySearch {

    private static int searchKey(int[] sequence, int value, int l, int r) {
        if (l < r) {
            int middle = l + ((r - l) / 2);
            if (value > sequence[middle]) {
                return searchKey(sequence, value, middle+1, r);
            } else if (value < sequence[middle]){
                return searchKey(sequence, value, l, middle - 1);
            }
            else {
                return middle;
            }
        } else {
            if(value == sequence[l]){
                return l;
            } else {
                return -1;
            }
        }
    }

    public static void main(String[] args) throws java.lang.Exception {
        BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
        int[] sequence = Arrays.stream(r.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] keysToSearch = Arrays.stream(r.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        int[] justNumbers = Arrays.copyOfRange(sequence, 1, sequence[0]+1);
        for (int i = 1; i <= keysToSearch[0]; i++) {
            int result = searchKey(justNumbers, keysToSearch[i], 0, sequence[0]-1);
            System.out.print(result + " ");
        }
    }
}
