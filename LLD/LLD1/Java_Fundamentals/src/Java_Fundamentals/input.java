package Java_Fundamentals;

import java.util.Scanner;

public class input {
    public static void main(String[] args){
//        read input in java
        Scanner scn = new Scanner(System.in);
//        int s1 = scn.nextInt();
//        System.out.println("Input: " + s1);
//        short s2 = scn.nextShort();
//        System.out.println("Input: " + s2);
//
//        long s3 = scn.nextLong();
//        System.out.println("Input: " + s3);

//        float s4 = (float)scn.nextDouble();
//        System.out.println("Input: " + s4);

        String s5 = scn.next();
        System.out.println("Input: " + s5.charAt(0));
    }

//    public int findSumByFormula(int num){
//        return num * (num+1)/2;
//    }

    public int findSumWithoutFormula(int num){
        int sum = 0;
        for(int i=1;i <= num;i++){
            sum += i;
        }

        return sum;
    }
}
