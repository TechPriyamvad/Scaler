package Java_Fundamentals;
import java.util.Scanner;

public class simpleInterest {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter principal: ");
        int principal = scn.nextInt();
        System.out.println("Enter rate of interest: ");
        int rOI = scn.nextInt();
        System.out.println("Enter time: ");
        int time = scn.nextInt();

        int simpleInterest = (principal*rOI*time)/100;
        System.out.println("Simple Interest: " + simpleInterest);
    }
}
